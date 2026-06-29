# Launch Checklist & TODOs

This file tracks pending items that need to be completed before the final production launch of the website.

## Pre-Launch
- [ ] **Finalize Branding:** Confirm final project name and secure the primary domain.
- [ ] **Cloudflare Analytics:** Once the domain is purchased and added to Cloudflare, generate a Web Analytics token and replace `YOUR_CLOUDFLARE_TOKEN_HERE` in `src/layouts/Layout.astro`.
- [ ] **Update Config URL:** Update the `site: 'https://pressly.app'` URL in `astro.config.mjs` to match your newly purchased domain for correct canonical URLs and SEO indexing.
- [ ] **Update Hardcoded Links:** Search the codebase for `pressly.app` (e.g., in `Layout.astro` fallback URLs) and update them to the final domain.
- [ ] **Social Links:** Update the `#` hrefs in the footer social icons (`Layout.astro`) to point to your actual Twitter and Instagram profiles.
- [ ] **Forms:** Ensure backend logic for the Contact and Vendor onboarding forms is fully connected to your production API or email service.

## Final Polish
- [ ] **Legal Pages**: Update `src/pages/terms.astro` and `src/pages/privacy.astro` with your actual, legally-compliant company policies before submitting the app to the App Store/Play Store (they require real policies).
- [ ] **Favicon**: Replace the default `public/favicon.svg` and `public/favicon.ico` with your actual "P" logo so it shows up correctly in browser tabs.
- [ ] **Analytics Event Testing**: Once you deploy, click the CTA buttons and submit a test form, then check your Cloudflare/Analytics dashboard to ensure events are logging correctly. 