// Content data structure for WordPress conversion
// This file contains all static content that will be replaced by WordPress dynamic content

// Import logo assets - GitHub synchronized files
import sincevaWhiteLogoWeb from '@/assets/sinceva_white_logo_for_web.png';
import sincevaBlackLogoWeb from '@/assets/sinceva_black_logo_for_web.png';
import sincevaWhiteLogoMobile from '@/assets/sinceva_white_logo_for_mobile.png';
import sincevaBlackLogoMobile from '@/assets/sinceva_black_logo_for_mobile.png';

// Import hero image
import heroSkincare from '@/assets/hero-skincare.jpg';

// Import product images - using uploaded div images
import cvitImage from '@/assets/cvit_div.png';
import arbutinImage from '@/assets/arbutin_div.png';
import gozImage from '@/assets/göz_div.png';
import gunesImage from '@/assets/güneş_div.png';
import nemlendiriciImage from '@/assets/nemlendirici_div.png';
import nightCreamImage from '@/assets/gece_div.png';
import tonikImage from '@/assets/tonik_div.png';
import peelingImage from '@/assets/peeling_div.png';
import yuzImage from '@/assets/yüz_div.png';

// Import category images
import antiAgingCart from '@/assets/antiagingcart.png';
import cleansingCart from '@/assets/cleansingcart.png';
import dailyCareCart from '@/assets/dailycarecart.png';

// Import category banner images
import antiAgingBanner from '@/assets/anti aging kategori.jpg';
import cleansingBanner from '@/assets/cleansing kategori.jpg';
import dailyCareBanner from '@/assets/daily kategori.jpg';

