import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock, Eye, EyeOff } from 'lucide-react';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, config: any) => void;
          prompt: () => void;
        };
      };
    };
  }
}

const translations = {
  tr: {
    title: 'Hesabım',
    loginTab: 'Giriş Yap',
    registerTab: 'Kayıt Ol',
    email: 'E-posta',
    password: 'Şifre',
    confirmPassword: 'Şifre Tekrar',
    login: 'Giriş Yap',
    register: 'Kayıt Ol',
    orContinueWith: 'veya şununla devam et',
    googleLogin: 'Google ile Giriş',
    loginDescription: 'Hesabınıza giriş yaparak sepetinize ve tercihlerinize tüm cihazlardan erişin.',
    registerDescription: 'Yeni bir hesap oluşturarak alışveriş deneyiminizi kişiselleştirin.',
    passwordMismatch: 'Şifreler eşleşmiyor',
    passwordTooShort: 'Şifre en az 6 karakter olmalı',
    invalidEmail: 'Geçerli bir e-posta adresi girin',
    loginSuccess: 'Giriş başarılı!',
    registerSuccess: 'Kayıt başarılı!',
    errors: {
      INVALID_CREDENTIALS: 'E-posta veya şifre hatalı',
      EMAIL_ALREADY_EXISTS: 'Bu e-posta adresi zaten kayıtlı',
      USE_OAUTH_LOGIN: 'Bu hesap Google ile oluşturulmuş. Lütfen Google ile giriş yapın.',
      NETWORK_ERROR: 'Bağlantı hatası. Lütfen tekrar deneyin.',
    },
  },
  en: {
    title: 'My Account',
    loginTab: 'Login',
    registerTab: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    login: 'Login',
    register: 'Register',
    orContinueWith: 'or continue with',
    googleLogin: 'Login with Google',
    loginDescription: 'Sign in to access your cart and preferences from all your devices.',
    registerDescription: 'Create an account to personalize your shopping experience.',
    passwordMismatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 6 characters',
    invalidEmail: 'Please enter a valid email address',
    loginSuccess: 'Login successful!',
    registerSuccess: 'Registration successful!',
    errors: {
      INVALID_CREDENTIALS: 'Invalid email or password',
      EMAIL_ALREADY_EXISTS: 'This email is already registered',
      USE_OAUTH_LOGIN: 'This account was created with Google. Please login with Google.',
      NETWORK_ERROR: 'Connection error. Please try again.',
    },
  },
  ar: {
    title: 'حسابي',
    loginTab: 'تسجيل الدخول',
    registerTab: 'إنشاء حساب',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    orContinueWith: 'أو المتابعة باستخدام',
    googleLogin: 'تسجيل الدخول باستخدام جوجل',
    loginDescription: 'قم بتسجيل الدخول للوصول إلى سلة التسوق والتفضيلات من جميع أجهزتك.',
    registerDescription: 'أنشئ حسابًا لتخصيص تجربة التسوق الخاصة بك.',
    passwordMismatch: 'كلمات المرور غير متطابقة',
    passwordTooShort: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل',
    invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
    loginSuccess: 'تم تسجيل الدخول بنجاح!',
    registerSuccess: 'تم التسجيل بنجاح!',
    errors: {
      INVALID_CREDENTIALS: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      EMAIL_ALREADY_EXISTS: 'هذا البريد الإلكتروني مسجل بالفعل',
      USE_OAUTH_LOGIN: 'تم إنشاء هذا الحساب باستخدام جوجل. يرجى تسجيل الدخول باستخدام جوجل.',
      NETWORK_ERROR: 'خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
    },
  },
};

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

const Auth: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { login, register, loginWithGoogle, isAuthenticated } = useAuth();
  const { mergeServerCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ email: '', password: '', confirmPassword: '' });

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  // Initialize Google Sign-In
  React.useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
        });
        
        const googleButton = document.getElementById('google-signin-button');
        if (googleButton) {
          window.google.accounts.id.renderButton(googleButton, {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: 'continue_with',
          });
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleCallback = async (response: any) => {
    if (response.credential) {
      setIsLoading(true);
      const result = await loginWithGoogle(response.credential);
      setIsLoading(false);
      
      if (result.success) {
        // Merge server cart if exists
        if (result.cart && result.cart.length > 0) {
          mergeServerCart(result.cart);
        }
        toast({
          title: t.loginSuccess,
        });
        const from = (location.state as any)?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        toast({
          title: 'Hata',
          description: (t.errors as any)[result.error || ''] || result.error,
          variant: 'destructive',
        });
      }
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(loginForm.email)) {
      toast({ title: t.invalidEmail, variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    const result = await login(loginForm.email, loginForm.password);
    setIsLoading(false);

    if (result.success) {
      // Merge server cart if exists
      if (result.cart && result.cart.length > 0) {
        mergeServerCart(result.cart);
      }
      toast({ title: t.loginSuccess });
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      toast({
        title: 'Hata',
        description: (t.errors as any)[result.error || ''] || result.error,
        variant: 'destructive',
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(registerForm.email)) {
      toast({ title: t.invalidEmail, variant: 'destructive' });
      return;
    }

    if (registerForm.password.length < 6) {
      toast({ title: t.passwordTooShort, variant: 'destructive' });
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      toast({ title: t.passwordMismatch, variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    const result = await register(registerForm.email, registerForm.password);
    setIsLoading(false);

    if (result.success) {
      toast({ title: t.registerSuccess });
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      toast({
        title: 'Hata',
        description: (t.errors as any)[result.error || ''] || result.error,
        variant: 'destructive',
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">{t.loginTab}</TabsTrigger>
                  <TabsTrigger value="register">{t.registerTab}</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4 mt-4">
                  <CardDescription className="text-center mb-4">
                    {t.loginDescription}
                  </CardDescription>
                  
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">{t.email}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="ornek@email.com"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password">{t.password}</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                      {t.login}
                    </Button>
                  </form>

                  {GOOGLE_CLIENT_ID && (
                    <>
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            {t.orContinueWith}
                          </span>
                        </div>
                      </div>
                      <div id="google-signin-button" className="flex justify-center" />
                    </>
                  )}
                </TabsContent>

                <TabsContent value="register" className="space-y-4 mt-4">
                  <CardDescription className="text-center mb-4">
                    {t.registerDescription}
                  </CardDescription>
                  
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-email">{t.email}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="ornek@email.com"
                          value={registerForm.email}
                          onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-password">{t.password}</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-password"
                          type={showPassword ? 'text' : 'password'}
                          value={registerForm.password}
                          onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-confirm">{t.confirmPassword}</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-confirm"
                          type={showPassword ? 'text' : 'password'}
                          value={registerForm.confirmPassword}
                          onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                      {t.register}
                    </Button>
                  </form>

                  {GOOGLE_CLIENT_ID && (
                    <>
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            {t.orContinueWith}
                          </span>
                        </div>
                      </div>
                      <div id="google-signin-button-register" className="flex justify-center" />
                    </>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
