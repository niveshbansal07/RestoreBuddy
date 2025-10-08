/**
 * Restore Buddy - JavaScript Functionality
 * Mobile-first bike restoration blog with animated navbar
 * 
 * Features:
 * - Three different navbar toggle animations (Morph, Rotate, Slide)
 * - Smooth scrolling and header effects
 * - Cookie consent management
 * - Accessibility enhancements
 * - Performance optimizations
 */

(function() {
    'use strict';

    // ==========================================================================
    // Configuration and State Management
    // ==========================================================================
    
    const CONFIG = {
        animationDuration: 300,
        scrollThreshold: 100,
        cookieExpiry: 365, // days
        animationStyles: ['morph', 'rotate', 'slide']
    };

    let state = {
        mobileMenuOpen: false,
        currentAnimation: 'morph',
        headerScrolled: false,
        cookiesAccepted: null
    };

    // ==========================================================================
    // DOM Elements and Caching
    // ==========================================================================
    
    const elements = {
        header: document.querySelector('.header'),
        navbarToggle: document.querySelector('.navbar-toggle'),
        mobileMenu: document.querySelector('.mobile-menu'),
        animationButtons: document.querySelectorAll('.animation-btn'),
        cookieBanner: document.getElementById('cookie-banner'),
        acceptCookies: document.getElementById('accept-cookies'),
        declineCookies: document.getElementById('decline-cookies'),
        filterButtons: document.querySelectorAll('.filter-btn'),
        productCards: document.querySelectorAll('.product-card')
    };

    // ==========================================================================
    // Utility Functions
    // ==========================================================================
    
    /**
     * Debounce function to limit function calls
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Check if user prefers reduced motion
     */
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /**
     * Get cookie value by name
     */
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    /**
     * Set cookie with expiration
     */
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    /**
     * Remove all animation classes from element
     */
    function clearAnimationClasses(element) {
        CONFIG.animationStyles.forEach(style => {
            element.classList.remove(style);
        });
    }

    // ==========================================================================
    // Animation Functions
    // ==========================================================================
    
    /**
     * Apply morph animation to hamburger menu
     */
    function applyMorphAnimation() {
        if (prefersReducedMotion()) return;
        
        clearAnimationClasses(elements.navbarToggle);
        elements.navbarToggle.classList.add('morph');
    }

    /**
     * Apply rotate animation to hamburger menu
     */
    function applyRotateAnimation() {
        if (prefersReducedMotion()) return;
        
        clearAnimationClasses(elements.navbarToggle);
        elements.navbarToggle.classList.add('rotate');
    }

    /**
     * Apply slide animation to hamburger menu
     */
    function applySlideAnimation() {
        if (prefersReducedMotion()) return;
        
        clearAnimationClasses(elements.navbarToggle);
        elements.navbarToggle.classList.add('slide');
        
        // Add stagger animation to menu items
        elements.mobileMenu.classList.add('stagger-in');
    }

    /**
     * Reset hamburger animation
     */
    function resetHamburgerAnimation() {
        clearAnimationClasses(elements.navbarToggle);
        elements.mobileMenu.classList.remove('stagger-in', 'slide-in', 'slide-out');
    }

    /**
     * Apply animation based on current style
     */
    function applyCurrentAnimation() {
        switch (state.currentAnimation) {
            case 'morph':
                applyMorphAnimation();
                break;
            case 'rotate':
                applyRotateAnimation();
                break;
            case 'slide':
                applySlideAnimation();
                break;
        }
    }

    // ==========================================================================
    // Mobile Menu Functions
    // ==========================================================================
    
    /**
     * Toggle mobile menu visibility
     */
    function toggleMobileMenu() {
        state.mobileMenuOpen = !state.mobileMenuOpen;
        
        // Update ARIA attributes
        elements.navbarToggle.setAttribute('aria-expanded', state.mobileMenuOpen);
        
        if (state.mobileMenuOpen) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    }

    /**
     * Open mobile menu with animation
     */
    function openMobileMenu() {
        elements.mobileMenu.classList.add('active');
        
        // Apply animation after a short delay to ensure DOM is ready
        setTimeout(() => {
            if (state.currentAnimation === 'slide') {
                elements.mobileMenu.classList.add('slide-in');
            }
            applyCurrentAnimation();
        }, 10);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus management
        const firstLink = elements.mobileMenu.querySelector('.nav-link');
        if (firstLink) {
            firstLink.focus();
        }
    }

    /**
     * Close mobile menu with animation
     */
    function closeMobileMenu() {
        if (state.currentAnimation === 'slide') {
            elements.mobileMenu.classList.add('slide-out');
            setTimeout(() => {
                elements.mobileMenu.classList.remove('active', 'slide-in', 'slide-out');
                resetHamburgerAnimation();
            }, CONFIG.animationDuration);
        } else {
            elements.mobileMenu.classList.remove('active');
            resetHamburgerAnimation();
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to toggle button
        elements.navbarToggle.focus();
    }

    /**
     * Close mobile menu when clicking outside
     */
    function handleOutsideClick(event) {
        if (state.mobileMenuOpen && 
            !elements.mavbarToggle.contains(event.target) && 
            !elements.mobileMenu.contains(event.target)) {
            closeMobileMenu();
        }
    }

    /**
     * Handle escape key to close mobile menu
     */
    function handleEscapeKey(event) {
        if (event.key === 'Escape' && state.mobileMenuOpen) {
            closeMobileMenu();
        }
    }

    // ==========================================================================
    // Header Scroll Effects
    // ==========================================================================
    
    /**
     * Handle header scroll effects
     */
    function handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > CONFIG.scrollThreshold && !state.headerScrolled) {
            state.headerScrolled = true;
            elements.header.classList.add('scrolled');
        } else if (scrollY <= CONFIG.scrollThreshold && state.headerScrolled) {
            state.headerScrolled = false;
            elements.header.classList.remove('scrolled');
        }
    }

    // ==========================================================================
    // Animation Style Management
    // ==========================================================================
    
    /**
     * Change animation style
     */
    function changeAnimationStyle(style) {
        if (!CONFIG.animationStyles.includes(style)) {
            console.warn(`Invalid animation style: ${style}`);
            return;
        }
        
        state.currentAnimation = style;
        
        // Update active button
        elements.animationButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.style === style) {
                btn.classList.add('active');
            }
        });
        
        // Apply new animation if menu is open
        if (state.mobileMenuOpen) {
            applyCurrentAnimation();
        }
        
        // Save preference
        setCookie('animation-style', style, CONFIG.cookieExpiry);
    }

    // ==========================================================================
    // Cookie Management
    // ==========================================================================
    
    /**
     * Initialize cookie consent
     */
    function initCookieConsent() {
        const cookieConsent = getCookie('cookie-consent');
        
        if (cookieConsent === null) {
            // Show banner after a delay
            setTimeout(() => {
                if (elements.cookieBanner) {
                    elements.cookieBanner.classList.add('show');
                }
            }, 2000);
        } else {
            state.cookiesAccepted = cookieConsent === 'accepted';
        }
    }

    /**
     * Accept cookies
     */
    function acceptCookies() {
        state.cookiesAccepted = true;
        setCookie('cookie-consent', 'accepted', CONFIG.cookieExpiry);
        hideCookieBanner();
        
        // Initialize analytics if cookies are accepted
        initAnalytics();
    }

    /**
     * Decline cookies
     */
    function declineCookies() {
        state.cookiesAccepted = false;
        setCookie('cookie-consent', 'declined', CONFIG.cookieExpiry);
        hideCookieBanner();
    }

    /**
     * Hide cookie banner
     */
    function hideCookieBanner() {
        if (elements.cookieBanner) {
            elements.cookieBanner.classList.remove('show');
        }
    }

    // ==========================================================================
    // Analytics (Placeholder)
    // ==========================================================================
    
    /**
     * Initialize analytics (placeholder for Google Analytics)
     */
    function initAnalytics() {
        if (!state.cookiesAccepted) return;
        
        // Placeholder for Google Analytics initialization
        console.log('Analytics initialized (placeholder)');
        
        // Example: gtag('config', 'GA_MEASUREMENT_ID', {
        //     'anonymize_ip': true,
        //     'cookie_flags': 'SameSite=None;Secure'
        // });
    }

    // ==========================================================================
    // Product Filtering
    // ==========================================================================
    
    /**
     * Filter products by category
     */
    function filterProducts(category) {
        elements.productCards.forEach(card => {
            const cardCategory = card.dataset.category || 'all';
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    /**
     * Handle filter button clicks
     */
    function handleFilterClick(event) {
        const category = event.target.dataset.category;
        
        // Update active button
        elements.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Filter products
        filterProducts(category);
    }

    // ==========================================================================
    // Smooth Scrolling
    // ==========================================================================
    
    /**
     * Handle smooth scrolling for anchor links
     */
    function handleSmoothScroll(event) {
        const target = event.target.closest('a[href^="#"]');
        if (!target) return;
        
        const href = target.getAttribute('href');
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        event.preventDefault();
        
        const headerHeight = elements.header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // ==========================================================================
    // Performance Optimizations
    // ==========================================================================
    
    /**
     * Lazy load images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Preload critical resources
     */
    function preloadCriticalResources() {
        const criticalImages = [
            'assets/images/hero-bg.jpg',
            'assets/images/blog-1.jpg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // ==========================================================================
    // Accessibility Enhancements
    // ==========================================================================
    
    /**
     * Enhance keyboard navigation
     */
    function enhanceKeyboardNavigation() {
        // Add keyboard support for custom buttons
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                const target = event.target;
                if (target.classList.contains('animation-btn') || 
                    target.classList.contains('filter-btn')) {
                    event.preventDefault();
                    target.click();
                }
            }
        });
    }

    /**
     * Announce dynamic content changes to screen readers
     */
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // ==========================================================================
    // Event Listeners
    // ==========================================================================
    
    /**
     * Initialize all event listeners
     */
    function initEventListeners() {
        // Mobile menu toggle
        if (elements.navbarToggle) {
            elements.navbarToggle.addEventListener('click', toggleMobileMenu);
        }
        
        // Animation style buttons
        elements.animationButtons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const style = event.target.dataset.style;
                changeAnimationStyle(style);
            });
        });
        
        // Cookie consent
        if (elements.acceptCookies) {
            elements.acceptCookies.addEventListener('click', acceptCookies);
        }
        if (elements.declineCookies) {
            elements.declineCookies.addEventListener('click', declineCookies);
        }
        
        // Product filtering
        elements.filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
        
        // Smooth scrolling
        document.addEventListener('click', handleSmoothScroll);
        
        // Outside click to close mobile menu
        document.addEventListener('click', handleOutsideClick);
        
        // Keyboard navigation
        document.addEventListener('keydown', handleEscapeKey);
        
        // Scroll effects
        window.addEventListener('scroll', debounce(handleScroll, 10));
        
        // Window resize
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth >= 768 && state.mobileMenuOpen) {
                closeMobileMenu();
            }
        }, 250));
    }

    // ==========================================================================
    // Initialization
    // ==========================================================================
    
    /**
     * Initialize the application
     */
    function init() {
        // Check for saved preferences
        const savedAnimation = getCookie('animation-style');
        if (savedAnimation && CONFIG.animationStyles.includes(savedAnimation)) {
            state.currentAnimation = savedAnimation;
        }
        
        // Set initial animation button state
        elements.animationButtons.forEach(btn => {
            if (btn.dataset.style === state.currentAnimation) {
                btn.classList.add('active');
            }
        });
        
        // Initialize features
        initCookieConsent();
        initLazyLoading();
        preloadCriticalResources();
        enhanceKeyboardNavigation();
        initEventListeners();
        
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
        
        console.log('Restore Buddy initialized successfully');
    }

    // ==========================================================================
    // Public API
    // ==========================================================================
    
    // Expose public methods for external use
    window.RestoreBuddy = {
        changeAnimation: changeAnimationStyle,
        toggleMenu: toggleMobileMenu,
        filterProducts: filterProducts,
        announce: announceToScreenReader
    };

    // ==========================================================================
    // Initialize when DOM is ready
    // ==========================================================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// ==========================================================================
// Additional Utility Functions (Global)
// ==========================================================================

/**
 * Format currency for display
 */
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

/**
 * Format date for display
 */
function formatDate(date, options = {}) {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(new Date(date));
}

/**
 * Debounced resize handler
 */
const handleResize = debounce(() => {
    // Handle responsive layout changes
    if (window.innerWidth >= 768) {
        // Desktop layout adjustments
        document.body.classList.add('desktop-layout');
    } else {
        document.body.classList.remove('desktop-layout');
    }
}, 250);

window.addEventListener('resize', handleResize);

// ==========================================================================
// CSS Animation Keyframes (Dynamically Added)
// ==========================================================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInFromRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .loaded .hero {
        animation: fadeIn 0.6s ease-out;
    }
    
    .loaded .blog-card,
    .loaded .product-card {
        animation: fadeIn 0.4s ease-out;
    }
`;
document.head.appendChild(style);