export const heroContent = {
  title: {
    main: "The Origin",
    accent: "of Beauty"
  },
  subtitle: "Since Eva, we've been dedicated to creating premium skincare solutions that celebrate your natural radiance and timeless elegance.",
  backgroundImage: heroSkincare,
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

// Product Categories Structure
export const categoryStructure = {
  "anti-aging-care": {
    title: "Anti-Aging Care",
    description: "Advanced formulas to reduce fine lines, boost collagen, and restore youthful radiance to your skin.",
    bannerImage: antiAgingBanner,
    subcategories: {
      "face-serum": {
        title: "Face Serum",
        products: [
          {
            id: 1,
            name: 'Sinceva Brightening Vitamin C Serum 30 ml',
            price: 89.99,
            description: 'Powerful vitamin C serum for radiant, even-toned skin with natural brightening properties.',
            image: cvitImage
          },
          {
            id: 2,
            name: 'Sinceva Anti-Spot Arbutin Serum 30 ml',
            price: 79.99,
            description: 'Advanced arbutin formula to reduce dark spots and even skin tone.',
            image: arbutinImage
          }
        ]
      },
      "eye-care": {
        title: "Eye Care",
        products: [
          {
            id: 3,
            name: 'Sinceva Anti-Wrinkle Eye Cream 20 ml',
            price: 79.99,
            description: 'Firming eye cream with peptides to reduce fine lines and brighten the delicate eye area.',
            image: gozImage
          }
        ]
      },
      "anti-wrinkle-care": {
        title: "Anti-Wrinkle Care",
        products: [
          {
            id: 4,
            name: 'Sinceva Anti-Aging Night Cream 50 ml',
            price: 129.99,
            description: 'Advanced retinol formula to reduce signs of aging and promote skin renewal overnight.',
            image: nightCreamImage
          }
        ]
      }
    }
  },
  "face-and-skin-cleansing": {
    title: "Face & Skin Cleansing",
    description: "Gentle yet effective cleansers that purify your skin while maintaining its natural moisture balance.",
    bannerImage: cleansingBanner,
    subcategories: {
      "toner": {
        title: "Toner",
        products: [
          {
            id: 5,
            name: 'Sinceva Skin Renewing Tonic 200 ml',
            price: 44.99,
            description: 'Gentle chemical exfoliant that reveals smoother, brighter skin with regular use.',
            image: tonikImage
          }
        ]
      },
      "peeling-exfoliator": {
        title: "Peeling / Exfoliator",
        products: [
          {
            id: 6,
            name: 'Sinceva Purifying Peeling Cream Scrub 200 ml',
            price: 54.99,
            description: 'Advanced exfoliating scrub that gently removes dead skin cells for smoother texture.',
            image: peelingImage
          }
        ]
      },
      "foaming-cleanser": {
        title: "Foaming Cleanser",
        products: [
          {
            id: 7,
            name: 'Sinceva Purifying Face Cleansing Foam 200 ml',
            price: 32.99,
            description: 'Mild foaming cleanser that removes impurities without stripping skin of essential moisture.',
            image: yuzImage
          }
        ]
      }
    }
  },
  "daily-care": {
    title: "Daily Care",
    description: "Essential daily skincare products for healthy, protected, and nourished skin every day.",
    bannerImage: dailyCareBanner,
    subcategories: {
      "sunscreen": {
        title: "Sunscreen",
        products: [
          {
            id: 8,
            name: 'Sinceva SPF 50+ Daily SunCare Cream 100 ml',
            price: 49.99,
            description: 'Broad spectrum protection with lightweight, non-greasy formula perfect for daily use.',
            image: gunesImage
          }
        ]
      },
      "moisturizer": {
        title: "Moisturizer",
        products: [
          {
            id: 9,
            name: 'Sinceva Hyaluronic Acid Moisturizing Cream 50 ml',
            price: 64.99,
            description: 'Deep hydration with hyaluronic acid for plump, smooth, and supple skin all day long.',
            image: nemlendiriciImage
          }
        ]
      }
    }
  }
};

// All products content - compiled from all categories
export const allProductsContent = {
  title: "All Our Products",
  subtitle: "Discover our complete collection of premium skincare solutions, expertly crafted for every skin type and concern.",
  products: Object.values(categoryStructure).flatMap(category => 
    Object.values(category.subcategories).flatMap(subcategory => subcategory.products)
  )
};

export const categoryShowcaseContent = {
  title: "Explore Our Categories",
  subtitle: "Curated collections designed to address your unique skincare needs with precision and care.",
  categories: [
    {
      id: "anti-aging",
      titleKey: "categories.antiAging.title",
      descriptionKey: "categories.antiAging.description",
      href: "/category/anti-aging-care",
      gradient: "from-purple-600 to-pink-600",
      image: antiAgingCart
    },
    {
      id: "cleansing",
      titleKey: "categories.cleansing.title",
      descriptionKey: "categories.cleansing.description",
      href: "/category/face-and-skin-cleansing",
      gradient: "from-blue-600 to-teal-600",
      image: cleansingCart
    },
    {
      id: "daily-care",
      titleKey: "categories.dailyCare.title",
      descriptionKey: "categories.dailyCare.description",
      href: "/category/daily-care",
      gradient: "from-green-600 to-emerald-600",
      image: dailyCareCart
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
        { name: 'Face Serum', href: '/category/anti-aging-care/face-serum' },
        { name: 'Eye Care', href: '/category/anti-aging-care/eye-care' },
        { name: 'Anti-Wrinkle Care', href: '/category/anti-aging-care/anti-wrinkle-care' }
      ]
    },
    {
      category: 'Face & Skin Cleansing',
      items: [
        { name: 'Toner', href: '/category/face-and-skin-cleansing/toner' },
        { name: 'Peeling / Exfoliator', href: '/category/face-and-skin-cleansing/peeling-exfoliator' },
        { name: 'Foaming Cleanser', href: '/category/face-and-skin-cleansing/foaming-cleanser' }
      ]
    },
    {
      category: 'Daily Care',
      items: [
        { name: 'Sunscreen', href: '/category/daily-care/sunscreen' },
        { name: 'Moisturizer', href: '/category/daily-care/moisturizer' }
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
    white: sincevaWhiteLogoMobile, // Gerçek GitHub logo dosyası
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
    { name: 'The Origin Of Beauty', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  policies: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Terms and Conditions', href: '/terms' },
    { name: 'Consumer Review Rules', href: '/consumer-ratings' }
  ],
  newsletter: {
    title: "Stay Beautiful",
    description: "Subscribe to get beauty tips and exclusive offers."
  },
  copyright: "© 2024 Sinceva. All rights reserved."
};