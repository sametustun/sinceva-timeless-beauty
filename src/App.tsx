import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import CheckoutFail from "./pages/CheckoutFail";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ConsumerReviewRules from "./pages/ConsumerReviewRules";
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSubscribers from "./pages/admin/Subscribers";
import AdminContacts from "./pages/admin/Contacts";
import AdminBlogManagement from "./pages/admin/BlogManagement";
import AdminProductManagement from "./pages/admin/ProductManagement";
import AdminSettings from "./pages/admin/Settings";
import AdminCampaign from "./pages/admin/Campaign";
import AdminImportData from "./pages/admin/ImportData";
import AdminCategories from "./pages/admin/Categories";
import AdminMediaManager from "./pages/admin/MediaManager";
import AdminOrders from "./pages/admin/Orders";
import AdminShippingProviders from "./pages/admin/ShippingProviders";

console.log('App component loading...');

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering...');
  
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/search" element={<Search />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/category/:category/:subcategory" element={<Category />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/checkout/fail" element={<CheckoutFail />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/consumer-ratings" element={<ConsumerReviewRules />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={
                <AdminAuthProvider>
                  <AdminLogin />
                </AdminAuthProvider>
              } />
              <Route path="/admin" element={
                <AdminAuthProvider>
                  <AdminLayout />
                </AdminAuthProvider>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="shipping" element={<AdminShippingProviders />} />
                <Route path="subscribers" element={<AdminSubscribers />} />
                <Route path="contacts" element={<AdminContacts />} />
                <Route path="blog" element={<AdminBlogManagement />} />
                <Route path="products" element={<AdminProductManagement />} />
                <Route path="campaign" element={<AdminCampaign />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="media" element={<AdminMediaManager />} />
                <Route path="import" element={<AdminImportData />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
