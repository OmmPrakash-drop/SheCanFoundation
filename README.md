# She Can Foundation - NGO Website

A fully functional, production-quality, and highly interactive NGO website built from scratch. Designed with rich modern aesthetics (glassmorphism, curated color palettes, elegant typography) and smooth interactive features (view-triggered numerical counters, viewport scroll reveals, mobile responsive drawers, and multi-point form validations).

---

## 🌟 Key Features

- **🌀 Elegant Preloader Screen:** A glassmorphic loader screen containing a pulsing organic color ring and branding transition that hides layout shifts on initial asset loading.
- **✨ Sticky Navigation with Active Link Sync:** A sticky navbar that reduces in height on scroll down, displaying a compact glassmorphic blur. It highlights navigation items dynamically based on the section currently visible in the viewport.
- **📱 Responsive Hamburger Menu:** A custom toggle system that converts three bar lines into an "X", sliding out a vertical navigation panel tailored for mobile screens.
- **📈 Dynamic View-Triggered Counters:** Statistical indicators (`5000+ Women Supported`, `150+ Programs Conducted`, `300+ Volunteers Enrolled`, `50+ Alliances`) that count up automatically using easing algorithms when the Impact section scrolls into view.
- **📝 High-Fidelity Volunteer Form:** A registration form featuring strict client-side field validation (name, email patterns, phone digit counts, interest selections) and interactive error/success states.
- **💬 Testimonials Grid:** High-quality profile cards showcasing mentors, coordinators, and beneficiaries, detailing inspiring transformation stories.
- **🖼️ Image Gallery with Hover Effects:** A responsive photo wall showcasing programs like coding labs and public speaking, featuring micro-zoom transitions and slide-up category overlays.
- **📩 Newsletter Subscription:** An inline newsletter subscription form in the footer with real-time feedback messages upon email submittal.
- **🔝 Floating Back-To-Top Button:** A quick navigation bubble that fades into view after scrolling down 300px, triggering a smooth scroll back to the page header when clicked.

---

## 🛠️ Technology Stack

- **Markup:** Semantic HTML5 (incorporating `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` structure).
- **Styling:** Vanilla CSS3 (curated custom variables, Flexbox templates, Grid maps, transitions, and CSS keyframe animations).
- **Logic & Interactions:** Vanilla JavaScript (ES6+), leveraging `IntersectionObserver` APIs for scroll-triggers, custom validation regexes, and browser DOM manipulation.
- **Icons & Assets:** Font Awesome Vector Icons (via CDN), Google Poppins Web Fonts, and realistic AI-generated stock photography.

---

## 📂 File Directory Structure

```
She/
│
├── index.html                   # Main entry point (HTML5 semantic outline, SEO metadata)
├── README.md                    # Project documentation (this file)
└── assets/
    ├── css/
    │   └── style.css            # Style sheets (variables, component rules, media queries)
    ├── js/
    │   └── main.js              # Script interactions (validation, counters, sticky scrolls)
    └── images/
        ├── hero-cover.png       # Generated Featured Cover Image
        ├── gallery-workshop.png  # Generated Gallery - skill workshops
        ├── gallery-community.png # Generated Gallery - aid distribution
        ├── gallery-volunteers.png# Generated Gallery - professional mentoring
        ├── gallery-training.png  # Generated Gallery - public speaking
        ├── testimonial-1.png    # Generated portrait - Priya Sharma
        ├── testimonial-2.png    # Generated portrait - Aisha Bello
        └── testimonial-3.png    # Generated portrait - Maria Gonzalez
```

---

## 🚀 How to Run Locally

Because the project relies purely on modern vanilla web standards, it has **zero package installations or compilation requirements** and launches instantly in any environment.

### Method 1: Local Explorer (Recommended for Quick Previews)
1. Open the project folder `c:\Users\ommpr\OneDrive\Desktop\She\` in your File Explorer.
2. Double-click the file `index.html`.
3. The site will run in your default web browser.

### Method 2: Python Local Server
If you prefer testing over a local server:
1. Open a command prompt or terminal in the project directory.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## ♿ Accessibility & SEO Compliance

- **Accessible Layouts:** All image tags are configured with descriptive `alt` tags. Input controls carry specific `id` maps corresponding to `<label>` tags. Interactive triggers carry proper `aria-label` descriptors and `role` mappings.
- **Search Engine Friendly:** Built with clear metadata headers (title, description, keywords) and OpenGraph tags to ensure rich preview cards when links are shared on LinkedIn, Twitter, or messaging applications.
