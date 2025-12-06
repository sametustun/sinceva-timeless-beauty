import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  LayoutDashboard,
  Users,
  Mail,
  FileText,
  Package,
  LogOut,
  Menu,
  Home,
  Settings,
  Send,
  Download,
} from 'lucide-react';
import logoBlack from '@/assets/sinceva_black_logo_for_mobile.png';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Aboneler', href: '/admin/subscribers', icon: Users },
  { name: 'İletişim Mesajları', href: '/admin/contacts', icon: Mail },
  { name: 'E-posta Kampanyası', href: '/admin/campaign', icon: Send },
  { name: 'Blog Yazıları', href: '/admin/blog', icon: FileText },
  { name: 'Ürünler', href: '/admin/products', icon: Package },
  { name: 'Veri Import', href: '/admin/import', icon: Download },
  { name: 'Ayarlar', href: '/admin/settings', icon: Settings },
];

function NavItems({ onItemClick }: { onItemClick?: () => void }) {
  const location = useLocation();
  const { logout } = useAdminAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b">
        <Link to="/admin" className="block">
          <img src={logoBlack} alt="SincEva" className="h-12 mx-auto" />
        </Link>
        <p className="text-center text-xs text-muted-foreground mt-2">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onItemClick}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="p-4 border-t space-y-2">
        <Link
          to="/"
          onClick={onItemClick}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Home className="h-5 w-5" />
          Siteye Git
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-background">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <NavItems onItemClick={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r bg-background">
        <NavItems />
      </aside>
    </>
  );
}
