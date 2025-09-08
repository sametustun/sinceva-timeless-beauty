/**
 * WordPress Conversion Reference Component
 * 
 * This file documents the exact mapping between React components
 * and their WordPress equivalents for development reference.
 * 
 * DO NOT DELETE - Use as conversion guide
 */

// STATIC COMPONENTS (Layout & UI) → WordPress Template Parts
// ================================================================

// Layout.tsx → header.php + footer.php wrapper
// - Becomes WordPress template structure
// - Header and Footer called via get_header() and get_footer()

// Header.tsx → header.php
// - Logo system becomes WordPress customizer options
// - Navigation becomes wp_nav_menu()
// - Mobile menu becomes responsive WordPress navigation

// Footer.tsx → footer.php  
// - Footer content becomes WordPress customizer
// - Copyright becomes dynamic with get_bloginfo()

// MegaMenu.tsx → Navigation part in header.php
// - Becomes wp_nav_menu() with custom walker
// - Categories become WooCommerce product categories

// SearchPanel.tsx → Search functionality in header.php
// - Becomes WordPress search form with get_search_form()


// DYNAMIC CONTENT (Data-driven) → WordPress Queries
// ================================================================

// Hero.tsx + HeroSection.tsx → Custom Fields
// - heroContent → Advanced Custom Fields (ACF)
// - Background images → WordPress media library
// - CTA buttons → ACF link fields

// FeaturedProducts.tsx + ProductsSection.tsx → WooCommerce
// - featuredProductsContent → WooCommerce product query
// - Product data → WC_Product objects
// - Product images → WooCommerce gallery

// CategoryShowcase.tsx + CategoriesSection.tsx → WooCommerce
// - categoryShowcaseContent → WooCommerce category query  
// - Category data → WP_Term objects
// - Category images → WooCommerce category fields


// PAGE TEMPLATES → WordPress Template Hierarchy
// ================================================================

// templates/HomeTemplate.tsx → front-page.php
// templates/PageTemplate.tsx → page.php

// pages/Index.tsx → front-page.php (homepage)
// pages/About.tsx → page-about.php (custom page template)
// pages/Blog.tsx → home.php (blog index)
// pages/Contact.tsx → page-contact.php (custom page template)
// pages/Shop.tsx → woocommerce/archive-product.php
// pages/Category.tsx → woocommerce/taxonomy-product_cat.php


// DATA LAYER → WordPress Database
// ================================================================

// data/content.ts → WordPress Queries
// - heroContent → get_field() ACF queries
// - featuredProductsContent → WooCommerce product queries
// - categoryShowcaseContent → WooCommerce category queries
// - navigationContent → wp_get_nav_menu_items()
// - footerContent → get_theme_mod() customizer options


// CONVERSION PRIORITY ORDER
// ================================================================

// 1. THEME SETUP
//    - style.css (theme header)
//    - functions.php (enqueue scripts/styles)
//    - index.php (fallback template)

// 2. LAYOUT TEMPLATES  
//    - header.php (from Header.tsx)
//    - footer.php (from Footer.tsx)

// 3. PAGE TEMPLATES
//    - front-page.php (from HomeTemplate.tsx)
//    - page.php (from PageTemplate.tsx)

// 4. WOOCOMMERCE TEMPLATES
//    - woocommerce/archive-product.php (from Shop.tsx)
//    - woocommerce/taxonomy-product_cat.php (from Category.tsx)

// 5. CONTENT INTEGRATION
//    - Replace data/content.ts with WordPress queries
//    - Setup ACF for custom fields
//    - Configure WooCommerce

export const WordPressConversionMap = {
  // This is a documentation component - not for rendering
  purpose: "WordPress conversion reference",
  status: "Ready for conversion",
  structure: "Optimized for WordPress template hierarchy"
};