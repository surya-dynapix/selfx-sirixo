"use client";

import { useState, useEffect } from "react";
import { updateSiteContent } from "@/app/actions";
import { Upload, Save, CheckCircle } from "lucide-react";
import { PRODUCT_DEFAULTS } from "@/lib/productData";
import { SOLUTION_DEFAULTS } from "@/lib/solutionData";

const PAGES = [
  "home", "about", "solutions", "hardware", 
  "integrations", "pricing", "support", "book-demo",
  "solutions-universities", "solutions-food-courts", "solutions-corporate-tech-parks",
  "product-pos-software", "product-mobile-app", "product-kitchen-system", 
  "product-kiosk-app", "product-online-ordering", "product-digital-dining", 
  "product-kds", "product-signage", "product-vending", "product-whatsapp"
];

const PAGE_LABELS: Record<string, string> = {
  home: "Home Page",
  about: "About Page",
  solutions: "Solutions (General)",
  hardware: "Hardware Page",
  integrations: "Integrations Page",
  pricing: "Pricing Page",
  support: "Support Page",
  "book-demo": "Book a Demo",
  "solutions-universities": "Solutions: Universities",
  "solutions-food-courts": "Solutions: Food Courts",
  "solutions-corporate-tech-parks": "Solutions: Corporate Tech Parks",
  "product-pos-software": "Product: POS Cloud Software",
  "product-mobile-app": "Product: Mobile User APP",
  "product-kitchen-system": "Product: Kitchen System",
  "product-kiosk-app": "Product: Self-Ordering Kiosk APP",
  "product-online-ordering": "Product: Online Restaurant Ordering",
  "product-digital-dining": "Product: Digital Dining",
  "product-kds": "Product: Kitchen Display System (KDS)",
  "product-signage": "Product: Digital Signage Engine",
  "product-vending": "Product: Smart Vending Machines",
  "product-whatsapp": "Product: WhatsApp Ordering"
};

const SECTIONS_MAP: Record<string, string[]> = {
  home: ["hero", "clientlogos", "solutions", "businesstypes", "featurehighlight", "hardwareshowcase", "pricing", "partnerslogos", "gallery", "stats", "homefaq", "cta"],
  about: ["hero", "mission", "team"],
  solutions: ["hero", "industries"],
  hardware: ["hero", "specs"],
  integrations: ["hero", "list"],
  pricing: ["content"],
  support: ["hero", "contact"],
  "book-demo": ["hero", "form-text"],

  // Solutions sub-pages
  "solutions-universities": ["hero", "challenges", "showcase", "benefits", "icongrid", "carousel", "stats", "whychoose", "faq", "cta"],
  "solutions-food-courts": ["hero", "challenges", "showcase", "benefits", "icongrid", "carousel", "stats", "whychoose", "faq", "cta"],
  "solutions-corporate-tech-parks": ["hero", "challenges", "showcase", "benefits", "icongrid", "carousel", "stats", "whychoose", "faq", "cta"],

  // Product sub-pages
  "product-pos-software": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-mobile-app": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-kitchen-system": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-kiosk-app": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-online-ordering": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-digital-dining": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-kds": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-signage": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-vending": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
  "product-whatsapp": ["hero", "challenge", "workflow", "features", "impact", "useCases", "analytics", "success", "faqs", "cta"],
};

