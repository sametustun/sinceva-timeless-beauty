// Content data structure for WordPress conversion
// This file contains all static content that will be replaced by WordPress dynamic content

// Import logo assets
import sincevaWhiteLogoWeb from '@/assets/sinceva_white_logo_for_web.png';
import sincevaBlackLogoWeb from '@/assets/sinceva_black_logo_for_web.png';
import sincevaWhiteLogoMobile from '@/assets/sinceva_white_logo_for_mobile.png';
import sincevaBlackLogoMobile from '@/assets/sinceva_black_logo_for_mobile.png';

export const heroContent = {
  title: {
    main: "The Origin",
    accent: "of Beauty"
  },
  subtitle: "Since Eva, we've been dedicated to creating premium skincare solutions that celebrate your natural radiance and timeless elegance.",
  backgroundImage: "/src/assets/hero-skincare.jpg",
  backgroundAlt: "Sinceva skincare products",
  ctaButtons: [
    {
      text: "Discover Products",
      link: "/shop",
      variant: "primary" as const
    },
    {
      text: "Our Story", 
      link: "/about",
      variant: "outline" as const
    }
  ]
};

export const featuredProductsContent = {
  title: "Featured Products",
  subtitle: "Our most loved skincare essentials, carefully curated for exceptional results.",
  ctaButton: {
    text: "View All Products",
    link: "/shop"
  },
  products: [
    {
      id: 1,
      name: 'Vitamin C Brightening Serum',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      description: 'Powerful vitamin C serum for radiant, even-toned skin with natural brightening properties.',
      image: '' // Will be populated by WordPress
    },
    {
      id: 2,
      name: 'Hyaluronic Acid Moisturizer',
      price: 64.99,
      rating: 4.9,
      reviews: 89,
      badge: 'New',
      description: 'Deep hydration with hyaluronic acid for plump, smooth, and supple skin all day long.',
      image: ''
    },
    {
      id: 3,
      name: 'Retinol Anti-Aging Night Cream',
      price: 129.99,
      rating: 4.7,
      reviews: 156,
      badge: 'Premium',
      description: 'Advanced retinol formula to reduce signs of aging and promote skin renewal overnight.',
      image: ''
    },
    {
      id: 4,
      name: 'Daily SPF 50 Sunscreen',
      price: 49.99,
      rating: 4.5,
      reviews: 112,
      badge: '',
      description: 'Broad spectrum protection with lightweight, non-greasy formula perfect for daily use.',
      image: ''
    }
  ]
};

export const categoryShowcaseContent = {
  title: "Explore Our Collections",
  subtitle: "Discover skincare solutions tailored to your unique needs and skin concerns.",
  categories: [
    {
      id: 'anti-aging-care',
      title: 'Anti-Aging Care',
      description: 'Advanced solutions for youthful, radiant skin',
      href: '/category/anti-aging-care',
      gradient: 'from-primary/20 to-primary-light/10',
      image: '' // Will be populated by WordPress
    },
    {
      id: 'face-and-skin-cleansing',
      title: 'Face & Skin Cleansing',
      description: 'Gentle cleansers for healthy, refreshed skin',
      href: '/category/face-and-skin-cleansing',
      gradient: 'from-secondary/30 to-accent/20',
      image: ''
    },
    {
      id: 'daily-care',
      title: 'Daily Care',
      description: 'Essential products for your everyday routine',
      href: '/category/daily-care',
      gradient: 'from-muted/50 to-background',
      image: ''
    }
  ]
};

export const navigationContent = {
  brand: {
    name: "Sinceva",
    tagline: "Beauty redefined"
  },
  mainNavigation: [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop', hasMegaMenu: true },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  megaMenuCategories: [
    {
      category: 'Anti-Aging Care',
      items: [
        { name: 'Serums & Treatments', href: '/category/anti-aging-care?type=serums' },
        { name: 'Night Creams', href: '/category/anti-aging-care?type=night-creams' },
        { name: 'Eye Care', href: '/category/anti-aging-care?type=eye-care' }
      ]
    },
    {
      category: 'Face & Skin Cleansing',
      items: [
        { name: 'Cleansers', href: '/category/face-and-skin-cleansing?type=cleansers' },
        { name: 'Exfoliants', href: '/category/face-and-skin-cleansing?type=exfoliants' },
        { name: 'Toners', href: '/category/face-and-skin-cleansing?type=toners' }
      ]
    },
    {
      category: 'Daily Care',
      items: [
        { name: 'Moisturizers', href: '/category/daily-care?type=moisturizers' },
        { name: 'Sunscreens', href: '/category/daily-care?type=sunscreens' },
        { name: 'Masks', href: '/category/daily-care?type=masks' }
      ]
    }
  ]
};

export const logoContent = {
  desktop: {
    white: sincevaWhiteLogoWeb,
    black: sincevaBlackLogoWeb
  },
  mobile: {
    white: sincevaWhiteLogoMobile || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=30&fit=crop&auto=format', // Fallback beyaz logo
    black: sincevaBlackLogoMobile
  },
  fallback: {
    text: 'Sinceva',
    showText: true
  }
};

export const footerContent = {
  brand: {
    name: "Sinceva",
    description: "Premium skincare solutions that celebrate your natural radiance and timeless elegance.",
    tagline: "Beauty redefined, naturally.",
    socialLinks: [
      { platform: 'Facebook', href: '#', icon: 'Facebook' },
      { platform: 'Instagram', href: '#', icon: 'Instagram' },
      { platform: 'Twitter', href: '#', icon: 'Twitter' },
      { platform: 'Youtube', href: '#', icon: 'Youtube' }
    ]
  },
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  policies: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' }
  ],
  newsletter: {
    title: "Stay Beautiful",
    description: "Subscribe to get beauty tips and exclusive offers."
  },
  copyright: "© 2024 Sinceva. All rights reserved."
};