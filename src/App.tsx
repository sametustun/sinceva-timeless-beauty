import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CookiePolicy from "./pages/CookiePolicy";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import KVKK from "./pages/KVKK";
import ConsumerRatings from "./pages/ConsumerRatings";

console.log('App component loading...');

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering...');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/category/:category/:subcategory" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/consumer-ratings" element={<ConsumerRatings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