const DEFAULT_CONTENT_SCHEMA: Record<string, Record<string, Record<string, string>>> = {
  home: {
    hero: {
      videoUrl: "/Futuristic_kiosk_product_reveal_…_202606041416 (1).mp4",
      headline: "The Ultimate Hardware + <span class=\"text-red-500\">AI Software Ecosystem</span> for Restaurants & Retail.",
      subtitle: "Empower your customers, slash ordering queues, reduce front-of-house staff workload, and skyrocket your average order value with the SelfX smart kiosk.",
      buttonText: "Book a Demo",
      buttonLink: "/book-demo"
    },
    clientlogos: {
      title: "Our Customers",
      logo1Text: "Bite&Co.",
      logo2Text: "Caffeine",
      logo3Text: "SQUARE",
      logo4Text: "KababKing",
      logo5Text: "boba.",
      logo6Text: "MUNCH"
    },
    solutions: {
      title: "Explore More Restaurant <span class=\"text-red-600\">Solutions</span>",
      subtitle: "Streamline your food business operations, lower overhead costs, and elevate the order journey with our interconnected smart systems.",
      sol1Title: "SelfX POS Cloud Software & Hardware",
      sol1Desc: "The ultimate cloud POS system for rapid checkout, real-time analytics, and fluid inventory tracking. Hand-in-hand integration with sleek hardware devices.",
      sol1Image: "/selfox-pos (1).jpg",
      sol1Accent: "Hardware & Cloud POS",
      sol1Quote: "Our front counters have never run smoother. Staff training time went from days to minutes, and the offline transactions buffer ensures we never lose a sale even if internet feeds drop.",
      sol1Author: "Elena Chen, Yume Boba Tea",
      sol1Details: "Real-time split billing and table mapping,Robust offline operations buffering,Instant inventory sync and stock alerts,Live integration with kitchen thermal printers",
      sol2Title: "Your Own Restaurant Delivery App / Website",
      sol2Desc: "Reclaim your profits from third-party aggregators. Sell directly to your customers with your branded, ultra-fast ordering app and responsive web portal.",
      sol2Image: "/selfox-mobile-delivry-app.jpg",
      sol2Accent: "Branded Digital Ordering",
      sol2Quote: "Reclaiming our digital ordering channel with a custom branded app saved us over ₹45,000 in monthly aggregator commissions. Customers love the direct checkout flow.",
      sol2Author: "Marcus Lindqvist, Nordic Kitchen",
      sol2Details: "Zero commission fees per digital order,Complete ownership of client email & phone data,Interactive coupon and push notification engine,Mobile-first responsive ordering interface",
      sol3Title: "Kitchen Display System / Digital Signage",
      sol3Desc: "Eliminate paper ticket errors completely. Sync front-of-house orders directly with kitchen monitors for zero delays and seamless coordination.",
      sol3Image: "/selfox-mobile-kitchen-display.jpg",
      sol3Accent: "Kitchen Operations KDS",
      sol3Quote: "No more lost paper tickets or handwritten order confusions. The color-coded wait timers keep our line cooks perfectly synchronized during busy weekend dinner rushes.",
      sol3Author: "Chef David Miller, Gastro Pub",
      sol3Details: "Dynamic color-coded order wait timers,Acoustic line alerts for fresh incoming items,Synchronized chef station item grouping,Zero delays between counter kiosk and line assembly",
      sol4Title: "Digital Contactless QR Tabletop Menu",
      sol4Desc: "Empower tableside ordering. Customers scan, browse, customize orders, and pay instantly without waiting for a server, increasing table turn speed.",
      sol4Image: "/selfox-pos-qrocde.-jpg.jpg",
      sol4Accent: "Tableside Smart Menu",
      sol4Quote: "By placing smart QR tabletop cards, our table turnover speeds increased by 25%. Customers select modifiers, place orders, and checkout instantly without server delay.",
      sol4Author: "Sara Varma, The Daily Brew",
      sol4Details: "Instant cloud-based digital menu price updates,Full customization options (add-ons & allergies),Instant checkout via digital wallets or UPI,Automatic physical table number routing to KDS"
    },
    businesstypes: {
      title: "Engineered for every hospitality scenario",
      subtitle: "Whether you run a high-volume fine dining restaurant, a bustling café, or a retail outlet, our ecosystem is built to adapt to your unique workflows.",
      type1Name: "Fine Dining",
      type1Image: "/Ultra-premium_fine_dining_restaurant_interior_202606111239.jpeg",
      type2Name: "Quick Service",
      type2Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081407.jpeg",
      type3Name: "Takeaway",
      type3Image: "/Modern_premium_takeaway_café_and_202606111244.jpeg",
      type4Name: "Café",
      type4Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081358.jpeg",
      type5Name: "Retail",
      type5Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg"
    },
    featurehighlight: {
      title: "Built for Real Hospitality Workflows",
      subtitle: "Streamlining operations from front of house to back of house with seamless integrations and real-time syncing.",
      buttonText: "Explore Software Capabilities",
      feat1Title: "Self-ordering & Kiosk Sync",
      feat1Desc: "Instantly sync menu items, stock levels, and price changes across your entire network of POS terminals and self-service kiosks.",
      feat1Image: "/pos cloud.png",
      feat2Title: "Payment Integration: Stripe, Square, etc.",
      feat2Desc: "Accept all major credit cards, Apple Pay, and Google Pay with zero friction. Our seamless integrations ensure secure, lightning-fast transactions.",
      feat2Image: "/A_cinematic_futuristic_fintech_ecosystem_202606111305.jpeg",
      feat3Title: "Kitchen Display (KDS) & Routing",
      feat3Desc: "Automatically route orders to the correct prep stations. Keep your back-of-house perfectly synchronized with front-of-house operations.",
      feat3Image: "/selfx kitchen.png",
      feat4Title: "Inventory Management",
      feat4Desc: "Track ingredient levels in real-time. Automatically generate purchase orders when stock runs low and minimize food waste.",
      feat4Image: "/software.png",
      feat5Title: "In-depth Analytics & Reports",
      feat5Desc: "Make data-driven decisions with real-time dashboards. Track top-selling items, peak hours, and staff performance metrics instantly.",
      feat5Image: "/Ultra-realistic_premium_product_photography_of_202606091839.jpeg"
    },
    hardwareshowcase: {
      title: "Hardware",
      subtitle: "The business tools that are built to scale. Reliable, fast, and beautifully designed for efficiency.",
      buttonText: "See all",
      item1Name: "15\" Tablet POS",
      item1Image: "/pos terminal.png",
      item2Name: "D53 Dual Screen POS",
      item2Image: "/selfx-kiosk.png",
      item3Name: "L2s Pro Mobile POS",
      item3Image: "/pos terminal.png"
    },
    pricing: {
      badgeText: "Software Package",
      subtitle: "Transparent pricing designed to scale alongside your restaurant's order volume. No hidden fees.",
      plan1Name: "Starter",
      plan1Price: "₹0",
      plan1Period: "/ month",
      plan1Desc: "Essential POS software features for new businesses just getting started.",
      plan1Features: "Core Point of Sale,Basic inventory management,Standard reporting,Email support",
      plan1Button: "Start Free",
      plan2Name: "Professional",
      plan2Price: "₹4,999",
      plan2Period: "/ month",
      plan2Desc: "Advanced tools for growing restaurants needing multi-terminal sync.",
      plan2Features: "Everything in Starter,Kitchen Display System (KDS),Advanced inventory tracking,Staff management & permissions,24/7 Priority Support",
      plan2Button: "Get Started",
      plan3Name: "Enterprise",
      plan3Price: "₹12,999",
      plan3Period: "/ month",
      plan3Desc: "Full suite ecosystem for high-volume franchises and large venues.",
      plan3Features: "Everything in Professional,Self-service kiosk software,Custom API integrations,Dedicated account manager,White-labeled mobile app",
      plan3Button: "Contact Sales"
    },
    partnerslogos: {
      title: "Our Hardware <span class=\"text-red-600\">Partners</span>",
      logo1Text: "stripe",
      logo2Text: "SQUARE",
      logo3Text: "gojek",
      logo4Text: "Zomato",
      logo5Text: "Swiggy",
      logo6Text: "UberEats"
    },
    gallery: {
      title: "Insights from Others on their <span class=\"text-red-600\">Growth Journey</span>",
      buttonText: "See All Success Stories",
      test1Quote: "Our morning rush at the Boba station used to build long queues. Since installing the kiosks, order processing speed is up by 40%. Average order values grew by 22% in the first two months.",
      test1Author: "Elena Chen",
      test1Role: "Founder, Yume Boba Tea",
      test1Image: "/gallery-boba.png",
      test1Logo: "/boba-logo.png",
      test2Quote: "SelfX's vertical kiosk hardware integrated perfectly into our dining space. Families can seat themselves, select items, and pay securely at their own pace. It reduced ticket errors to practically zero.",
      test2Author: "Marcus Lindqvist",
      test2Role: "Operations, Nordic Kitchen",
      test2Image: "/gallery-dining.png",
      test2Logo: "/nordic-logo.png",
      test3Quote: "Switching to this POS system was the best decision for our franchise. The real-time cloud sync means I can update prices across all 15 locations from my laptop in seconds.",
      test3Author: "Sarah Jenkins",
      test3Role: "CEO, Burger Bistro",
      test3Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg",
      test3Logo: "/bistro-logo.png"
    },
    stats: {
      stat1Value: "4000",
      stat1Suffix: "+",
      stat1Label: "Active Terminals",
      stat2Value: "2.5",
      stat2Suffix: "B+",
      stat2Label: "Orders Processed",
      stat3Value: "80",
      stat3Suffix: "M+",
      stat3Label: "Happy Customers",
      stat4Value: "4",
      stat4Suffix: "",
      stat4Label: "Continents"
    },
    homefaq: {
      faq1Q: "Do I need to sign a long-term contract?",
      faq1A: "No, all our standard plans are strictly month-to-month. You can scale your kiosk usage up or down depending on your seasonal volume without penalty.",
      faq2Q: "Does the system work offline if internet goes down?",
      faq2A: "Yes! Our cloud software features a robust offline buffering capability. Your local terminals will continue to take orders and sync all data to the cloud the moment connection is restored.",
      faq3Q: "Can I integrate my existing loyalty program?",
      faq3A: "Absolutely. SelfX offers extensive API support and native integrations for most major loyalty, reward, and gift card platforms currently on the market.",
      faq4Q: "How difficult is it to update the menu?",
      faq4A: "Extremely easy. Using the SelfX dashboard, you can drag-and-drop items, update prices, and change photos. Changes instantly propagate to all your kiosks globally.",
      faq5Q: "What happens if a kiosk hardware fails?",
      faq5A: "Our industrial-grade hardware is incredibly reliable, but if an issue occurs, our 24/7 support will remote-diagnose the problem. If it's a hardware fault, we dispatch a replacement unit within 24 hours.",
      faq6Q: "Do you support multiple languages on the ordering screens?",
      faq6A: "Yes, our kiosks support over 30 languages natively, and users can toggle between languages seamlessly during the ordering flow."
    },
    cta: {
      word1: "ORDER.",
      word2: "SERVE.",
      word3: "DELIGHT.",
      word4: "REPEAT.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/book-demo",
      secondaryButtonText: "Explore Solutions",
      secondaryButtonLink: "#solutions"
    }
  },
  about: {
    hero: {
      image: "/about hero.png",
      headline: "The pursuit of <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600\">perfection.</span>",
      subtitle: "At SelfX, we believe that extraordinary hospitality deserves extraordinary technology."
    },
    mission: {
      text: "For the ambitious founders, the visionaries, and the operators who refuse to compromise."
    },
    team: {
      title1: "We are pioneers.",
      desc1: "We began SelfX because the hospitality industry was stuck in the past.",
      image1: "/about1.png",
      title2: "We are engineering.",
      desc2: "Military-grade reliability meets elegant consumer design.",
      image2: "/about 2.png",
      title3: "We are passionate.",
      desc3: "We thrive on seeing our partners succeed.",
      image3: "/about3.jpeg"
    }
  },
  pricing: {
    content: {
      heroTitle: "The best work solution, <br class='hidden md:block'/><span class='text-zinc-400'>for the best price.</span>",
      heroSubtitle: "Choose the perfect plan for your business. Upgrade anytime.",
      plan1Name: "Starter",
      plan1Desc: "Core tools for single locations.",
      plan1Price: "$49",
      plan1Features: "Cloud POS Software,Unlimited Transactions,Basic Reporting,Email Support",
      plan2Name: "Professional",
      plan2Desc: "Advanced operations for growing brands.",
      plan2Price: "$99",
      plan2Features: "Up to 5 Locations,KDS & Kitchen Routing,Inventory Management",
      plan3Name: "Enterprise",
      plan3Desc: "Custom deployment for global scale.",
      plan3Price: "Custom",
      plan3Features: "Unlimited Locations,White-label Mobile App,Dedicated Success Manager",
      aiTitle: "The world's most advanced AI for restaurants.",
      aiCoreFeatures: "Standard dashboard,Daily sales summaries",
      aiProPrice: "$19",
      aiProFeatures: "Predictive inventory AI,Dynamic menu pricing",
      aiEntPrice: "$49",
      aiEntFeatures: "Everything in Pro AI,Custom LLM training",
      roiTitle: "Save time. Save money. <br/> Kill busy work."
    }
  },
  solutions: {
    hero: { title: "Our Solutions", subtitle: "Built for every industry." },
    industries: { industry1Name: "Food Courts", industry1Image: "", industry2Name: "Universities", industry2Image: "" }
  },
  hardware: {
    hero: { title: "Premium Hardware", subtitle: "Military-grade reliability." },
    specs: { spec1: "15-inch touch screen", spec2: "Built-in receipt printer" }
  },
  integrations: {
    hero: { title: "Integrations", subtitle: "Connect your favorite tools." },
    list: { integration1: "Stripe", integration2: "QuickBooks" }
  },
  support: {
    hero: { title: "Support Center", subtitle: "We are here to help." },
    contact: { email: "support@selfx.com", phone: "+1 (555) 000-0000" }
  },
  "book-demo": {
    hero: { title: "Book a Demo", subtitle: "See SelfX in action." },
    "form-text": { text: "Fill out the form below and we will be in touch." }
  }
};

