# Restore Buddy - Bike Restoration Blog

A clean, modern, mobile-first website for a bike restoration blog built with HTML, CSS, and JavaScript. Features animated navigation, SEO optimization, and affiliate product integration.

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in your browser
3. **Customize content** by editing the HTML files
4. **Deploy** to your web hosting service

## 📁 Project Structure

```
restore-buddy/
├── index.html              # Homepage with blog listing and products
├── post.html               # Blog post template
├── product.html            # Product detail template
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── scripts.js      # JavaScript functionality
│   ├── svg/
│   │   ├── instagram.svg   # Instagram icon
│   │   ├── illustration-hero.svg
│   │   └── illustration-tools.svg
│   └── images/              # Image assets (add your own)
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── manifest.json           # PWA manifest
└── README.md               # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Deep teal (`#0f6769`)
- **Secondary**: Warm orange (`#f39c12`)
- **Background**: Whitesmoke (`#f5f5f5`)
- **Accent**: Darker orange (`#e67e22`)

### Typography
- **Primary**: System fonts (San Francisco, Segoe UI, Roboto)
- **Headings**: Georgia serif for elegance
- **Responsive**: Scales from mobile to desktop

### Layout
- **Mobile-first** responsive design
- **Grid system** for blog cards and products
- **Sticky header** with scroll effects
- **Semantic HTML5** structure

## 🧭 Navigation Features

### Three Animation Styles
The navbar includes three different mobile menu animations:

1. **Morph**: Hamburger morphs into X using CSS transforms
2. **Rotate**: Bars rotate and fade out
3. **Slide**: Bars slide and menu items stagger in from right

### Accessibility
- **Keyboard navigation** support
- **ARIA attributes** for screen readers
- **Focus management** and visible focus styles
- **Skip-to-content** link
- **Reduced motion** support

## 📱 Mobile Features

- **Touch-friendly** interface
- **Swipe gestures** support
- **Responsive images** with srcset
- **Lazy loading** for performance
- **PWA ready** with manifest.json

## 🔍 SEO Optimization

### Meta Tags
- **Title tags** optimized for each page
- **Meta descriptions** with target keywords
- **Open Graph** tags for social sharing
- **Twitter Card** support
- **Canonical URLs** to prevent duplicate content

### Structured Data (JSON-LD)
- **Organization** schema for business info
- **WebSite** schema with search functionality
- **BlogPosting** schema for articles
- **Product** schema for affiliate products
- **BreadcrumbList** for navigation
- **AggregateRating** for product reviews

### Performance
- **Critical CSS** inlined for above-the-fold content
- **Resource preloading** for critical assets
- **Image optimization** with responsive srcset
- **Lazy loading** for below-the-fold images
- **Minimal JavaScript** with no external dependencies

## 🛒 Affiliate Integration

### Product Cards
- **Affiliate links** with proper `rel="sponsored noopener noreferrer"`
- **Price display** with currency formatting
- **Product ratings** and reviews
- **SKU tracking** with data attributes
- **Affiliate disclosure** text

### SEO for Affiliate Content
- **Product schema** markup
- **Price and availability** information
- **Review aggregation** display
- **Related products** suggestions

## 📝 Content Management

### Adding New Blog Posts
1. **Copy `post.html`** and rename to your post slug
2. **Update meta tags** (title, description, keywords)
3. **Replace content** in the article section
4. **Update JSON-LD** structured data
5. **Add to sitemap.xml**
6. **Link from homepage** blog grid

### Adding New Products
1. **Copy `product.html`** and rename to product slug
2. **Update product information** and images
3. **Replace affiliate links** with your tracking URLs
4. **Update product schema** JSON-LD
5. **Add to sitemap.xml**
6. **Link from homepage** products grid

### Image Guidelines
- **Hero images**: 1200x630px for social sharing
- **Blog thumbnails**: 400x200px (mobile), 800x400px (desktop)
- **Product images**: 400x400px minimum
- **Format**: WebP preferred, JPEG fallback
- **Alt text**: Descriptive for accessibility

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to repository
- **AWS S3**: Upload files to bucket

### Server Requirements
- **Any web server** (Apache, Nginx, IIS)
- **HTTPS required** for PWA features
- **Gzip compression** recommended
- **Browser caching** for static assets

### Domain Setup
1. **Point domain** to your hosting service
2. **Update sitemap.xml** with your domain
3. **Update robots.txt** with your domain
4. **Update manifest.json** with your domain
5. **Update canonical URLs** in HTML files

## 🔧 Customization

