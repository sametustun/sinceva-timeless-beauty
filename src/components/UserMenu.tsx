import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, ShoppingBag } from 'lucide-react';

interface UserMenuProps {
  isScrolled: boolean;
}

const translations = {
  tr: {
    login: 'Giriş Yap',
    myAccount: 'Hesabım',
    myOrders: 'Siparişlerim',
    logout: 'Çıkış Yap',
  },
  en: {
    login: 'Login',
    myAccount: 'My Account',
    myOrders: 'My Orders',
    logout: 'Logout',
  },
  ar: {
    login: 'تسجيل الدخول',
    myAccount: 'حسابي',
    myOrders: 'طلباتي',
    logout: 'تسجيل الخروج',
  },
};

const UserMenu: React.FC<UserMenuProps> = ({ isScrolled }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  const handleLogout = async () => {
    await logout();
  };

  if (!isAuthenticated) {
    return (
      <Link
        to="/auth"
        className={`flex items-center p-2 transition-all duration-500 ${
          !isScrolled
            ? 'text-white hover:text-[hsl(var(--hover))]'
            : 'text-[#191919] hover:text-[hsl(var(--hover))]'
        }`}
        aria-label={t.login}
      >
        <User className="h-5 w-5" />
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center p-2 transition-all duration-500 ${
            !isScrolled
              ? 'text-white hover:text-[hsl(var(--hover))]'
              : 'text-[#191919] hover:text-[hsl(var(--hover))]'
          }`}
          aria-label={t.myAccount}
        >
          {user?.metadata?.picture ? (
            <img
              src={user.metadata.picture}
              alt=""
              className="h-6 w-6 rounded-full"
            />
          ) : (
            <User className="h-5 w-5" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white z-50">
        <div className="px-2 py-1.5 text-sm font-medium truncate">
          {user?.metadata?.name || user?.email}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/orders" className="flex items-center">
            <ShoppingBag className="mr-2 h-4 w-4" />
            {t.myOrders}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          {t.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
