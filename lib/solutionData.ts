export interface SolutionData {
  title: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    buttonText: string;
    secondaryButtonText: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    challenges: Array<{ icon: string; title: string; description: string }>;
  };
  showcase: {
    title: string;
    subtitle: string;
    items: Array<{
      subtitle: string;
      title: string;
      description: string;
      bullets: string[];
      mainImage: string;
      subImages?: string[];
    }>;
  };
  benefits: {
    title: string;
    subtitle: string;
    imageSrc?: string;
    videoSrc?: string;
    benefits: Array<{ title: string; description: string }>;
  };
  icongrid: {
    title: string;
    subtitle: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  carousel: {
    title: string;
    subtitle: string;
    cards: Array<{ title: string; imageSrc: string }>;
  };
  stats: {
    subtitle: string;
    stats: Array<{ value: string; suffix: string; label: string }>;
  };
  whychoose: {
    title: string;
    subtitle: string;
    description: string;
    reasons: Array<{ title: string; description: string }>;
  };
  faq: Array<{ question: string; answer: string }>;
  cta: {
    title: string;
    subtitle: string;
    buttonText?: string;
    secondaryButtonText?: string;
  };
}

export const SOLUTION_DEFAULTS: Record<string, SolutionData> = {
  "solutions-universities": {
    title: "University Cafe & Mess Services",
    hero: {
      title: "University Cafe & Mess Services",
      subtitle: "Universities",
      description: "Transform your campus dining experience. A digital-first approach for Gen Z students that eliminates long mess lines and modernizes university food courts.",
      imageSrc: "/Ultra-realistic_cinematic_hero_banner_photography_202606041052.jpeg",
      buttonText: "Book a Demo",
      secondaryButtonText: "Explore Features"
    },
    challenges: {
      title: "Why campus dining needs an upgrade",
      subtitle: "The Problem",
      challenges: [
        { icon: "Clock", title: "Long Mess Lines", description: "Students spend too much time waiting for meals between classes, leading to frustration and tardiness." },
        { icon: "Wallet", title: "Clunky Meal Plans", description: "Traditional ID card systems are outdated, hard to track, and lack modern digital integration." },
        { icon: "BookOpen", title: "Outdated Experience", description: "Gen Z expects a seamless, app-based ordering experience that traditional cafeterias fail to provide." }
      ]
    },
    showcase: {
      title: "The Digital Campus Experience",
      subtitle: "End-to-End Solutions",
      items: [
        {
          subtitle: "Cashless Campus & Mess",
          title: "Seamless ID Integration",
          description: "Integrate with student ID cards for a completely cashless dining experience across all campus outlets. Track balances and manage meal plans effortlessly.",
          bullets: ["Link directly to student accounts", "Manage subsidies and daily limits", "Real-time balance tracking"],
          mainImage: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606041222.jpeg"
        },
        {
          subtitle: "Mobile Pre-ordering",
          title: "Pre-order via Student App",
          description: "Students can pre-order their meals between classes and pick them up instantly, avoiding rush hour lines and getting to their next lecture on time.",
          bullets: ["Schedule pickups in advance", "Browse full menus and nutritional info", "Push notifications for order readiness"],
          mainImage: "/Ultra-realistic_cinematic_commercial_photography_of_202606041228.jpeg"
        },
        {
          subtitle: "Automated Backend",
          title: "Smart Inventory & Delivery",
          description: "Automated backend systems ensure food is always stocked and delivered fresh to various campus locations, minimizing food waste.",
          bullets: ["AI-driven demand forecasting", "Multi-location inventory tracking", "Reduce food waste significantly"],
          mainImage: "/Ultra-realistic_commercial_technology_photography_of_202606041235.jpeg"
        }
      ]
    },
    benefits: {
      title: "Brewing best memories for students",
      subtitle: "Student Outcomes",
      videoSrc: "/Student_dining_transformation_un…_202606041113 (1).mp4",
      benefits: [
        { title: "Elevate Campus Life", description: "Provide a modern, tech-forward dining experience that attracts and retains top students." },
        { title: "Increase Dining Revenue", description: "Make it easier for students to order from various campus outlets, boosting overall sales." },
        { title: "Streamline Operations", description: "Reduce the administrative burden of managing complex meal plans and subsidies." }
      ]
    },
    icongrid: {
      title: "Built for the modern university",
      subtitle: "Platform Features",
      items: [
        { icon: "GraduationCap", title: "Student App", description: "Native iOS and Android apps for seamless ordering." },
        { icon: "Wallet", title: "Meal Plan Sync", description: "Natively supports declining balances and subsidies." },
        { icon: "Users", title: "Parent Portal", description: "Allow parents to top-up balances and view transaction history." },
        { icon: "ShieldCheck", title: "FERPA Compliant", description: "Strict adherence to student data privacy regulations." },
        { icon: "Zap", title: "Rapid Deployment", description: "Go live across campus in weeks, not months." },
        { icon: "Headphones", title: "24/7 Support", description: "Dedicated account managers for your university." },
        { icon: "Cpu", title: "API Integrations", description: "Connect with existing university management systems." },
        { icon: "Globe", title: "Multi-Campus", description: "Unify dining across sprawling or multi-city campuses." }
      ]
    },
    carousel: {
      title: "Where SELFX shines on campus",
      subtitle: "Ideal Environments",
      cards: [
        { title: "Main Food Courts", imageSrc: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606041222.jpeg" },
        { title: "Library Cafes", imageSrc: "/Ultra-realistic_cinematic_commercial_photography_of_202606041228.jpeg" },
        { title: "Stadium Concessions", imageSrc: "/Ultra-realistic_commercial_technology_photography_of_202606041235.jpeg" },
        { title: "Dormitory Mess Halls", imageSrc: "/Ultra-realistic_cinematic_hero_banner_photography_202606041052.jpeg" }
      ]
    },
    stats: {
      subtitle: "Trusted By Top Universities",
      stats: [
        { value: "50", suffix: "+", label: "Campuses" },
        { value: "500", suffix: "k+", label: "Active Students" },
        { value: "10", suffix: "M+", label: "Orders Processed" }
      ]
    },
    whychoose: {
      title: "A partner in higher education",
      subtitle: "The SELFX Advantage",
      description: "We understand the unique complexities of university dining operations and have built a platform specifically tailored to solve them.",
      reasons: [
        { title: "Deep Integrations", description: "We seamlessly connect with leading campus card providers like Blackboard and CBORD." },
        { title: "Hardware Flexibility", description: "Use our kiosks for fixed locations, and our handhelds for pop-up events and stadiums." },
        { title: "Dedicated Onboarding", description: "Our team handles the heavy lifting of menu digitization and system setup." },
        { title: "Continuous Innovation", description: "We regularly update our platform with features requested by our university partners." }
      ]
    },
    faq: [
      { question: "How do you handle meal plans and subsidies?", answer: "Our system natively supports complex meal plan structures, daily limits, subsidies, and declining balances directly linked to the student ID card." },
      { question: "Can we use this for sporting events or pop-up stalls?", answer: "Yes! Our Handheld Mobile POS devices are perfect for taking payments at stadium concessions or temporary campus events without needing hardwired internet." },
      { question: "Does this work with our existing university portal?", answer: "We offer API integrations that can link our ordering system with most modern university management portals and single sign-on (SSO) systems." },
      { question: "Is the student data kept secure?", answer: "Data security is our top priority. We employ enterprise-grade encryption and comply with relevant educational data privacy standards to ensure student information is protected." }
    ],
    cta: {
      title: "Ready to modernize your campus dining?",
      subtitle: "Join forward-thinking universities delivering premium, digital-first food services.",
      buttonText: "Book a Custom Demo",
      secondaryButtonText: "Talk to Sales"
    }
  },
  "solutions-food-courts": {
    title: "Food Courts",
    hero: {
      title: "Foodcourts Reimagined",
      subtitle: "Commercial Spaces",
      description: "Transforming multi-vendor dining spaces into seamless, digital-first hubs. Reduce wait times and consolidate ordering into one smooth experience.",
      imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041239.jpeg",
      buttonText: "Book a Demo",
      secondaryButtonText: "Explore Features"
    },
    challenges: {
      title: "The chaos of traditional food courts",
      subtitle: "The Problem",
      challenges: [
        { icon: "Clock", title: "Disjointed Ordering", description: "Customers have to queue separately for each vendor, frustrating families and groups who want different cuisines." },
        { icon: "CreditCard", title: "Payment Friction", description: "Handling multiple payments across different counters slows down service during peak dining hours." },
        { icon: "Store", title: "Vendor Management", description: "Operators struggle to unify sales data, track performance, and manage settlements across multiple independent brands." }
      ]
    },
    showcase: {
      title: "Our Services",
      subtitle: "End-to-end food court management",
      items: [
        {
          subtitle: "Unified Systems",
          title: "Consolidated Technology",
          description: "A centralized POS and Kiosk ecosystem allows customers to order from multiple brands in a single transaction, reducing queue times drastically.",
          bullets: ["Unified Self-Ordering Kiosks", "Centralized Kitchen Display Systems", "Consolidated payment processing"],
          mainImage: "/foodcourt.png"
        },
        {
          subtitle: "Culinary Curation",
          title: "Curated Brand Experiences",
          description: "We help curate a perfect mix of national and local brands to offer a diverse culinary experience that drives footfall and satisfaction.",
          bullets: ["Brand mix optimization", "Quality and hygiene audits", "Unified menu management"],
          mainImage: "/foodcourt1.png"
        }
      ]
    },
    benefits: {
      title: "Elevating the standard for dining experiences",
      subtitle: "Business Outcomes",
      imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041239.jpeg",
      benefits: [
        { title: "Increase Overall Footfall", description: "A seamless ordering experience attracts more customers who would otherwise avoid crowded traditional food courts." },
        { title: "Boost Vendor Sales", description: "Unified ordering encourages cross-selling, as customers are more likely to order a drink from one vendor and a meal from another." },
        { title: "Simplify Operations", description: "Centralized management drastically reduces the administrative overhead of running a multi-vendor space." }
      ]
    },
    icongrid: {
      title: "Why choose SelfX?",
      subtitle: "The Advantage",
      items: [
        { icon: "MonitorSmartphone", title: "Unified Ordering", description: "Order from multiple vendors in one cart." },
        { icon: "BarChart3", title: "Central Analytics", description: "View sales data for all vendors in one dashboard." },
        { icon: "Clock", title: "Reduced Wait Times", description: "Streamlined pickup with digital signage." },
        { icon: "ShieldCheck", title: "Secure Splits", description: "Automated routing of funds to respective vendors." },
        { icon: "Utensils", title: "Menu Management", description: "Centralized control over all vendor menus." },
        { icon: "LayoutDashboard", title: "Vendor Portals", description: "Individual access for brands to manage their own operations." },
        { icon: "Store", title: "Hardware Agnostic", description: "Integrates with existing kitchen display systems." },
        { icon: "CreditCard", title: "Cashless Hubs", description: "Fully digital payments across the entire food court." }
      ]
    },
    carousel: {
      title: "Vibrant hubs for experiences",
      subtitle: "Foodcourts are more than dining spaces",
      cards: [
        { title: "Shopping Malls", imageSrc: "/Ultra-realistic_architectural_photography_of_a_202606041244.jpeg" },
        { title: "Highway Rest Stops", imageSrc: "/Ultra-realistic_cinematic_night_photography_of_202606041247.jpeg" },
        { title: "Tech Parks", imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041250.jpeg" },
        { title: "Hospitals", imageSrc: "/Ultra-realistic_cinematic_photography_of_healthcare_202606041252.jpeg" },
        { title: "Airports", imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041256.jpeg" }
      ]
    },
    stats: {
      subtitle: "Trusted By Top Commercial Spaces",
      stats: [
        { value: "100", suffix: "+", label: "Locations" },
        { value: "500", suffix: "+", label: "Brands" },
        { value: "30", suffix: "%", label: "Increase in Sales" }
      ]
    },
    whychoose: {
      title: "Built for complex environments",
      subtitle: "The SELFX Advantage",
      description: "We master the complexity of multi-vendor operations so you can focus on delivering exceptional culinary experiences to your guests.",
      reasons: [
        { title: "Scale with ease", description: "Easily add or remove vendors as your tenancy mix changes." },
        { title: "Flexible settlements", description: "Route payouts directly to each vendor's merchant account." },
        { title: "Unified branding", description: "Custom brand the web and kiosk ordering screens to match your food court name." },
        { title: "Logistics dispatch", description: "Dispatch delivery drivers across multiple vendors seamlessly." }
      ]
    },
    faq: [
      { question: "How are payouts split among different vendors?", answer: "Our integrated billing splits transactions in real-time. Payments route directly to respective vendor accounts, minus any platform cuts." },
      { question: "Can customers order from multiple vendors in one checkout?", answer: "Yes! Our Kiosks and Web Ordering portals allow guests to add a burger from one vendor and bubble tea from another into a single check." },
      { question: "What hardware is required for the vendors?", answer: "Each vendor is equipped with a compact POS terminal or a tablet KDS screen to accept and prepare their assigned items." },
      { question: "Does this support common dining areas?", answer: "Yes. Customers are notified via SMS or digital signage when their specific dishes are ready for collection at respective counters." }
    ],
    cta: {
      title: "Transform your commercial dining spaces.",
      subtitle: "Simplify operations, boost vendor sales, and deliver a modern experience.",
      buttonText: "Book a Demo",
      secondaryButtonText: "Talk to Sales"
    }
  },
  "solutions-corporate-tech-parks": {
    title: "Corporate Tech Parks",
    hero: {
      title: "Corporate Cafeteria Services",
      subtitle: "Corporate Tech Parks",
      description: "A game-changing self-ordering experience designed to serve thousands of employees with zero queues, seamless tech, and unparalleled convenience.",
      imageSrc: "/corporate.jpeg",
      buttonText: "Book a Demo",
      secondaryButtonText: "Explore Features"
    },
    challenges: {
      title: "Why traditional corporate cafeterias are failing",
      subtitle: "The Problem",
      challenges: [
        { icon: "Clock", title: "Long Queues During Peak Hours", description: "Employees waste their valuable break time standing in line instead of relaxing and recharging." },
        { icon: "UtensilsCrossed", title: "Fragmented Ordering", description: "Multiple vendors mean multiple transactions, creating a frustrating and slow user experience." },
        { icon: "Coffee", title: "Inefficient Operations", description: "Lack of centralized data makes it hard to predict demand, leading to food waste and lost revenue." }
      ]
    },
    showcase: {
      title: "Our diverse offerings & services",
      subtitle: "End-to-End Solutions",
      items: [
        {
          subtitle: "Flavourful Food",
          title: "Great Food at Work",
          description: "We provide diverse food options catering to every employee's preference, ensuring a delightful dining experience right at their workplace.",
          bullets: ["Wide variety of cuisines available", "Healthy and nutritious meal plans", "Local and international flavors"],
          mainImage: "/Ultra-realistic_commercial_advertising_photography_of_202606031859.jpeg"
        },
        {
          subtitle: "Seamless Technology",
          title: "Tech-Driven Convenience",
          description: "Say goodbye to long lunch lines. Our technology ecosystem streamlines ordering, payment, and pick-up, giving employees more time to relax.",
          bullets: ["Self-ordering kiosks to bust queues", "Mobile app for desk ordering", "Cashless, secure transactions"],
          mainImage: "/Ultra-realistic_architectural_and_lifestyle_photography_202606041046.jpeg"
        },
        {
          subtitle: "Smart Vending Solutions",
          title: "24/7 Access to Essentials",
          description: "Keep your workforce fueled around the clock with our smart vending solutions, perfect for late-night shifts and quick cravings.",
          bullets: ["Automated smart fridges", "IoT enabled inventory tracking", "Cashless tap-to-pay interface"],
          mainImage: "/Ultra-realistic_architectural_photography_of_a_202606041043.jpeg"
        }
      ]
    },
    benefits: {
      title: "Elevate your workplace experience",
      subtitle: "Business Outcomes",
      imageSrc: "/corporate.jpeg",
      benefits: [
        { title: "Boost Employee Satisfaction", description: "Provide a seamless, stress-free dining experience that serves as a major perk for top talent." },
        { title: "Increase Productivity", description: "Reduce time spent waiting in line, returning valuable time to your employees' workday." },
        { title: "Optimize Space Utilization", description: "Replace bulky traditional counters with sleek, space-saving self-service kiosks." }
      ]
    },
    icongrid: {
      title: "We are game changers for your cafeteria.",
      subtitle: "Platform Features",
      items: [
        { icon: "Building", title: "Scalable Infrastructure", description: "Built to handle thousands of concurrent orders seamlessly." },
        { icon: "TrendingUp", title: "Data-Driven Insights", description: "Track consumption patterns and optimize operations." },
        { icon: "Users", title: "Employee Satisfaction", description: "Enhance workplace perks with a premium dining experience." },
        { icon: "ShieldCheck", title: "Enterprise Security", description: "Bank-level encryption for all corporate transactions." },
        { icon: "Zap", title: "Lightning Fast", description: "Zero lag processing during peak lunch hour rushes." },
        { icon: "Headphones", title: "24/7 Support", description: "Dedicated account managers and rapid technical support." },
        { icon: "Cpu", title: "AI Powered", description: "Smart upselling and inventory predictions." },
        { icon: "Globe", title: "Multi-Location", description: "Manage cafeterias across different cities from one dashboard." }
      ]
    },
    carousel: {
      title: "Designed for enterprise scale",
      subtitle: "Ideal Environments",
      cards: [
        { title: "Global HQs", imageSrc: "/Ultra-realistic_architectural_and_lifestyle_photography_202606041046.jpeg" },
        { title: "Multi-tenant Tech Parks", imageSrc: "/Ultra-realistic_architectural_photography_of_a_202606041043.jpeg" },
        { title: "R&D Facilities", imageSrc: "/Ultra-realistic_commercial_advertising_photography_of_202606031859.jpeg" },
        { title: "Manufacturing Campuses", imageSrc: "/corporate.jpeg" }
      ]
    },
    stats: {
      subtitle: "Trusted By The Biggest Tech Parks",
      stats: [
        { value: "12", suffix: "+", label: "Tech Parks" },
        { value: "40", suffix: "k+", label: "Daily Feedings" },
        { value: "99.99", suffix: "%", label: "Order Accuracy" }
      ]
    },
    whychoose: {
      title: "Centralized corporate governance",
      subtitle: "The SELFX Advantage",
      description: "Manage cafeteria vendors, subsidize employee meals, audit real-time sales, and run corporate promotions from a single portal.",
      reasons: [
        { title: "Employee subsidy rules", description: "Establish daily or monthly allowances tied directly to employee accounts or corporate badges." },
        { title: "Sub-second payments", description: "Native card readers and employee badge scanning ensure rapid checkout." },
        { title: "Guest menu curation", description: "Onboard new caterers or guest kitchen chefs with quick menu imports." },
        { title: "Eco-friendly workflows", description: "100% digital receipts and bump KDS systems eliminate paper wastage." }
      ]
    },
    faq: [
      { question: "How do corporate employee meal subsidies work?", answer: "Managers can establish allowance parameters (e.g. $10 free breakfast). Employees scan their badge at the kiosk, deducting the subsidy automatically." },
      { question: "Can the system integrate with building access badges?", answer: "Yes! Our NFC/RFID scanning modules read standard corporate access badges to link orders directly to employee accounts." },
      { question: "Can employee accounts be topped up?", answer: "Yes, employees or HR departments can link credit cards to top-up dining wallets via our mobile portal." },
      { question: "Is the database secure for corporate audits?", answer: "Our systems use AES-256 database encryption and are SOC2 audit compliant, protecting company transaction histories." }
    ],
    cta: {
      title: "Ready to modernize your corporate cafeteria?",
      subtitle: "Unlock a queue-free lunch experience and elevate your workplace today.",
      buttonText: "Book a Demo",
      secondaryButtonText: "Talk to Sales"
    }
  }
};