### Changing Colors
Edit CSS custom properties in `assets/css/styles.css`:
```css
:root {
  --color-primary: #0f6769;        /* Deep teal */
  --color-secondary: #f39c12;     /* Warm orange */
  --color-background: whitesmoke;  /* Base background */
}
```

### Adding New Animation Styles
1. **Add CSS classes** in `assets/css/styles.css`
2. **Update JavaScript** in `assets/js/scripts.js`
3. **Add button** in HTML navigation
4. **Update CONFIG.animationStyles** array

### Modifying Layout
- **Grid columns**: Change `grid-template-columns` in CSS
- **Spacing**: Adjust `--spacing-*` variables
- **Typography**: Modify `--font-*` variables
- **Breakpoints**: Update media queries

## 📊 Analytics Setup

### Google Analytics
1. **Create GA4 property** in Google Analytics
2. **Get measurement ID** (GA_MEASUREMENT_ID)
3. **Uncomment analytics code** in HTML files
4. **Replace placeholder** with your ID
5. **Test implementation** with GA4 DebugView

### Search Console
1. **Add property** in Google Search Console
2. **Submit sitemap**: `https://yourdomain.com/sitemap.xml`
3. **Verify ownership** with HTML file or meta tag
4. **Monitor performance** and fix issues

## 🔍 SEO Checklist

### On-Page SEO
- [ ] **Unique title tags** for each page (50-60 characters)
- [ ] **Meta descriptions** with target keywords (150-160 characters)
- [ ] **H1 tags** with primary keywords
- [ ] **Alt text** for all images
- [ ] **Internal linking** between related content
- [ ] **External links** to authoritative sources

### Technical SEO
- [ ] **Mobile-friendly** design (test with Google Mobile-Friendly Test)
- [ ] **Page speed** optimization (aim for 90+ on PageSpeed Insights)
- [ ] **HTTPS** implementation
- [ ] **XML sitemap** submitted to Search Console
- [ ] **Robots.txt** properly configured
- [ ] **Structured data** validated with Rich Results Test

### Content SEO
- [ ] **Keyword research** for target terms
- [ ] **Long-tail keywords** like "motorbike restoration tools list"
- [ ] **Content clusters** around main topics
- [ ] **Regular publishing** schedule
- [ ] **User engagement** metrics monitoring

## 🎯 Target Keywords

### Primary Keywords
- bike restoration
- motorcycle restoration
- vintage bike restoration
- bike restoration tools
- motorcycle restoration guide

### Long-tail Keywords
- how to restore a vintage motorcycle
- best tools for bike restoration
- motorcycle restoration step by step
- vintage bike restoration tips
- bike restoration for beginners

### Local SEO (if applicable)
- [city] bike restoration
- [city] motorcycle restoration
- [city] vintage bike restoration

## 📈 Performance Optimization

### Image Optimization
- **WebP format** with JPEG fallbacks
- **Responsive images** with srcset
- **Lazy loading** for below-the-fold content
- **Compression** to reduce file sizes
- **CDN** for faster delivery

### Code Optimization
- **Minify CSS/JS** for production
- **Remove unused code** and comments
- **Combine files** to reduce HTTP requests
- **Use critical CSS** for above-the-fold content
- **Defer non-critical JavaScript**

### Caching Strategy
- **Browser caching** for static assets
- **CDN caching** for global delivery
- **Service worker** for offline functionality
- **Preload critical resources**
- **Prefetch likely next pages**

## 🛡️ Security Considerations

### Content Security
- **HTTPS only** for all connections
- **Content Security Policy** headers
- **Input validation** for forms
- **XSS protection** in user-generated content
- **Regular security audits**

### Privacy Compliance
- **Cookie consent** banner
- **Privacy policy** page
- **GDPR compliance** for EU visitors
- **Data minimization** principles
- **User consent** for analytics

## 📞 Support and Maintenance

### Regular Updates
- **Content updates** (weekly blog posts)
- **Security patches** (monthly)
- **Performance monitoring** (ongoing)
- **SEO audits** (quarterly)
- **Backup strategy** (daily)

### Monitoring Tools
- **Google Analytics** for traffic
- **Google Search Console** for SEO
- **PageSpeed Insights** for performance
- **Lighthouse** for audits
- **GTmetrix** for detailed analysis

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

## 📧 Contact

For questions about this template or bike restoration in general:
- **Website**: [restorebuddy.com](https://restorebuddy.com)
- **Instagram**: [@restorebuddy](https://instagram.com/restorebuddy)
- **Email**: hello@restorebuddy.com

---

**Built with ❤️ for the bike restoration community**

*Revive. Restore. Ride again.*