export default function ContentCMSClient({ initialContent }: { initialContent: any[] }) {
  const [selectedPage, setSelectedPage] = useState("home");
  const [selectedSection, setSelectedSection] = useState("hero");
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);

  useEffect(() => {
    const existing = initialContent.find(c => c.page === selectedPage && c.section === selectedSection);
    
    // Dynamically resolve default schema if it is a product or solutions sub-page
    let defaultSchema: Record<string, string> = {};
    if (selectedPage.startsWith("product-")) {
      const prod = PRODUCT_DEFAULTS[selectedPage];
      if (prod) {
        if (selectedSection === "hero") {
          defaultSchema = {
            productName: prod.productName,
            headline: prod.hero.headline,
            description: prod.hero.description,
            imageSrc: prod.hero.imageSrc,
            highlights: prod.hero.highlights.join(","),
            primaryCtaText: prod.hero.primaryCtaText || "Book Demo",
            secondaryCtaText: prod.hero.secondaryCtaText || "Explore Features"
          };
        } else if (selectedSection === "challenge") {
          defaultSchema = {
            title: prod.challenge.title,
            subtitle: prod.challenge.subtitle,
            imageSrc: prod.challenge.imageSrc,
            challenge1Title: prod.challenge.challenges[0]?.title || "",
            challenge1Desc: prod.challenge.challenges[0]?.description || "",
            challenge2Title: prod.challenge.challenges[1]?.title || "",
            challenge2Desc: prod.challenge.challenges[1]?.description || "",
            challenge3Title: prod.challenge.challenges[2]?.title || "",
            challenge3Desc: prod.challenge.challenges[2]?.description || "",
            challenge4Title: prod.challenge.challenges[3]?.title || "",
            challenge4Desc: prod.challenge.challenges[3]?.description || "",
          };
        } else if (selectedSection === "workflow") {
          defaultSchema = {
            title: prod.workflow.title,
            subtitle: prod.workflow.subtitle,
            step1Title: prod.workflow.steps[0]?.title || "",
            step1Desc: prod.workflow.steps[0]?.description || "",
            step2Title: prod.workflow.steps[1]?.title || "",
            step2Desc: prod.workflow.steps[1]?.description || "",
            step3Title: prod.workflow.steps[2]?.title || "",
            step3Desc: prod.workflow.steps[2]?.description || "",
            step4Title: prod.workflow.steps[3]?.title || "",
            step4Desc: prod.workflow.steps[3]?.description || "",
          };
        } else if (selectedSection === "features") {
          defaultSchema = {
            title: prod.features.title,
            subtitle: prod.features.subtitle,
            feat1Icon: prod.features.features[0]?.icon || "Activity",
            feat1Title: prod.features.features[0]?.title || "",
            feat1Desc: prod.features.features[0]?.description || "",
            feat2Icon: prod.features.features[1]?.icon || "Activity",
            feat2Title: prod.features.features[1]?.title || "",
            feat2Desc: prod.features.features[1]?.description || "",
            feat3Icon: prod.features.features[2]?.icon || "Activity",
            feat3Title: prod.features.features[2]?.title || "",
            feat3Desc: prod.features.features[2]?.description || "",
            feat4Icon: prod.features.features[3]?.icon || "Activity",
            feat4Title: prod.features.features[3]?.title || "",
            feat4Desc: prod.features.features[3]?.description || "",
            feat5Icon: prod.features.features[4]?.icon || "Activity",
            feat5Title: prod.features.features[4]?.title || "",
            feat5Desc: prod.features.features[4]?.description || "",
            feat6Icon: prod.features.features[5]?.icon || "Activity",
            feat6Title: prod.features.features[5]?.title || "",
            feat6Desc: prod.features.features[5]?.description || "",
            feat7Icon: prod.features.features[6]?.icon || "Activity",
            feat7Title: prod.features.features[6]?.title || "",
            feat7Desc: prod.features.features[6]?.description || "",
            feat8Icon: prod.features.features[7]?.icon || "Activity",
            feat8Title: prod.features.features[7]?.title || "",
            feat8Desc: prod.features.features[7]?.description || "",
          };
        } else if (selectedSection === "impact") {
          defaultSchema = {
            title: prod.impact.title,
            subtitle: prod.impact.subtitle,
            metric1Value: prod.impact.metrics[0]?.value || "",
            metric1Suffix: prod.impact.metrics[0]?.suffix || "",
            metric1Label: prod.impact.metrics[0]?.label || "",
            metric2Value: prod.impact.metrics[1]?.value || "",
            metric2Suffix: prod.impact.metrics[1]?.suffix || "",
            metric2Label: prod.impact.metrics[1]?.label || "",
            metric3Value: prod.impact.metrics[2]?.value || "",
            metric3Suffix: prod.impact.metrics[2]?.suffix || "",
            metric3Label: prod.impact.metrics[2]?.label || "",
            metric4Value: prod.impact.metrics[3]?.value || "",
            metric4Suffix: prod.impact.metrics[3]?.suffix || "",
            metric4Label: prod.impact.metrics[3]?.label || "",
          };
        } else if (selectedSection === "useCases") {
          defaultSchema = {
            title: prod.useCases.title,
            subtitle: prod.useCases.subtitle,
            case1Title: prod.useCases.useCases[0]?.title || "",
            case1Image: prod.useCases.useCases[0]?.imageSrc || "",
            case2Title: prod.useCases.useCases[1]?.title || "",
            case2Image: prod.useCases.useCases[1]?.imageSrc || "",
            case3Title: prod.useCases.useCases[2]?.title || "",
            case3Image: prod.useCases.useCases[2]?.imageSrc || "",
          };
        } else if (selectedSection === "analytics") {
          defaultSchema = {
            title: prod.analytics.title,
            subtitle: prod.analytics.subtitle,
            description: prod.analytics.description,
            imageSrc: prod.analytics.imageSrc
          };
        } else if (selectedSection === "success") {
          defaultSchema = {
            title: prod.success.title,
            subtitle: prod.success.subtitle,
            quote: prod.success.quote,
            author: prod.success.author,
            role: prod.success.role,
            challenge: prod.success.challenge,
            solution: prod.success.solution,
            results: prod.success.results.join(",")
          };
        } else if (selectedSection === "faqs") {
          defaultSchema = {
            title: prod.productName + " FAQs",
            faq1Q: prod.faqs[0]?.q || "",
            faq1A: prod.faqs[0]?.a || "",
            faq2Q: prod.faqs[1]?.q || "",
            faq2A: prod.faqs[1]?.a || "",
            faq3Q: prod.faqs[2]?.q || "",
            faq3A: prod.faqs[2]?.a || "",
            faq4Q: prod.faqs[3]?.q || "",
            faq4A: prod.faqs[3]?.a || "",
            faq5Q: prod.faqs[4]?.q || "",
            faq5A: prod.faqs[4]?.a || "",
            faq6Q: prod.faqs[5]?.q || "",
            faq6A: prod.faqs[5]?.a || "",
            faq7Q: prod.faqs[6]?.q || "",
            faq7A: prod.faqs[6]?.a || "",
            faq8Q: prod.faqs[7]?.q || "",
            faq8A: prod.faqs[7]?.a || "",
          };
        } else if (selectedSection === "cta") {
          defaultSchema = {
            title: prod.cta.title,
            subtitle: prod.cta.subtitle
          };
        }
      }
    } else if (selectedPage.startsWith("solutions-")) {
      const sol = SOLUTION_DEFAULTS[selectedPage];
      if (sol) {
        if (selectedSection === "hero") {
          defaultSchema = {
            title: sol.hero.title,
            subtitle: sol.hero.subtitle,
            description: sol.hero.description,
            imageSrc: sol.hero.imageSrc,
            buttonText: sol.hero.buttonText,
            secondaryButtonText: sol.hero.secondaryButtonText
          };
        } else if (selectedSection === "challenges") {
          defaultSchema = {
            title: sol.challenges.title,
            subtitle: sol.challenges.subtitle,
            challenge1Icon: sol.challenges.challenges[0]?.icon || "Clock",
            challenge1Title: sol.challenges.challenges[0]?.title || "",
            challenge1Desc: sol.challenges.challenges[0]?.description || "",
            challenge2Icon: sol.challenges.challenges[1]?.icon || "Clock",
            challenge2Title: sol.challenges.challenges[1]?.title || "",
            challenge2Desc: sol.challenges.challenges[1]?.description || "",
            challenge3Icon: sol.challenges.challenges[2]?.icon || "Clock",
            challenge3Title: sol.challenges.challenges[2]?.title || "",
            challenge3Desc: sol.challenges.challenges[2]?.description || "",
          };
        } else if (selectedSection === "showcase") {
          defaultSchema = {
            title: sol.showcase.title,
            subtitle: sol.showcase.subtitle,
            item1Subtitle: sol.showcase.items[0]?.subtitle || "",
            item1Title: sol.showcase.items[0]?.title || "",
            item1Desc: sol.showcase.items[0]?.description || "",
            item1Bullets: sol.showcase.items[0]?.bullets.join(",") || "",
            item1Image: sol.showcase.items[0]?.mainImage || "",
            item2Subtitle: sol.showcase.items[1]?.subtitle || "",
            item2Title: sol.showcase.items[1]?.title || "",
            item2Desc: sol.showcase.items[1]?.description || "",
            item2Bullets: sol.showcase.items[1]?.bullets.join(",") || "",
            item2Image: sol.showcase.items[1]?.mainImage || "",
            item3Subtitle: sol.showcase.items[2]?.subtitle || "",
            item3Title: sol.showcase.items[2]?.title || "",
            item3Desc: sol.showcase.items[2]?.description || "",
            item3Bullets: sol.showcase.items[2]?.bullets.join(",") || "",
            item3Image: sol.showcase.items[2]?.mainImage || "",
          };
        } else if (selectedSection === "benefits") {
          defaultSchema = {
            title: sol.benefits.title,
            subtitle: sol.benefits.subtitle,
            imageSrc: sol.benefits.imageSrc || "",
            videoSrc: sol.benefits.videoSrc || "",
            benefit1Title: sol.benefits.benefits[0]?.title || "",
            benefit1Desc: sol.benefits.benefits[0]?.description || "",
            benefit2Title: sol.benefits.benefits[1]?.title || "",
            benefit2Desc: sol.benefits.benefits[1]?.description || "",
            benefit3Title: sol.benefits.benefits[2]?.title || "",
            benefit3Desc: sol.benefits.benefits[2]?.description || "",
          };
        } else if (selectedSection === "icongrid") {
          defaultSchema = {
            title: sol.icongrid.title,
            subtitle: sol.icongrid.subtitle,
            item1Icon: sol.icongrid.items[0]?.icon || "Activity",
            item1Title: sol.icongrid.items[0]?.title || "",
            item1Desc: sol.icongrid.items[0]?.description || "",
            item2Icon: sol.icongrid.items[1]?.icon || "Activity",
            item2Title: sol.icongrid.items[1]?.title || "",
            item2Desc: sol.icongrid.items[1]?.description || "",
            item3Icon: sol.icongrid.items[2]?.icon || "Activity",
            item3Title: sol.icongrid.items[2]?.title || "",
            item3Desc: sol.icongrid.items[2]?.description || "",
            item4Icon: sol.icongrid.items[3]?.icon || "Activity",
            item4Title: sol.icongrid.items[3]?.title || "",
            item4Desc: sol.icongrid.items[3]?.description || "",
            item5Icon: sol.icongrid.items[4]?.icon || "Activity",
            item5Title: sol.icongrid.items[4]?.title || "",
            item5Desc: sol.icongrid.items[4]?.description || "",
            item6Icon: sol.icongrid.items[5]?.icon || "Activity",
            item6Title: sol.icongrid.items[5]?.title || "",
            item6Desc: sol.icongrid.items[5]?.description || "",
            item7Icon: sol.icongrid.items[6]?.icon || "Activity",
            item7Title: sol.icongrid.items[6]?.title || "",
            item7Desc: sol.icongrid.items[6]?.description || "",
            item8Icon: sol.icongrid.items[7]?.icon || "Activity",
            item8Title: sol.icongrid.items[7]?.title || "",
            item8Desc: sol.icongrid.items[7]?.description || "",
          };
        } else if (selectedSection === "carousel") {
          defaultSchema = {
            title: sol.carousel.title,
            subtitle: sol.carousel.subtitle,
            card1Title: sol.carousel.cards[0]?.title || "",
            card1Image: sol.carousel.cards[0]?.imageSrc || "",
            card2Title: sol.carousel.cards[1]?.title || "",
            card2Image: sol.carousel.cards[1]?.imageSrc || "",
            card3Title: sol.carousel.cards[2]?.title || "",
            card3Image: sol.carousel.cards[2]?.imageSrc || "",
            card4Title: sol.carousel.cards[3]?.title || "",
            card4Image: sol.carousel.cards[3]?.imageSrc || "",
            card5Title: sol.carousel.cards[4]?.title || "",
            card5Image: sol.carousel.cards[4]?.imageSrc || "",
          };
        } else if (selectedSection === "stats") {
          defaultSchema = {
            subtitle: sol.stats.subtitle,
            stat1Value: sol.stats.stats[0]?.value || "",
            stat1Suffix: sol.stats.stats[0]?.suffix || "",
            stat1Label: sol.stats.stats[0]?.label || "",
            stat2Value: sol.stats.stats[1]?.value || "",
            stat2Suffix: sol.stats.stats[1]?.suffix || "",
            stat2Label: sol.stats.stats[1]?.label || "",
            stat3Value: sol.stats.stats[2]?.value || "",
            stat3Suffix: sol.stats.stats[2]?.suffix || "",
            stat3Label: sol.stats.stats[2]?.label || "",
          };
        } else if (selectedSection === "whychoose") {
          defaultSchema = {
            title: sol.whychoose.title,
            subtitle: sol.whychoose.subtitle,
            description: sol.whychoose.description,
            reason1Title: sol.whychoose.reasons[0]?.title || "",
            reason1Desc: sol.whychoose.reasons[0]?.description || "",
            reason2Title: sol.whychoose.reasons[1]?.title || "",
            reason2Desc: sol.whychoose.reasons[1]?.description || "",
            reason3Title: sol.whychoose.reasons[2]?.title || "",
            reason3Desc: sol.whychoose.reasons[2]?.description || "",
            reason4Title: sol.whychoose.reasons[3]?.title || "",
            reason4Desc: sol.whychoose.reasons[3]?.description || "",
          };
        } else if (selectedSection === "faq") {
          defaultSchema = {
            faq1Q: sol.faq[0]?.question || "",
            faq1A: sol.faq[0]?.answer || "",
            faq2Q: sol.faq[1]?.question || "",
            faq2A: sol.faq[1]?.answer || "",
            faq3Q: sol.faq[2]?.question || "",
            faq3A: sol.faq[2]?.answer || "",
            faq4Q: sol.faq[3]?.question || "",
            faq4A: sol.faq[3]?.answer || "",
          };
        } else if (selectedSection === "cta") {
          defaultSchema = {
            title: sol.cta.title,
            subtitle: sol.cta.subtitle,
            buttonText: sol.cta.buttonText || "Book a Demo",
            secondaryButtonText: sol.cta.secondaryButtonText || "Talk to Sales"
          };
        }
      }
    } else {
      defaultSchema = DEFAULT_CONTENT_SCHEMA[selectedPage]?.[selectedSection] || { title: "", subtitle: "", text: "", image: "" };
    }

    if (existing && existing.content) {
      try {
        const parsed = JSON.parse(existing.content);
        // Merge to ensure we always have the default keys if the user deleted them or they are new
        setFormData({ ...defaultSchema, ...parsed });
      } catch {
        setFormData(defaultSchema);
      }
    } else {
      setFormData(defaultSchema);
    }
    setSaved(false);
  }, [selectedPage, selectedSection, initialContent]);

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const addField = () => {
    const key = prompt("Enter new field name (e.g. buttonText, image2):");
    if (key && !formData[key]) {
      setFormData(prev => ({ ...prev, [key]: "" }));
    }
  };

  const removeField = (key: string) => {
    if (confirm(`Remove field "${key}"?`)) {
      setFormData(prev => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleFileUpload = async (key: string, file: File) => {
    setUploadingKey(key);
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        handleInputChange(key, json.url);
      } else {
        alert("Upload failed: " + json.error);
      }
    } catch (e) {
      alert("Upload failed.");
    } finally {
      setUploadingKey(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const contentStr = JSON.stringify(formData);
    const res = await updateSiteContent(selectedPage, selectedSection, contentStr);
    setSaving(false);
    if (res.success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert("Failed to save content");
    }
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-[#2B3674] tracking-tight">Site Content CMS</h1>
        <p className="text-[#A3AED0] font-medium mt-1">Manage text and images across all pages dynamically.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-[0_18px_40px_rgba(112,144,176,0.12)] border border-zinc-100 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Selector */}
        <div className="w-full md:w-80 flex flex-col gap-6 border-r border-zinc-100 pr-8">
          <div>
            <label className="text-sm font-bold text-[#2B3674] mb-2 block">Select Page</label>
            <select 
              value={selectedPage} 
              onChange={e => { setSelectedPage(e.target.value); setSelectedSection(SECTIONS_MAP[e.target.value][0] || "hero"); }}
              className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-medium"
            >
              {PAGES.map(p => <option key={p} value={p}>{PAGE_LABELS[p] || p}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-bold text-[#2B3674] mb-2 block">Select Section</label>
            <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
              {(SECTIONS_MAP[selectedPage] || ["hero"]).map(sec => (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`px-4 py-2.5 text-left rounded-xl text-sm font-bold transition-colors ${selectedSection === sec ? "bg-[#4318FF] text-white" : "bg-[#F4F7FE] text-[#2B3674] hover:bg-zinc-200"}`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
            <h3 className="text-xl font-bold text-[#2B3674]">
              Editing: <span className="text-[#4318FF]">{PAGE_LABELS[selectedPage] || selectedPage}</span> / <span className="capitalize">{selectedSection}</span>
            </h3>
            <button onClick={addField} className="text-sm font-bold text-[#4318FF] hover:underline">
              + Add Field
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {Object.entries(formData).map(([key, value]) => {
              const isImage = key.toLowerCase().includes("image") || key.toLowerCase().includes("icon") || key.toLowerCase().includes("logo") || key.toLowerCase().includes("video");
              const isLargeText = key.toLowerCase().includes("text") || key.toLowerCase().includes("description") || key.toLowerCase().includes("content") || key.toLowerCase().includes("desc") || key.toLowerCase().includes("features") || key.toLowerCase().includes("highlights") || key.toLowerCase().includes("results") || key.toLowerCase().includes("bullets") || key.toLowerCase().includes("quote") || key.toLowerCase().includes("answer") || key.toLowerCase().includes("a");

              return (
                <div key={key} className="flex flex-col gap-2 relative group">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-[#2B3674] capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/([0-9]+)/g, ' $1').trim()}</label>
                    <button onClick={() => removeField(key)} className="text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                  </div>

                  {isImage ? (
                    <div className="flex gap-4 items-center">
                      <div className="flex-1 relative">
                        <input 
                          type="text" 
                          value={value} 
                          onChange={e => handleInputChange(key, e.target.value)}
                          className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
                          placeholder="Image/Video URL or upload..."
                        />
                      </div>
                      <label className="cursor-pointer px-4 py-3 bg-[#E9EDF7] hover:bg-zinc-200 text-[#2B3674] font-bold rounded-xl transition-colors flex items-center gap-2">
                        {uploadingKey === key ? "Uploading..." : <><Upload className="w-4 h-4" /> Upload</>}
                        <input type="file" className="hidden" accept="image/*,video/*" onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileUpload(key, e.target.files[0]);
                          }
                        }} />
                      </label>
                      {value && !value.endsWith(".mp4") && <img src={value} alt="" className="w-12 h-12 rounded-lg object-cover bg-zinc-100" />}
                    </div>
                  ) : isLargeText ? (
                    <textarea 
                      value={value}
                      onChange={e => handleInputChange(key, e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
                    />
                  ) : (
                    <input 
                      type="text" 
                      value={value}
                      onChange={e => handleInputChange(key, e.target.value)}
                      className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
                    />
                  )}
                </div>
              );
            })}

            {Object.keys(formData).length === 0 && (
              <p className="text-[#A3AED0] text-sm text-center py-8">No content fields defined. Click "+ Add Field" to start.</p>
            )}
          </div>

          <div className="flex justify-end pt-6 mt-2 border-t border-zinc-100">
            <button 
              onClick={handleSave} 
              disabled={saving}
              className="px-8 py-3.5 bg-[#4318FF] hover:bg-[#3311DB] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(67,24,255,0.2)] transition-all flex items-center gap-2"
            >
              {saving ? "Saving..." : saved ? <><CheckCircle className="w-5 h-5" /> Saved!</> : <><Save className="w-5 h-5" /> Save Content</>}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
