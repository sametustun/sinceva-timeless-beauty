# WordPress Conversion Guide

This React project is now structured for easy WordPress theme conversion. Here's the mapping and conversion guide:

## Project Structure for WordPress

### Static Components (Layout & UI)
These components handle layout and UI elements - they'll become WordPress template parts:

- `src/components/Layout.tsx` → `header.php` + `footer.php` wrapper
- `src/components/Header.tsx` → `header.php`
- `src/components/Footer.tsx` → `footer.php`
- `src/components/MegaMenu.tsx` → Navigation part in `header.php`
- `src/components/SearchPanel.tsx` → Search functionality in `header.php`

### Dynamic Content Components (Data-driven)
These components display content - they'll become WordPress template sections:

- `src/components/sections/HeroSection.tsx` → Hero section with WordPress custom fields
- `src/components/sections/ProductsSection.tsx` → Products loop with WooCommerce
- `src/components/sections/CategoriesSection.tsx` → Categories loop with WooCommerce
- `src/components/ui/*` → Reusable UI components (can be copied as-is)

### Content Data Structure
- `src/data/content.ts` → This will be replaced by WordPress database content
  - `heroContent` → Custom fields for homepage
  - `featuredProductsContent` → WooCommerce products query
  - `categoryShowcaseContent` → WooCommerce categories query
  - `navigationContent` → WordPress menus
  - `footerContent` → WordPress customizer options

### Page Templates
- `src/components/templates/HomeTemplate.tsx` → `front-page.php` or `index.php`
- `src/components/templates/PageTemplate.tsx` → `page.php`
- `src/pages/Index.tsx` → Main homepage template
- `src/pages/About.tsx` → `page-about.php`
- `src/pages/Blog.tsx` → `blog.php` or `home.php`
- `src/pages/Shop.tsx` → `woocommerce/archive-product.php`
- `src/pages/Category.tsx` → `woocommerce/taxonomy-product_cat.php`

## WordPress Files to Create

### 1. Theme Files
```
style.css (theme header)
index.php (fallback template)
functions.php (enqueue styles/scripts)
header.php (from Header.tsx)
footer.php (from Footer.tsx)
front-page.php (from HomeTemplate.tsx)
```

### 2. WooCommerce Integration
```
woocommerce/
  archive-product.php (shop page)
  single-product.php (product page)
  taxonomy-product_cat.php (category page)
```

### 3. Content Structure
- Use WordPress Custom Fields for hero content
- Use WooCommerce for products and categories
- Use WordPress Customizer for theme options
- Use WordPress Menus for navigation

## Key Conversion Notes

1. **CSS Framework**: Tailwind CSS classes can be kept or compiled to regular CSS
2. **React Router**: Replace with WordPress template hierarchy
3. **Component Props**: Replace with WordPress queries and custom fields
4. **Static Data**: Replace with WordPress database queries
5. **State Management**: Replace with WordPress/PHP logic

## Recommended WordPress Plugins
- Advanced Custom Fields (for custom content)
- WooCommerce (for products/shop functionality)
- Customizer Framework (for theme options)

The modular structure makes it easy to map each React component to its WordPress equivalent while maintaining the same design and functionality.