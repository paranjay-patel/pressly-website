const fs = require('fs');
const content = fs.readFileSync('src/pages/index.astro', 'utf8');

// The split logic
const heroStart = content.indexOf('<!-- 1. Hero Section -->');
const howItWorksStart = content.indexOf('<!-- 2. How it works');
const whyChooseUsStart = content.indexOf('<!-- 3. Why Choose Us');
const nearbyStart = content.indexOf('<!-- 4. Nearby Iron Services -->');
const vendorCTAStart = content.indexOf('<!-- 5. Vendor CTA -->');
const customerCTAStart = content.indexOf('<!-- 6. Customer CTA -->');
const faqStart = content.indexOf('<!-- 7. FAQ -->');
const layoutEnd = content.indexOf('</Layout>');

const heroContent = content.slice(heroStart, howItWorksStart).trim();
const howItWorksContent = content.slice(howItWorksStart, whyChooseUsStart).trim();
const whyChooseUsContent = content.slice(whyChooseUsStart, nearbyStart).trim();
const nearbyContent = content.slice(nearbyStart, vendorCTAStart).trim();
const vendorCTAContent = content.slice(vendorCTAStart, customerCTAStart).trim();
const customerCTAContent = content.slice(customerCTAStart, faqStart).trim();
const faqContent = content.slice(faqStart, layoutEnd).trim();

// Create files
if (!fs.existsSync('src/sections')) fs.mkdirSync('src/sections');

fs.writeFileSync('src/sections/Hero.astro', `---
import { MapPin, Shirt, Sparkles } from '@lucide/astro';
---

${heroContent}
`);

fs.writeFileSync('src/sections/HowItWorks.astro', `---
---

${howItWorksContent}
`);

fs.writeFileSync('src/sections/WhyChooseUs.astro', `---
import { MapPin, ListOrdered, Truck } from '@lucide/astro';
---

${whyChooseUsContent}
`);

fs.writeFileSync('src/sections/NearbyServices.astro', `---
import { MapPin, Star, Shirt, Zap, ArrowRight } from '@lucide/astro';
---

${nearbyContent}
`);

fs.writeFileSync('src/sections/VendorCTA.astro', `---
import { CircleCheck, Store } from '@lucide/astro';
---

${vendorCTAContent}
`);

fs.writeFileSync('src/sections/DownloadApp.astro', `---
import AppleIcon from '../components/icons/AppleIcon.astro';
import GooglePlayIcon from '../components/icons/GooglePlayIcon.astro';
---

${customerCTAContent}
`);

fs.writeFileSync('src/sections/FAQ.astro', `---
---

${faqContent}
`);

// Now rewrite index.astro
const newIndexContent = `---
import Layout from '../layouts/Layout.astro';
import Hero from '../sections/Hero.astro';
import HowItWorks from '../sections/HowItWorks.astro';
import WhyChooseUs from '../sections/WhyChooseUs.astro';
import NearbyServices from '../sections/NearbyServices.astro';
import VendorCTA from '../sections/VendorCTA.astro';
import DownloadApp from '../sections/DownloadApp.astro';
import FAQ from '../sections/FAQ.astro';
---

<Layout title="Pressly - Premium On-Demand Doorstep Ironing">
	<Hero />
	<HowItWorks />
	<WhyChooseUs />
	<NearbyServices />
	<VendorCTA />
	<DownloadApp />
	<FAQ />
</Layout>

<style is:global>
	.perspective-1000 {
		perspective: 1000px;
	}

	details > summary {
		list-style: none;
	}
	details > summary::-webkit-details-marker {
		display: none;
	}
</style>
`;

fs.writeFileSync('src/pages/index.astro', newIndexContent);

console.log("Splitting completed successfully.");
