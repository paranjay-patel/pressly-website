# Pressly Marketing Website & Portal

Pressly is a modern marketplace platform built to connect households with local ironing and laundry professionals in Surat, Gujarat. This repository contains the high-performance, responsive marketing website, customer landing page, and vendor onboarding portal.

---

## 🛠️ Tech Stack & Design System
* **Framework:** [Astro v4+](https://astro.build/) - High-performance content-focused web framework.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Responsive, utility-first CSS framework.
* **Icons:** [Lucide Astro](https://lucide.dev/) - Modern and clean SVG icon pack.
* **Aesthetics:**
  * **Spinning Glow Borders:** Multi-colored conic gradient animations on key Call-To-Action (CTA) elements ("Download App", "Become Vendor").
  * **Frosted Glass Header:** Sticky navigation header with `backdrop-blur-md` for visual unity during scrolling.
  * **Interactive About Page Story:** Hover-responsive cards with colorful red/yellow/green accentuation representing the *Broken System*, *Realization*, and *Solution*.
  * **Subtle Bento Grid backgrounds:** Customized CSS radial masks (`mask-image`) spotlighting the top headers of major section viewports.

---

## 📂 Project Structure

```text
/
├── public/               # Static assets (Favicons, logos, images)
└── src/
    ├── components/       # Reusable UI fragments (Logo, floating decorative elements)
    ├── layouts/          # Page wrappers (Layout.astro - houses global Header, Footer, SEO meta tags)
    ├── pages/            # View routes (Static pages map 1:1 with file names)
    │   ├── index.astro   # Main Homepage
    │   ├── about.astro   # About Us Page
    │   ├── faq.astro     # FAQ Page
    │   ├── contact.astro # Contact & Support Form Page
    │   ├── vendor.astro  # Partner onboarding portal
    │   └── 404.astro     # Custom Error 404 page
    └── sections/         # Page-specific sections
        ├── about/        # Sections for About Page (Hero, Timeline, Mission, Story)
        ├── contact/      # Sections for Contact Page
        ├── faq/          # Sections for FAQ Page
        ├── vendor/       # Sections for Vendor Page
        └── ...           # Homepage sections (Hero, Problem, Benefits, NearbyServices, HowItWorks)
```

---

## 🧞 Scripts & Local Development

All commands should be executed from the project root directory:

```bash
# 1. Install local dependencies
npm install

# 2. Start local development server (launches at http://localhost:4321)
npm run dev

# 3. Build optimized production assets (outputs to /dist)
npm run build

# 4. Preview the local production build locally
npm run preview
```

---

## 📋 Pre-Launch & Deployment Checklist

Refer to the local `TODO.md` file for a detailed list of tasks required prior to domain mapping and production server deployment, including:
* Setting up Cloudflare Web Analytics tokens.
* Mapping custom production domain canonical variables in `astro.config.mjs`.
* Swapping standard favicon placeholders with brand icons.
* Verifying Firebase and Razorpay webhook configurations.
