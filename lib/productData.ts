export interface ProductData {
  productName: string;
  hero: {
    headline: string;
    description: string;
    imageSrc: string;
    highlights: string[];
    primaryCtaText?: string;
    secondaryCtaText?: string;
  };
  challenge: {
    title: string;
    subtitle: string;
    imageSrc: string;
    challenges: Array<{ title: string; description: string }>;
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; description: string }>;
  };
  features: {
    title: string;
    subtitle: string;
    features: Array<{ icon: string; title: string; description: string }>;
  };
  impact: {
    title: string;
    subtitle: string;
    metrics: Array<{ value: string; suffix: string; label: string }>;
  };
  useCases: {
    title: string;
    subtitle: string;
    useCases: Array<{ title: string; imageSrc: string }>;
  };
  analytics: {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
  };
  success: {
    title: string;
    subtitle: string;
    quote: string;
    author: string;
    role: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  faqs: Array<{ q: string; a: string }>;
  cta: {
    title: string;
    subtitle: string;
  };
}

export const PRODUCT_DEFAULTS: Record<string, ProductData> = {
  "product-pos-software": {
    productName: "POS Cloud Software",
    hero: {
      headline: "The Centralized Brain of Your Food Service Enterprise",
      description: "Unify multi-branch menus, automate offline sales, and track live kitchen performance from a single cloud-native dashboard.",
      imageSrc: "/pos cloud.png",
      highlights: ["Multi-Branch Sync", "Offline-First Reliability", "Integrated Payments"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The operational bottlenecks of fragmented POS systems",
      subtitle: "Operational Bottlenecks",
      imageSrc: "/software.png",
      challenges: [
        { title: "Disconnected Branch Data", description: "Manually reconciling sales, menu items, and labor data across multiple outlets slows expansion and creates human error." },
        { title: "Devastating Internet Outages", description: "Most legacy cloud POS systems freeze when offline, leading to lost transactions, frustrated customers, and operational chaos." },
        { title: "Siloed Inventory Control", description: "Stock levels that do not sync in real-time lead to ingredient wastage, unexpected out-of-stock items, and customer dissatisfaction." },
        { title: "Lagging Financial Reports", description: "Waiting until end-of-day or end-of-week to analyze food costs, gross margins, and labor percentages makes proactive management impossible." }
      ]
    },
    workflow: {
      title: "Streamline your operations in 4 steps",
      subtitle: "The Operational Flow",
      steps: [
        { title: "Configure Central Menu", description: "Design your catalog, set pricing tiers, and push menu updates to all branches, kiosks, and online apps instantly from a central portal." },
        { title: "Process Seamless Orders", description: "Staff ring up orders via responsive touch screens. Transactions are processed securely in sub-seconds with zero latency." },
        { title: "Auto-Route to Kitchen", description: "Orders are instantly routed to KDS screens or kitchen prep stations without manual ticket running or communication errors." },
        { title: "Analyze Live Analytics", description: "Review live transaction data, staff efficiency, and inventory deplete logs directly from your central corporate dashboard." }
      ]
    },
    features: {
      title: "Built to power high-volume transactions",
      subtitle: "Core Capabilities",
      features: [
        { icon: "CloudLightning", title: "Instant Menu Sync", description: "Change prices, add promotional bundles, or disable sold-out items globally across all sales channels in a single click." },
        { icon: "ShieldCheck", title: "Offline-First Engine", description: "Never miss a sale. Transact fully offline, auto-routing kitchen tickets and storing payments securely until connection resumes." },
        { icon: "Layers", title: "Multi-Store Catalog", description: "Control distinct menus, local tax groups, and currency denominations by geographic region or franchise division." },
        { icon: "Activity", title: "Real-Time Telemetry", description: "Track revenue, void rates, manager discounts, and hourly labor costs minute-by-minute from any browser or mobile device." },
        { icon: "FileSpreadsheet", title: "Automated Reconciliation", description: "Eliminate manual bookkeeping with native, automatic journal entry syncing directly to leading accounting platforms." },
        { icon: "Users", title: "Granular Permissions", description: "Enforce secure operations with manager approval overrides, custom cashier drawers, and role-based layout permissions." },
        { icon: "CreditCard", title: "Tokenized Payments", description: "Tap, dip, or swipe. Fully integrated with international EMV payment terminals, Apple Pay, Google Pay, and gift cards." },
        { icon: "Network", title: "Open API Integrations", description: "Seamlessly plug in third-party delivery aggregates, customer loyalty systems, CRM suites, and custom ERP databases." }
      ]
    },
    impact: {
      title: "Measurable improvements across operations",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "+18%", suffix: "", label: "Sales Growth" },
        { value: "-25%", suffix: "", label: "Order Delays" },
        { value: "99.99%", suffix: "", label: "System Uptime" },
        { value: "-40h", suffix: "", label: "Monthly Admin Work" }
      ]
    },
    useCases: {
      title: "Tailored solutions for hospitality environments",
      subtitle: "Deployments",
      useCases: [
        { title: "Quick Service Restaurants", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Full Service Fine Dining", imageSrc: "/Ultra-premium_fine_dining_restaurant_interior_202606111239.jpeg" },
        { title: "Multi-Brand Food Courts", imageSrc: "/foodcourt.png" }
      ]
    },
    analytics: {
      title: "Complete control from one dashboard",
      subtitle: "Corporate Analytics",
      description: "Generate automated daily summaries, compare branch performance, track labor overheads, and audit cash drawers in real-time.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Unifying 40+ branches under one system",
      subtitle: "Success Story",
      quote: "Switching to SELFX POS Cloud transformed our multi-state operation. We went from manual end-of-day spreadsheets to 100% automated, live cloud reporting across 45 locations.",
      author: "Sarah Jenkins",
      role: "VP of Operations, Urban Greens",
      challenge: "Fragmented legacy systems made inventory reconciliation and menu updates a multi-day administrative nightmare across locations.",
      solution: "Deployed SELFX POS Cloud Software across all branches, enabling central menu control and unified sales reporting.",
      results: ["100% automated audits", "22% labor savings", "Centralized inventory control"]
    },
    faqs: [
      { q: "Is the software fully cloud-based?", a: "Yes, SELFX POS operates on an enterprise cloud infrastructure, granting you access to real-time sales, inventory, and labor metrics from any device in the world." },
      { q: "Can I manage multiple locations from a single account?", a: "Absolutely. You can compare performances, push global menu changes, update taxes, and view consolidated multi-unit financial reports through the corporate portal." },
      { q: "What happens if the internet goes down?", a: "Our offline-first system stores all sales, tax data, and print logs locally. Terminals continue communicating on the LAN, and automatically sync to the cloud when internet returns." },
      { q: "Does it support custom tax settings per branch?", a: "Yes. You can configure precise city, state, or federal taxes, service charges, and automatic tipping rules individually for each location." },
      { q: "Can I manage employee shift schedules and timesheets?", a: "Yes, staff can clock in and out directly on the terminals. Managers can audit labor hours, set wage groups, and export timesheets directly to payroll processors." },
      { q: "How does the system handle inventory stock depletion?", a: "Ingredients are linked to menu items via recipes. Every transaction auto-depletes inventory levels in real-time, sending reorder notifications when stock gets low." },
      { q: "What payment processors do you support?", a: "We integrate natively with Stripe, Adyen, and major local acquirers globally, supporting secure EMV transactions, contactless wallets, and digital gift cards." },
      { q: "Is customer data protected with enterprise security?", a: "Yes. All transactions are end-to-end tokenized. Customer data is encrypted with AES-256 standard and meets strict PCI-DSS Level 1 compliance requirements." }
    ],
    cta: {
      title: "Empower your operations today.",
      subtitle: "Join leading restaurant chains leveraging SELFX POS Cloud to scale without limitations."
    }
  },
  "product-mobile-app": {
    productName: "Mobile User APP",
    hero: {
      headline: "Untether Your Staff. Unify Your Service.",
      description: "Equip your waitstaff with the power of tableside ordering, payment processing, and inventory lookups directly on a rugged mobile app.",
      imageSrc: "/selfx app.jpeg",
      highlights: ["Tableside Ordering", "Instant Payment Sync", "Live Floor Telemetry"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The inefficiency of stationary service terminals",
      subtitle: "Service Bottlenecks",
      imageSrc: "/selfox-mobile-delivry-app.jpg",
      challenges: [
        { title: "Order Input Lag", description: "Servers taking orders on paper and walking back to a central terminal creates a bottleneck, slowing down kitchen preparation times." },
        { title: "Payment Bottlenecks", description: "Waiting to print checks and fetch credit card machines causes tableside delays, reducing restaurant seating capacity and table turn rates." },
        { title: "Inventory Blind Spots", description: "Taking orders without live stock lookups results in servers running back from the kitchen to inform guests an item is out of stock." },
        { title: "Poor Floor Visibility", description: "Managers glued to terminal screens cannot supervise floor hospitality, leading to quality control issues and service slip-ups." }
      ]
    },
    workflow: {
      title: "Frictionless tableside service in 4 steps",
      subtitle: "The Service Flow",
      steps: [
        { title: "Assigned Table Scan", description: "Server selects the active table from the live digital floor plan on the mobile interface, instantly verifying the seating detail." },
        { title: "Interactive Tableside Order", description: "Take the order right next to guests, applying modifications, allergies, and smart upsells on the fly." },
        { title: "Instant Kitchen Push", description: "Submit the order. It prints or displays on the KDS immediately, without the server ever walking away from the guest." },
        { title: "Contactless Checkout", description: "Swipe, tap, or scan to settle the bill at the table immediately, auto-closing the POS ticket with direct terminal reconciliation." }
      ]
    },
    features: {
      title: "Designed for high-speed floor operations",
      subtitle: "Core Capabilities",
      features: [
        { icon: "Smartphone", title: "Native Mobile OS", description: "Highly optimized, lightning-fast native apps built specifically for both iOS and Android handheld enterprise devices." },
        { icon: "Zap", title: "Sub-Second Syncing", description: "Instantly route tickets to specific prep stations with zero latency, eliminating manual hand-offs and service delays." },
        { icon: "RotateCcw", title: "Split-Bill Matrix", description: "Split orders by item, seat, or equal halves tableside in just two taps, offering guests total payment flexibility." },
        { icon: "Compass", title: "Dynamic Floor Map", description: "Color-coded table status indicators showing active dining times, billing status, order updates, and idle limits." },
        { icon: "Printer", title: "Belt-Printer Sync", description: "Print receipts and credit drafts directly to portable bluetooth belt printers carried by servers on the floor." },
        { icon: "HeartHandshake", title: "Upsell Prompter", description: "Smart prompts recommend food pairings, premium upgrades, and drink add-ons during order entry to boost check sizes." },
        { icon: "WifiOff", title: "Network Resilience", description: "Transactions store locally on the device and sync automatically to the central POS system if the venue WiFi fluctuates." },
        { icon: "Database", title: "Live Stock Counter", description: "Displays exact stock counts on limited menu items, auto-updating in real-time to avoid ordering unavailable items." }
      ]
    },
    impact: {
      title: "Mobilized staff deliver superior results",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "+20%", suffix: "", label: "Table Turn Rate" },
        { value: "+15%", suffix: "", label: "Average Server Tips" },
        { value: "-8m", suffix: "", label: "Average Check-Out Time" },
        { value: "0", suffix: "", label: "Manual Input Errors" }
      ]
    },
    useCases: {
      title: "Perfect for dynamic service environments",
      subtitle: "Deployments",
      useCases: [
        { title: "Bustling Beer Gardens", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Multi-Floor Restaurants", imageSrc: "/Ultra-premium_fine_dining_restaurant_interior_202606111239.jpeg" },
        { title: "Hotel Poolside & Room Service", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_architectural_photography_202606091300.jpeg" }
      ]
    },
    analytics: {
      title: "Complete visibility of floor performance",
      subtitle: "Floor Analytics",
      description: "Track server sales velocity, average tip percentages, table turnaround statistics, and order-to-table delivery speed in real-time.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "How a 300-seat patio unlocked 20% faster turnover",
      subtitle: "Success Story",
      quote: "Before using the SELFX Mobile APP, servers were constantly walking back and forth to the POS. Bringing ordering tableside helped us turn tables 20% faster, and tips shot up by 15%.",
      author: "David Martinez",
      role: "General Manager, El Camino Cantina",
      challenge: "Long walk distances between the outdoor patio and central terminals delayed orders and caused food to get cold before reaching the tables.",
      solution: "Equipped all waitstaff with the SELFX Mobile APP, enabling immediate tableside order entry and belt-printer payment receipts.",
      results: ["20% faster table turns", "15% increase in tips", "Zero walking distance lag"]
    },
    faqs: [
      { q: "What devices can run the Mobile User APP?", a: "The app runs on standard iPads, iPhones, and Android tablets, and is fully optimized for rugged enterprise handhelds (such as Sunmi, PAX, or Zebra terminals) with built-in printers and card slots." },
      { q: "Does the app support printing receipts at the table?", a: "Yes. The app can sync via Bluetooth or Wi-Fi to mobile belt-printers or terminal printers, letting servers print checks and payment proofs directly at the table." },
      { q: "Can servers split checks directly on the handheld screen?", a: "Absolutely. Checks can be split evenly by number of guests, or split by individual seat items, with separate payments processed for each portion." },
      { q: "How does the app handle internet connectivity drops?", a: "The app communicates directly over the local network (LAN) to your local POS server or local database, meaning service is unaffected even if external internet goes down." },
      { q: "Is it integrated with the Kitchen Display System (KDS)?", a: "Yes. When an order is pushed, it instantly appears on the KDS screens in the kitchen, organized by category, with timer countdowns started immediately." },
      { q: "Can managers approve voids and discounts from their own mobile app?", a: "Yes. Managers can input their PIN or scan an authorization card directly on a server's screen to unlock manager-level actions like voids, discounts, or refunds." },
      { q: "Does the app support barcode scanning for retail items?", a: "Yes, it can utilize the device's built-in camera or integrated hardware barcode scanners to quickly scan and add retail items to the checkout cart." },
      { q: "What is the battery consumption rate of the app?", a: "The app is optimized for enterprise use, featuring low-battery backgrounds. A single charge on a standard device will easily power through a full 10-hour shift." }
    ],
    cta: {
      title: "Mobilize your service staff today.",
      subtitle: "Equip your team with the mobile tools needed to deliver outstanding hospitality at scale."
    }
  },
  "product-kitchen-system": {
    productName: "Kitchen System",
    hero: {
      headline: "The Command Center of Your Back of House",
      description: "Automate order routing, coordinate cooking times, and streamline prep workflows across all kitchen stations.",
      imageSrc: "/selfx kitchen.png",
      highlights: ["Intelligent Order Routing", "Dynamic Prep Pacing", "Allergy & Modifier Alerts"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The chaos of paper-driven prep stations",
      subtitle: "Kitchen Friction",
      imageSrc: "/selfox-mobile-kitchen-display.jpg",
      challenges: [
        { title: "Lost or Damaged Tickets", description: "Paper tickets easily get lost, grease-stained, or misplaced in high-heat, fast-paced kitchen environments, causing missing orders and major delays." },
        { title: "Uncoordinated Cooking Times", description: "Appetizers, sides, and main courses prepared out of sequence result in hot food cooling on the counter while waiting for slower dishes to finish." },
        { title: "Prep Station Misfires", description: "Manual ticket sorting leads to dishes prepared at the wrong station or with custom allergy details completely overlooked, resulting in expensive recooks." },
        { title: "Zero Kitchen Analytics", description: "Without digital records, it is impossible to track station bottlenecks, average prep times, or individual cook speeds to improve operational throughput." }
      ]
    },
    workflow: {
      title: "Harmonized kitchen throughput in 4 steps",
      subtitle: "The Kitchen Flow",
      steps: [
        { title: "Automated Ticket Ingestion", description: "POS, kiosks, and online orders enter the kitchen system and are instantly parsed by item category and prep station requirements." },
        { title: "Intelligent Prep Routing", description: "Items route automatically to designated stations (e.g. grill, sauté, pantry, bar) based on customizable kitchen layout templates." },
        { title: "Coordinated Prep Pacing", description: "The system sequences cook starts dynamically so all elements of a single table order finish cooking at the exact same moment." },
        { title: "Fulfillment & Bump", description: "Station cooks bump completed items, notifying the pass coordinator who bags the complete order for waitstaff or courier delivery." }
      ]
    },
    features: {
      title: "Built to keep prep lines moving",
      subtitle: "Core Capabilities",
      features: [
        { icon: "ChefHat", title: "Category Routing", description: "Direct specific dishes to grill, pantry, or dessert KDS screens automatically, keeping station cooks highly focused." },
        { icon: "Layout", title: "Split-Screen Display", description: "Toggle between grid views, summary prep checklists, and individual ticket item detail view options in one click." },
        { icon: "Hourglass", title: "Paced Prep Sequence", description: "Align cooking times so main courses and sides finish at the same time, preventing dishes from cooling on the pass." },
        { icon: "AlertCircle", title: "High-Visibility Allergies", description: "Flashing, color-coded warning banners draw immediate attention to critical allergen notes and custom modifications." },
        { icon: "Shuffle", title: "Load Balancing", description: "Distribute incoming orders evenly across active prep lines when station ticket count limits are exceeded." },
        { icon: "History", title: "Recall Drawer", description: "Instantly retrieve and restore accidentally bumped tickets back to the active prep board without restarting." },
        { icon: "TrendingUp", title: "Live Prep Analytics", description: "Track average prep times, ticket queues, and individual cook speeds minute-by-minute on manager dashboards." },
        { icon: "HardDrive", title: "Ruggedized Design", description: "Optimized to run on high-nit, moisture-resistant touchscreen hardware built to withstand grease, heat, and steam." }
      ]
    },
    impact: {
      title: "A calmer, faster back of house",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "-30%", suffix: "", label: "Average Prep Time" },
        { value: "+25%", suffix: "", label: "Kitchen Capacity" },
        { value: "0", suffix: "", label: "Lost Prep Tickets" },
        { value: "-15%", suffix: "", label: "Food Waste Costs" }
      ]
    },
    useCases: {
      title: "Scalable prep control across sectors",
      subtitle: "Deployments",
      useCases: [
        { title: "High-Volume Food Courts", imageSrc: "/foodcourt.png" },
        { title: "Ghost Kitchen Hubs", imageSrc: "/restuarent.png" },
        { title: "Fine Dining Kitchens", imageSrc: "/Ultra-premium_fine_dining_restaurant_interior_202606111239.jpeg" }
      ]
    },
    analytics: {
      title: "Complete oversight of prep operations",
      subtitle: "Kitchen Analytics",
      description: "Analyze cook throughput, station bottlenecks, hourly ticket volumes, and average prep delays to optimize staffing schedules.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Halving ticket wait times in a high-volume venue",
      subtitle: "Success Story",
      quote: "The Kitchen System brought absolute order to our prep line. We eliminated paper ticket errors completely, and ticket preparation speed increased by 30% during our busiest dinner rush.",
      author: "Chef Marcus Vance",
      role: "Executive Chef, The Foundry Restaurant",
      challenge: "Lost paper tickets and uncoordinated cooking times led to food cooling on the pass and long diner wait times.",
      solution: "Deployed the SELFX Kitchen System with color-coded KDS screens at grill, pantry, and dessert stations.",
      results: ["30% reduction in ticket time", "Zero lost tickets", "15% food waste reduction"]
    },
    faqs: [
      { q: "What type of screens does the Kitchen System require?", a: "The system is compatible with standard Android and iOS tablets, but we recommend our commercial-grade, IP65-rated touchscreens with solid metal casings designed to withstand kitchen heat and grease." },
      { q: "Can the system handle complex menu modifications and allergies?", a: "Yes. Custom notes, modifiers, and allergy tags input on the POS or kiosk are highlighted with red warning borders and bold text directly on the prep screen." },
      { q: "How are order tickets sent to the Kitchen System?", a: "Orders are pushed automatically from the POS Cloud Software, online ordering platforms, WhatsApp orders, and self-service kiosks, bypassing the need for manual entries." },
      { q: "Does it support custom prep-time alert colors?", a: "Yes. You can define target prep times for each item. Tickets turn from green, to warning yellow, and finally overdue flashing red if they stay active past thresholds." },
      { q: "Is there a way to recall an order that was bumped by mistake?", a: "Absolutely. The system features a 'Recall' tab that retains recently bumped tickets, allowing cooks to restore them to the active preparation board instantly." },
      { q: "Can we connect physical bump bars to control screens?", a: "Yes. Our software integrates natively with standard commercial USB and Bluetooth bump bars, enabling cooks wearing gloves to navigate tickets without touching the screens." },
      { q: "What happens if one prep station becomes overloaded?", a: "Managers can access the control screen to manually re-route overflow tickets to secondary stations, ensuring balanced production across the kitchen." },
      { q: "Does it function offline during network outages?", a: "Yes. The Kitchen System runs on a Local Area Network (LAN). It will continue routing and sync tickets between POS terminals and prep stations even if the external internet drops." }
    ],
    cta: {
      title: "Take control of your kitchen workflow.",
      subtitle: "Upgrade to the digital prep ecosystem built to keep high-volume back of houses synchronized."
    }
  },
  "product-kiosk-app": {
    productName: "Self-Ordering Kiosk APP",
    hero: {
      headline: "Automate Ordering. Accelerate Revenue.",
      description: "Empower your guests to order and pay at their own pace. Drive bigger ticket sizes with smart upsells and eliminate queue wait times completely.",
      imageSrc: "/selfx.kiosk.png",
      highlights: ["Average Check Size +22%", "99.9% Order Accuracy", "Queue Congestion Eliminated"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The operational cost of checkout bottlenecks",
      subtitle: "Front of House Friction",
      imageSrc: "/selfpos.png",
      challenges: [
        { title: "Dreaded Order Lines", description: "Customers leave when they see long checkout lines during peak lunch and dinner hours, directly reducing your daily sales potential." },
        { title: "Inconsistent Staff Upselling", description: "Cashiers under rush pressure frequently forget to prompt customers for upgrades, premium sides, drink pairings, or loyalty enrollments." },
        { title: "Expensive Ticket Errors", description: "Noisy lobby environments and hurried inputs lead to cashiers mishearing orders, causing food waste, high refunds, and customer disputes." },
        { title: "High Labor Overhead", description: "Allocating multiple employees to run static cash registers limits your ability to deploy staff to production, cleaning, or table hospitality." }
      ]
    },
    workflow: {
      title: "Seamless self-service in 4 steps",
      subtitle: "The Kiosk Flow",
      steps: [
        { title: "Scan or Tap Menu", description: "Guest approaches the kiosk and taps the high-contrast screen to open the interactive digital menu catalog." },
        { title: "AI-Powered Customization", description: "The guest customizes their meal (toppings, sides, prep) with smart pairings and promotions prompted dynamically on screen." },
        { title: "Contactless Checkout", description: "Pay securely via integrated card terminals, Apple Pay, Google Pay, or QR code mobile wallets." },
        { title: "Direct Ticket Routing", description: "The order routes immediately to the KDS, and the kiosk prints a receipt showing their custom pickup ticket number." }
      ]
    },
    features: {
      title: "Designed for high-speed lobby performance",
      subtitle: "Core Capabilities",
      features: [
        { icon: "Sliders", title: "Visual Customizer", description: "Highly visual ingredient selector prompts guests to easily add toppings, choose sizes, and customize meals." },
        { icon: "Sparkles", title: "Upsell Engine", description: "Smart AI recommendations suggest pairing items and upgrades based on real-time checkout basket behaviors." },
        { icon: "Clock", title: "Queue Busting", description: "Drives higher transaction capacity by letting multiple kiosks absorb peak front-of-house customer traffic." },
        { icon: "CreditCard", title: "Integrated EMV Pay", description: "Native card reader integrations support chip, pin, tap, and mobile wallets with sub-second approvals." },
        { icon: "Languages", title: "Multi-Language Support", description: "Instantly translate menus into multiple languages to assist international guests and reduce order confusion." },
        { icon: "Activity", title: "Live Out-of-Stock Sync", description: "Menu items instantly turn grey and display as sold-out if ingredient inventory levels deplete on the master POS." },
        { icon: "FileText", title: "Thermal Receipt Sync", description: "Prints queue numbers, order summaries, tax details, and payment records on heavy-duty thermal printers." },
        { icon: "HeartHandshake", title: "Loyalty Phone Entry", description: "Guests input their phone number to automatically redeem points, view order history, and apply rewards." }
      ]
    },
    impact: {
      title: "Proven revenue and throughput gains",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "+22%", suffix: "", label: "Average Check Size" },
        { value: "-45%", suffix: "", label: "Queue Wait Times" },
        { value: "100%", suffix: "", label: "Order Input Accuracy" },
        { value: "-30%", suffix: "", label: "Front of House Labor" }
      ]
    },
    useCases: {
      title: "Versatile self-service across venues",
      subtitle: "Deployments",
      useCases: [
        { title: "Quick Service Restaurants", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Airport Dining Hubs", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_architectural_photography_202606091300.jpeg" },
        { title: "University Cafeterias", imageSrc: "/foodcourt.png" }
      ]
    },
    analytics: {
      title: "Optimize checkout conversion rates",
      subtitle: "Checkout Analytics",
      description: "Track menu click-through rates, top-performing upsell prompts, kiosk transaction counts, and checkout times to refine the customer flow.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Unlocking 22% higher check sizes with self-service",
      subtitle: "Success Story",
      quote: "Deploying SELFX Kiosks was a game-changer. Customers loved customizing their orders, and our average transaction size increased by 22% overnight. Lines at the counter completely vanished.",
      author: "Elena Rostova",
      role: "Owner, Bocado Burritos",
      challenge: "Long lines during the lunch rush caused customer walkouts, and registers struggled to up-sell menu items consistently.",
      solution: "Installed three SELFX Self-Ordering Kiosks in the lobby, integrated directly with the POS and Kitchen Systems.",
      results: ["22% higher check sizes", "Queue times down 45%", "100% order accuracy"]
    },
    faqs: [
      { q: "What hardware formats do the kiosks support?", a: "Our kiosk software supports countertop stands, wall mounts, and free-standing double-sided pedestals, allowing layouts matching your lobby space." },
      { q: "Does the kiosk software sync menu changes instantly?", a: "Yes. When you update pricing or disable items on the POS Cloud, the changes reflect on all kiosk screens instantly." },
      { q: "Can customers redeem loyalty points on the kiosk?", a: "Yes. Customers can input their phone number or scan a digital loyalty card to pull up their points and apply rewards during customization." },
      { q: "Does the kiosk accept cash payments?", a: "Our standard kiosks are card-only, but we support integrations with advanced cash recycling modules for cash-accepting self-service stations." },
      { q: "Is the kiosk interface easy to navigate for elderly users?", a: "Yes, we designed the Kiosk app with large, high-contrast buttons, simple progress indicators, and intuitive layouts that anyone can use easily." },
      { q: "Can we customize the branding and colors of the kiosk UI?", a: "Absolutely. You can customize fonts, logo placement, highlight colors, backgrounds, and upsell banners directly from the central dashboard." },
      { q: "How are sold-out items handled on the screen?", a: "If an item goes out of stock in the POS, it is immediately greyed out and marked 'Sold Out' on the kiosk, preventing guest disappointment." },
      { q: "What security measures are built into the payment kiosk?", a: "The system is fully PCI-DSS Level 1 compliant. Card data is tokenized immediately at the hardware reader and never stored locally or transmitted in plain text." }
    ],
    cta: {
      title: "Revolutionize your checkout lanes.",
      subtitle: "Deploy SELFX Self-Ordering Kiosks to drive check sizes and optimize staff allocations."
    }
  },
  "product-online-ordering": {
    productName: "Online Restaurant Ordering",
    hero: {
      headline: "Take Back Control of Your Digital Sales",
      description: "Launch your own branded web and mobile ordering platform. Accept commission-free pickup, delivery, and catering orders directly on your POS.",
      imageSrc: "/ordering.png",
      highlights: ["0% Third-Party Commissions", "Direct Customer Relationships", "Native Delivery Dispatch"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The margin drain of third-party delivery apps",
      subtitle: "Digital Sales Friction",
      imageSrc: "/selfox-mobile-delivry-app.jpg",
      challenges: [
        { title: "Crushing Commission Fees", description: "Aggregators take up to 30% of every transaction, eroding restaurant margins and making digital sales virtually unprofitable." },
        { title: "Siloed Guest Database", description: "Third-party marketplaces keep your customer emails, phone numbers, and dining history, preventing direct marketing campaigns." },
        { title: "Clunky Order Re-keying", description: "Manually typing online orders from multiple third-party tablets into your POS causes errors, kitchen delays, and labor waste." },
        { title: "Unreliable Delivery Dispatch", description: "Depending on erratic marketplace couriers leads to cold food, late deliveries, and negative customer reviews." }
      ]
    },
    workflow: {
      title: "Maximize online sales in 4 simple steps",
      subtitle: "The Ordering Flow",
      steps: [
        { title: "Launch Custom Portal", description: "Launch your custom-branded online menu on your website. No coding required. Styled to match your brand." },
        { title: "Customer Places Order", description: "Guests browse the visual menu, customize items, and pay securely via Apple Pay, Google Pay, or credit card." },
        { title: "Direct POS Ingestion", description: "Orders flow directly to your kitchen KDS. No tablet re-keying or manual steps required, ensuring speed." },
        { title: "Automated Courier Call", description: "Your local delivery drivers or integrated on-demand courier networks are called automatically to dispatch the food." }
      ]
    },
    features: {
      title: "Built to scale your digital presence",
      subtitle: "Core Capabilities",
      features: [
        { icon: "Laptop", title: "Custom Branded Web Portal", description: "Deliver a premium, responsive checkout portal styled to match your restaurant's exact fonts, colors, and logos." },
        { icon: "BadgePercent", title: "Commission-Free Checkout", description: "Keep 100% of your digital sales, bypassing heavy marketplace fees to boost bottom-line revenue." },
        { icon: "Route", title: "Smart Delivery Zones", description: "Define polygon boundary zones and custom delivery fees based on exact driving distances or geofenced parameters." },
        { icon: "Mail", title: "Integrated CRM", description: "Capture client contact details and ordering habits, and automate promotional SMS or email loyalty flows." },
        { icon: "QrCode", title: "QR Scan-To-Order Sync", description: "Supports pre-ordering for quick in-store pickup, curbside collection, or scheduled catering orders." },
        { icon: "Map", title: "On-Demand Courier Dispatch", description: "Auto-call local courier networks like DoorDash Drive or Uber Direct for deliveries when your drivers are busy." },
        { icon: "Settings", title: "Central Menu Control", description: "Sync menu additions, modifiers, descriptions, and pricing from your POS database instantly in one click." },
        { icon: "Zap", title: "Visual Order Tracker", description: "Guests receive real-time, automated SMS updates tracking their order status from preparation to courier hand-off." }
      ]
    },
    impact: {
      title: "Increase profitability and customer retention",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "0%", suffix: "", label: "Commission Fees Paid" },
        { value: "+28%", suffix: "", label: "Digital Order Margin" },
        { value: "+35%", suffix: "", label: "Customer Re-order Rate" },
        { value: "-5m", suffix: "", label: "Kitchen Processing Time" }
      ]
    },
    useCases: {
      title: "Optimized digital sales across sectors",
      subtitle: "Deployments",
      useCases: [
        { title: "Local Restaurant Groups", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "National Pizza Chains", imageSrc: "/restuarent.png" },
        { title: "Corporate Catering Services", imageSrc: "/foodcourt.png" }
      ]
    },
    analytics: {
      title: "Track digital acquisition costs",
      subtitle: "Web Analytics",
      description: "Monitor cart abandonment rates, traffic sources, average digital basket values, and delivery performance stats on one screen.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Saving $8,000 monthly in commissions with direct sales",
      subtitle: "Success Story",
      quote: "Relying on delivery apps was killing our profitability. Launching SELFX Online Ordering let us build a database of 5,000 guests, increase repeat visits, and save over $8,000 in monthly commissions.",
      author: "Robert Vance",
      role: "Owner, Primo Pizza Group",
      challenge: "High marketplace fees ate all profit margins, and there was no way to contact guests directly to run promotions.",
      solution: "Implemented SELFX Online Restaurant Ordering on the brand website, offering curbside pickup and native delivery dispatch.",
      results: ["Saved $8k+ monthly", "35% repeat purchase increase", "Zero commission fees"]
    },
    faqs: [
      { q: "How much does the online ordering system cost?", a: "Unlike marketplaces, we charge a flat monthly subscription with zero commission fees on your sales. You only pay standard merchant processor transaction fees." },
      { q: "Can I use my own domain name for the ordering portal?", a: "Yes, you can configure the ordering web portal to run on your custom subdomain (e.g. order.myrestaurant.com) to maintain branding." },
      { q: "How do deliveries get dispatched if I don't have my own drivers?", a: "Our software integrates natively with on-demand delivery services (like DoorDash Drive). When an order is placed, a courier is called automatically to deliver it." },
      { q: "Does it support advanced group orders and catering?", a: "Yes, users can generate group cart links for corporate teams to add items, or pre-schedule large catering orders days in advance with custom deposit settings." },
      { q: "How are credit card payments processed?", a: "We integrate with leading payment gateways like Stripe and Adyen. Funds go directly into your merchant bank account, bypassing aggregator middle steps." },
      { q: "Does the system integrate with Facebook and Google Ads?", a: "Yes, we support tracking pixels (Meta Pixel, Google Analytics 4) to let you measure campaign conversions, return on ad spend, and user pathways." },
      { q: "Can I customize the menu layout and photo assets?", a: "Absolutely. You can upload high-resolution photos, add item descriptions, categorize items, and arrange custom layouts easily on the dashboard." },
      { q: "How do online orders reach my kitchen staff?", a: "They ingest directly into the POS Cloud. From there, they print on prep-station printers or appear on KDS screens based on your category routing rules." }
    ],
    cta: {
      title: "Launch your direct sales channel.",
      subtitle: "Ditch marketplace commission fees. Deploy SELFX Online Ordering to build customer loyalty and increase margins."
    }
  },
  "product-digital-dining": {
    productName: "Digital Dining",
    hero: {
      headline: "The Table is the Register",
      description: "Let guests scan table-specific QR codes to browse menus, order together in real-time, and split checks instantly from their own devices.",
      imageSrc: "/table qr.png",
      highlights: ["Scan-to-Order in Safari/Chrome", "Live Multi-Seat Cart Sync", "Split-Bill tableside checkout"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The labor bottlenecks of traditional tableside service",
      subtitle: "In-Store Friction",
      imageSrc: "/qr-menu.png",
      challenges: [
        { title: "Slow Order Sequences", description: "Guests waiting for servers to fetch menus, log orders, and return with drinks can take up to 20 minutes, reducing customer satisfaction and seating capacity." },
        { title: "Complex Bill Splitting", description: "Calculating separate bills for large parties at the end of a meal creates server stress and backs up front-of-house register checkout lines." },
        { title: "Menu Printing Overhead", description: "Constantly reprinting paper menus to adjust pricing, remove sold-out dishes, or display daily specials is expensive, time-consuming, and wasteful." },
        { title: "FOH Staffing Shortages", description: "Struggling to hire or retain front-of-house service staff directly impacts table speed, order capacities, and restaurant sales." }
      ]
    },
    workflow: {
      title: "Contactless guest experience in 4 simple steps",
      subtitle: "The Dining Flow",
      steps: [
        { title: "Scan Table QR Code", description: "Guests scan the unique table-specific QR code using their smartphone camera. No app download or account creation required." },
        { title: "Shared Table Cart", description: "Guests at the same table join a shared digital cart, adding food and drinks and seeing updates in real-time." },
        { title: "Direct Kitchen Routing", description: "Once submitted, orders route directly to KDS screens with exact table, seat allocations, and custom modifications." },
        { title: "Instant Split-Bill Pay", description: "Guests split the bill by item or equal portions, paying securely with Apple Pay, Google Pay, or credit cards in seconds." }
      ]
    },
    features: {
      title: "Equipped for modern hospitality operations",
      subtitle: "Core Capabilities",
      features: [
        { icon: "QrCode", title: "App-Free Ordering", description: "Menus open instantly in any standard mobile browser (Safari, Chrome) via a secure QR code scan." },
        { icon: "Users", title: "Multi-User Cart Sync", description: "Allows entire table groups to add items to a single checkout basket simultaneously, updating order tallies in real-time." },
        { icon: "CreditCard", title: "Instant Mobile Checkout", description: "Integrated Apple Pay, Google Pay, and credit card portals for friction-free tableside settle." },
        { icon: "RotateCcw", title: "Frictionless Bill Split", description: "Guests divide checks by seat, specific item, or equal split percentages directly on their mobile phones." },
        { icon: "BadgeAlert", title: "Allergy Alert Sync", description: "Guests flag allergies during checkout, auto-highlighting warning blocks on the kitchen KDS for cook safety." },
        { icon: "HeartHandshake", title: "Server Calling Link", description: "Guests tap a digital button on screen to call a server or request physical water glasses and cutlery." },
        { icon: "Sliders", title: "Dynamic Pricing Matrix", description: "Auto-adjusts menu prices based on time, day, or promotional happy hours managed from your POS backend." },
        { icon: "Sparkles", title: "AI Dessert Prompter", description: "Prompts guests to add desserts, digestifs, or coffee when dinner plates are bumped from the KDS." }
      ]
    },
    impact: {
      title: "Unlock table capacity and staff productivity",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "+18%", suffix: "", label: "Table Turn Velocity" },
        { value: "+15%", suffix: "", label: "Average Server Tips" },
        { value: "-15m", suffix: "", label: "Wait Time Per Table" },
        { value: "-40%", suffix: "", label: "FOH Staff Strain" }
      ]
    },
    useCases: {
      title: "Deploy QR dining across hospitality concepts",
      subtitle: "Deployments",
      useCases: [
        { title: "Busy Casual Dining", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Large Beer Patios & Bars", imageSrc: "/bar.png" },
        { title: "Hotel Room Service", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_architectural_photography_202606091300.jpeg" }
      ]
    },
    analytics: {
      title: "Oversight of tableside behaviors",
      subtitle: "Floor Analytics",
      description: "Track average order value by table, peak scan hours, billing durations, and popular side modifications on one portal.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "How a beachside grill saved 15 minutes per table turn",
      subtitle: "Success Story",
      quote: "Guests love the convenience of scanning the QR code and ordering rounds of drinks instantly. We turned tables 18% faster, and servers took home 15% more tips because they could focus on hospitality.",
      author: "Claire Montgomery",
      role: "Managing Partner, Sunset Grill",
      challenge: "High summer volume caused huge order bottlenecks, and servers were too slow taking checkouts and drink orders.",
      solution: "Placed unique QR ordering cards on all patio tables, linked directly to the kitchen and bar printers.",
      results: ["15m saved per table", "15% tip increases", "18% faster table turn rates"]
    },
    faqs: [
      { q: "Do customers need to download an app to order?", a: "No, the digital dining menu opens instantly in standard mobile browsers like Safari or Chrome. Guests scan the QR code and are ready to browse." },
      { q: "How does the kitchen know which table placed the order?", a: "Each QR code is geolocated to a specific table number in your restaurant. When an order is placed, the KDS displays the exact table ID automatically." },
      { q: "Can guests order rounds of drinks throughout the night?", a: "Yes. Guests can keep their tab open, allowing them to order rounds of drinks or add courses. Orders sync to the same ticket and kitchen station." },
      { q: "Does it support cash payments?", a: "Guests can select 'Pay with Cash' on their phones, which prompts the server to bring cash change, though most choose mobile card checkout." },
      { q: "Can we split the bill by item?", a: "Absolutely. The checkout screen lets guests select only the items they ordered, splitting the remaining shared drinks or appetizers evenly." },
      { q: "What if a guest wants to order through a server instead?", a: "Digital Dining is designed to complement your service. Servers can still take orders on handheld POS terminals or input them at stationary terminals." },
      { q: "Can I customize the menu interface to match my branding?", a: "Yes. You can upload custom background banners, configure typography styles, highlight buttons with brand colors, and add dish photography." },
      { q: "How secure is the payment process?", a: "Payments are processed through PCI-compliant gateways with 3D Secure verification. No card details are ever stored on our servers or your POS." }
    ],
    cta: {
      title: "Transform your tableside service.",
      subtitle: "Give guests total control. Deploy SELFX Digital Dining to speed up checkouts and maximize table throughput."
    }
  },
  "product-kds": {
    productName: "Kitchen Display System (KDS)",
    hero: {
      headline: "Ditch Paper. Accelerate Preparation.",
      description: "Replace mechanical printers with color-coded, interactive KDS monitors. Sync front-of-house status and bump tickets in a single tap.",
      imageSrc: "/kitchen-display.png",
      highlights: ["Color-Coded Timers", "LAN Offline Operations", "Bump-Bar Integrations"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The speed and accuracy constraints of paper printers",
      subtitle: "Kitchen Friction",
      imageSrc: "/selfox-mobile-kitchen-display.jpg",
      challenges: [
        { title: "Lost & Stained Tickets", description: "Paper tickets easily drop behind counters, get splashed with water, or catch fire in hot, noisy kitchens, leading to major prep errors." },
        { title: "No Color Pacing Alerts", description: "Paper slips cannot change colors to notify busy cooks that a table has been waiting 15+ minutes, causing uneven check times." },
        { title: "Manual Ticket Rail Sorting", description: "Cooks spend precious time rearranging paper tickets on rails during peak rushes rather than preparing food, leading to production blockages." },
        { title: "Blind Front of House", description: "Waitstaff have no digital visibility into food preparation progress, resulting in constant interruptions at the kitchen pass asking for status." }
      ]
    },
    workflow: {
      title: "Interactive prep execution in 4 steps",
      subtitle: "The KDS Flow",
      steps: [
        { title: "Order Routed to Screen", description: "Orders placed on POS terminals, kiosks, or online portals appear instantly on designated prep station monitors." },
        { title: "Pace Alerts Trigger", description: "Incoming ticket headers start green, transitioning to warning yellow, and finally overdue flashing red as they approach wait time thresholds." },
        { title: "Single-Tap Bump", description: "Once the prep station cook finishes the items, they tap the screen or hit a physical bump bar button to clear the ticket." },
        { title: "FOH Status Update", description: "The POS, order pickup boards, and mobile servers' screens show the ticket status as 'Ready', triggering immediate delivery." }
      ]
    },
    features: {
      title: "Built to orchestrate complex kitchen prep",
      subtitle: "Core Capabilities",
      features: [
        { icon: "Monitor", title: "High-Visibility Screens", description: "Large, high-contrast digital layouts designed to be readable from across a hot and busy kitchen line." },
        { icon: "Clock", title: "Color-Coded Timers", description: "Alert kitchen staff by changing ticket headers from green, to warning yellow, and finally to flashing red based on wait limits." },
        { icon: "Settings", title: "Custom Station Layouts", description: "Configure screens specifically for Expo, Grill, Sauté, Prep, or Bar views, showing only relevant items." },
        { icon: "CheckSquare", title: "Interactive Bumping", description: "Mark individual items or complete tickets as finished with a simple tap or robust physical bump bar." },
        { icon: "Grid", title: "Item Summary Views", description: "Consolidates cooking quantities (e.g. '12x Cheeseburgers', '6x Fries') so cooks know total volumes needed at a glance." },
        { icon: "AlertTriangle", title: "Modification Banners", description: "Displays allergen information and custom ingredient modifications in prominent, blinking high-contrast panels." },
        { icon: "Layers", title: "Multi-Channel Sync", description: "Unifies order tickets from POS registers, table QRs, self-service kiosks, and web orders onto one cohesive screen." },
        { icon: "WifiOff", title: "LAN Database Failover", description: "Syncs tickets over your local router network, maintaining screen communications even if external internet drops." }
      ]
    },
    impact: {
      title: "Unlock kitchen speed and coordination",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "-25%", suffix: "", label: "Average Wait Times" },
        { value: "+30%", suffix: "", label: "Kitchen Output Capacity" },
        { value: "100%", suffix: "", label: "Order Ticket Accuracy" },
        { value: "0", suffix: "", label: "Paper Ticket Costs" }
      ]
    },
    useCases: {
      title: "Engineered for high-volume kitchen zones",
      subtitle: "Deployments",
      useCases: [
        { title: "Fast Casual Chains", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Busiest Bars & Pubs", imageSrc: "/bar.png" },
        { title: "Hospitality Food Courts", imageSrc: "/foodcourt.png" }
      ]
    },
    analytics: {
      title: "Audits of prep station speeds",
      subtitle: "Prep Analytics",
      description: "Track average ticket times, station loads, cook speeds, and bump frequencies on the analytics portal.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "How a franchise cut ticket prep times by 25%",
      subtitle: "Success Story",
      quote: "Replacing our noisy paper printers with color-coded KDS screens transformed the kitchen. Wait times dropped 25%, order errors went to zero, and we save thousands on paper rolls annually.",
      author: "Simon Fletcher",
      role: "Director of Operations, Burger Bistro",
      challenge: "Lost paper tickets during peak hours delayed orders, causing high refund rates and customer complaints.",
      solution: "Installed SELFX KDS screens at grill, assembly, and expo stations, connected to the central POS.",
      results: ["25% faster ticket prep", "Zero ticket print errors", "100% digital flow"]
    },
    faqs: [
      { q: "What size screens are supported by the KDS?", a: "Our software is highly responsive, supporting standard 10-inch tablets up to heavy-duty 22-inch and 32-inch kitchen monitors." },
      { q: "Can the KDS run on standard consumer tablets?", a: "Yes, it can run on standard iPads or Android tablets. However, for grease and heat resistance, we recommend our specialized high-nit commercial enclosures." },
      { q: "Does it support physical bump bars?", a: "Yes, the KDS integrates with standard commercial USB and Bluetooth bump bars, enabling cooks to navigate and bump orders using glove-friendly physical keys." },
      { q: "What happens if a cook bumps a ticket by mistake?", a: "The system contains a 'Recall' bin at the top of the layout. Tapping it displays recently bumped tickets, letting cooks restore them in one click." },
      { q: "Can we display cooking instructions or recipes on the screen?", a: "Yes. Tapping an item on the screen can open an overlay displaying the recipe, preparation steps, and plating diagrams to assist training staff." },
      { q: "How does the KDS handle order modifications?", a: "Custom modifiers (e.g. 'No Mayo', 'Extra Cheese') are highlighted in bold colored boxes, ensuring cooks see modifications immediately." },
      { q: "Can a single KDS display orders from multiple brands?", a: "Yes. For multi-concept food courts or ghost kitchens, the KDS can display tickets consolidated from multiple brand accounts on a single screen." },
      { q: "Does it work without an internet connection?", a: "Yes. The KDS communicates with the POS over the local area network (LAN). It will continue routing and syncing orders even during full internet outages." }
    ],
    cta: {
      title: "Ditch paper tickets today.",
      subtitle: "Transition your kitchen to a silent, color-coded digital display system built for speed and precision."
    }
  },
  "product-signage": {
    productName: "Digital Signage Engine",
    hero: {
      headline: "Dynamic Displays. Instant Influence.",
      description: "Turn standard screens into smart, high-impact digital menu boards. Sync menu pricing, schedule promotions, and drive upsells in real-time.",
      imageSrc: "/wallmount.png",
      highlights: ["Real-Time POS Menu Sync", "Automated Daypart Scheduling", "Dynamic Promotional Banners"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The friction of static and disconnected menu boards",
      subtitle: "Visual Friction",
      imageSrc: "/Modern_premium_takeaway_café_and_202606111244.jpeg",
      challenges: [
        { title: "Expensive Reprinting Costs", description: "Updating pricing, adding new dishes, or running seasonal food specials on physical menu boards incurs high print costs and days of delay." },
        { title: "Out-of-Sync Price Mismatches", description: "Mismatches between prices listed on static boards and prices rung up on registers lead to checkout disputes, billing friction, and customer complaints." },
        { title: "No Time-Based Scheduling", description: "Manually changing physical menu signs between breakfast, lunch, and dinner is cumbersome and limits daily promotion setups." },
        { title: "Dull Customer Engagement", description: "Static menu boards fail to capture guest attention in busy lobbies, missing opportunities to highlight high-margin sides or combo options." }
      ]
    },
    workflow: {
      title: "Dynamic visual management in 4 steps",
      subtitle: "The Signage Flow",
      steps: [
        { title: "Plug In Media Player", description: "Connect the small SELFX Signage Player to any standard HD or 4K commercial TV screen via HDMI connection." },
        { title: "Link POS Menu", description: "Link the signage layout to your POS database menu groups. Pricing updates populate instantly across all screens." },
        { title: "Schedule Daypart Flows", description: "Define dayparting times. The display shifts automatically from breakfast to lunch menus without manual screen resets." },
        { title: "Drive Active Sales", description: "Highlight seasonal specials, display live stock availability, and run targeted video animations to influence buyers." }
      ]
    },
    features: {
      title: "Designed for high-impact display coordination",
      subtitle: "Core Capabilities",
      features: [
        { icon: "Tv", title: "4K Hardware Player Sync", description: "Flicker-free playback supporting high-definition video, image slideshows, and dynamic text layouts." },
        { icon: "Zap", title: "POS Pricing Sync", description: "Menu prices on screen update automatically when changed on the master POS Cloud database in real-time." },
        { icon: "Calendar", title: "Automated Dayparting", description: "Schedule layouts to change automatically based on shift times, happy hours, or weekends to match customer demographics." },
        { icon: "DollarSign", title: "High-Margin Spotlights", description: "Highlight specific premium plates or high-margin meal combos with eye-catching animations and transitions." },
        { icon: "RefreshCw", title: "Instant Board Updates", description: "Push announcements, emergency allergy updates, or layout modifications in one click from your web console." },
        { icon: "PlayCircle", title: "Dynamic Video Embeds", description: "Embed high-definition videos showing steam, sizzling grills, or bubbling drinks to increase customer cravings." },
        { icon: "Monitor", title: "Multi-Screen Matrix", description: "Tile multiple screens together to form a seamless multi-panel digital menu board wall with split layout templates." },
        { icon: "LayoutTemplate", title: "Visual Layout Editor", description: "Drag-and-drop design templates make it easy to design menus, layouts, and promotional graphics." }
      ]
    },
    impact: {
      title: "Drive engagement and higher order sizes",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "+15%", suffix: "", label: "Promo Item Sales" },
        { value: "100%", suffix: "", label: "POS Price Accuracy" },
        { value: "0", suffix: "", label: "Menu Reprint Costs" },
        { value: "+20%", suffix: "", label: "Customer Engagement" }
      ]
    },
    useCases: {
      title: "Visual signage deployed globally",
      subtitle: "Deployments",
      useCases: [
        { title: "Quick Service Restaurants", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Boba & Cafe Counters", imageSrc: "/gallery-boba.png" },
        { title: "High-Traffic Food Courts", imageSrc: "/foodcourt.png" }
      ]
    },
    analytics: {
      title: "Oversight of digital screen loops",
      subtitle: "Screen Analytics",
      description: "Monitor screen runtimes, playlist updates, active campaign performances, and connection statuses on one console.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Boosting seasonal specials by 15% via smart boards",
      subtitle: "Success Story",
      quote: "Manually changing pricing was a nightmare. SELFX Digital Signage linked our menus directly to the POS. Our promotional item sales increased by 15% because we could run dynamic video ads during lunch.",
      author: "Samantha Cole",
      role: "Brand Manager, Boba House Group",
      challenge: "High printing costs and slow timelines made seasonal recipe promotions impractical and caused customer billing mismatches.",
      solution: "Deployed the SELFX Signage Engine on commercial displays across all cafe locations.",
      results: ["15% promo item increase", "Zero print costs", "Instant board synchronization"]
    },
    faqs: [
      { q: "What hardware is required to run the Digital Signage Engine?", a: "You only need the SELFX Signage Player (a small media device that plugs into your TV's HDMI port) and an active Wi-Fi or Ethernet connection." },
      { q: "Does the signage engine work with existing TVs?", a: "Yes, our player works with any standard TV or commercial display that has an HDMI input, supporting both 1080p and 4K resolutions." },
      { q: "Can I schedule different menus for breakfast and lunch?", a: "Absolutely. Our dayparting calendar lets you define exact hours for each menu group, updating the screens automatically." },
      { q: "What happens if the signage player loses WiFi connection?", a: "The player downloads your media content and layouts locally. If WiFi disconnects, the screens continue playing your menus offline without issues." },
      { q: "Does the pricing update automatically when changed on the POS?", a: "Yes, the signage integration links menu fields to your POS database. Any price edit on the POS updates on the screens in real-time." },
      { q: "Can I play videos and animations on the menu boards?", a: "Yes. The platform supports MP4 videos, HTML5 animations, and high-res images to create engaging, dynamic content loops." },
      { q: "Can I manage displays across multiple store branches?", a: "Yes. From the corporate web console, you can group screens by location, region, or screen type, updating content globally or locally." },
      { q: "Is there a library of pre-designed templates?", a: "Yes, we provide a library of templates for restaurants, cafes, food courts, and bars. You can customize them with your photos and items easily." }
    ],
    cta: {
      title: "Bring your menus to life.",
      subtitle: "Deploy SELFX Digital Signage Engine to automate pricing updates, schedule dayparts, and boost checkout sizes."
    }
  },
  "product-vending": {
    productName: "Smart Vending Machines",
    hero: {
      headline: "Unattended Retail. Unmatched Margins.",
      description: "Operate 24/7 with zero labor overhead. Deploy climate-controlled smart vending units and pickup lockers synced directly with your central inventory.",
      imageSrc: "/Ultra-realistic_premium_product_photography_of_202606091320.jpeg",
      highlights: ["24/7 Revenue Generation", "Climate-Controlled Storage", "Real-Time Telemetry Sync"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The constraints of static storefront hours and labor shortages",
      subtitle: "Retail Friction",
      imageSrc: "/selfx-kiosk.png",
      challenges: [
        { title: "High Labor Overhead", description: "Running staffed service counters during low-traffic late night or early morning hours creates high loss operations." },
        { title: "Physical Store Limits", description: "Hospitality brands are limited by brick-and-mortar walls, preventing expansion into high-traffic lobbies or office campuses." },
        { title: "Manual Telemetry Audits", description: "Struggling to monitor stock depletion levels in remote units results in empty machines, lost sales, or expired food." },
        { title: "Product Freshness Loss", description: "Storing perishable grab-and-go options in standard room-temperature vending machines causes rapid spoilage and waste." }
      ]
    },
    workflow: {
      title: "Unattended operations in 4 simple steps",
      subtitle: "The Vending Flow",
      steps: [
        { title: "Customer Selects Item", description: "Customer browses the visual menu catalog on the integrated touchscreen display or scans a QR code on their phone." },
        { title: "Secure Checkout", description: "The customer settles the bill using tap card, mobile wallets, or pre-paid corporate meal plan balances." },
        { title: "Automated Dispense", description: "The machine internal elevator or pickup locker door unlocks, safely dispensing the item to the collection bay." },
        { title: "Live Stock Telemetry", description: "Inventory depletion logs push automatically to the POS warehouse, scheduling optimal logistics refill routes." }
      ]
    },
    features: {
      title: "Engineered for automated grab-and-go retail",
      subtitle: "Core Capabilities",
      features: [
        { icon: "ShoppingBag", title: "Unattended Smart Retail", description: "Run fully automated outlets in lobbies, airports, and corporate tech parks with zero on-site staff." },
        { icon: "Thermometer", title: "Climate-Controlled Bays", description: "Heated, ambient, or refrigerated compartments keep fresh meals and beverages at safe, targeted temperatures." },
        { icon: "Activity", title: "Live Telemetry Control", description: "Track stock counts, internal temperatures, coin/bill vaults, and machine connection statuses remotely in real-time." },
        { icon: "ShieldCheck", title: "Dispense Verification", description: "Internal load cell sensors verify that items are fully dispensed before settling the checkout payment." },
        { icon: "Lock", title: "Pickup Lockers Integration", description: "Enables click-and-collect pickup bays where guests scan QR codes to retrieve warm online orders." },
        { icon: "RefreshCw", title: "Refill Route Generation", description: "Generates optimal restocking routes for logistics drivers based on real-time depletion logs." },
        { icon: "Compass", title: "Integrated Screen GUI", description: "Vibrant high-contrast touchscreen interface displays product images, ingredient details, and allergen flags." },
        { icon: "Database", title: "POS Inventory Sync", description: "Unifies vending product catalogs, pricing tiers, and promotions with your core enterprise POS warehouse." }
      ]
    },
    impact: {
      title: "Scale margins with automated retail",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "24/7", suffix: "", label: "Sales Capabilities" },
        { value: "0", suffix: "", label: "On-Site Staff Cost" },
        { value: "+30%", suffix: "", label: "Operating Profit Margin" },
        { value: "100%", suffix: "", label: "Inventory Accuracy" }
      ]
    },
    useCases: {
      title: "Expand your brand footprint anywhere",
      subtitle: "Deployments",
      useCases: [
        { title: "Corporate Lobbies", imageSrc: "/foodcourt.png" },
        { title: "University Hubs", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Healthcare Lounges", imageSrc: "/Ultra-realistic_cinematic_photography_of_healthcare_202606041252.jpeg" }
      ]
    },
    analytics: {
      title: "Live telemetry and performance audits",
      subtitle: "Telemetry Analytics",
      description: "Monitor live machine temperatures, inventory counts, cashier drops, and power consumption stats across all vending assets.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Generating $12,000 monthly with unattended retail",
      subtitle: "Success Story",
      quote: "Deploying SELFX Smart Vending machines allowed us to expand our fresh salad brand into corporate office lobbies with zero real-estate or staff costs. We generate over $12,000 in monthly sales per machine.",
      author: "Marcus Thorne",
      role: "Founder, Greens-To-Go",
      challenge: "High brick-and-mortar setup costs and restaurant labor shortages limited expansion plans into dense business parks.",
      solution: "Deployed five refrigerated SELFX Smart Vending Units in corporate building lobbies.",
      results: ["$12k monthly per unit", "Zero staff costs", "30% higher margins"]
    },
    faqs: [
      { q: "What power and network connections do the machines require?", a: "They require a standard 120V outlet and can connect via built-in Wi-Fi, hardwired Ethernet, or an optional cellular 5G module." },
      { q: "Can the machines be configured for both hot and cold items?", a: "Yes. We offer dedicated refrigerated units, heated snack lockers, or dual-zone machines that house cold and warm items in separate bays." },
      { q: "How does the system prevent item dispense failures?", a: "Our units use infrared lasers and internal weight sensors to detect if an item has dropped. If a drop fails, the machine attempts another coil or refunds the card." },
      { q: "Does it support student meal plans or corporate badges?", a: "Yes. We can integrate RFID/NFC readers to scan corporate ID badges, university student cards, and closed-loop meal vouchers." },
      { q: "How are restocking notifications sent to our warehouse team?", a: "When inventory drops below a preset threshold, the system auto-creates a restock order, outlining the exact quantities needed by the route driver." },
      { q: "Can the machines run outdoors?", a: "Our standard models are indoor-only, but we offer ruggedized IP65-rated enclosures with UV-shield glass and insulation for outdoor environments." },
      { q: "What payment methods are accepted?", a: "Our systems accept credit cards, debit cards, mobile wallets (Apple Pay, Google Pay), and can scan dynamic mobile app QR codes." },
      { q: "How are refunds handled if a checkout gets canceled?", a: "If the dispense fails or the user cancels the session, payment authorization is immediately released, resulting in zero card charges." }
    ],
    cta: {
      title: "Deploy automated retail today.",
      subtitle: "Enter new markets and generate 24/7 margins. Deploy SELFX Smart Vending Machines to expand your footprint."
    }
  },
  "product-whatsapp": {
    productName: "WhatsApp Ordering",
    hero: {
      headline: "Ordering. Just a Message Away.",
      description: "Let customers browse menus, customize meals, and complete checkouts directly inside WhatsApp. Elevate retention with AI chat loyalty.",
      imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_mobile-commerce_hero-banner_202606091253.jpeg",
      highlights: ["Conversational Commerce Flow", "No App Download Required", "Direct POS Order Ingestion"],
      primaryCtaText: "Book Demo",
      secondaryCtaText: "Explore Features"
    },
    challenge: {
      title: "The customer acquisition drop-offs of standalone apps",
      subtitle: "Ordering Friction",
      imageSrc: "/selfox-mobile-delivry-app.jpg",
      challenges: [
        { title: "App Install Resistance", description: "Customers hesitate to download storage-heavy applications just to place a simple quick-service takeaway or delivery order." },
        { title: "High Cart Abandonment", description: "Complex login forms, registration layouts, and password setups lead to high checkout drop-offs on mobile web menus." },
        { title: "No Re-engagement Channel", description: "Once guests buy, restaurants have no low-cost, high-open-rate channel to push menus, promotions, or weekly specials." },
        { title: "Manual Intake Inefficiencies", description: "Answering manual chat messages, notes, or phone calls to write down order details is slow and prone to preparation errors." }
      ]
    },
    workflow: {
      title: "Conversational commerce in 4 simple steps",
      subtitle: "The Chat Flow",
      steps: [
        { title: "Initiate Chat Session", description: "Customer clicks your website order link or scans a table QR code, opening a WhatsApp chat session automatically." },
        { title: "Browse Visual Menu", description: "The guest clicks to open the interactive, visual digital catalog directly inside the WhatsApp conversation window." },
        { title: "Secure Checkout Link", description: "The chatbot compiles the cart and generates a secure one-click checkout link confirming transaction details." },
        { title: "Instant Status Broadcast", description: "The POS routes the ticket to the kitchen, and WhatsApp broadcasts live status alerts back to the customer's phone." }
      ]
    },
    features: {
      title: "Designed for high-speed chat interactions",
      subtitle: "Core Capabilities",
      features: [
        { icon: "MessageSquare", title: "Chat-First Ordering", description: "Guests browse menus, customize items, and place checkout carts without leaving WhatsApp." },
        { icon: "Bot", title: "AI Chatbot Assistant", description: "Automated chatbot answers FAQs, handles ingredient exclusions, and updates customer records." },
        { icon: "ShoppingBag", title: "Interactive Visual Catalog", description: "Displays dynamic product categories, custom items, and visual dish portfolios within the chat." },
        { icon: "CreditCard", title: "One-Click Checkout", description: "Generates secure checkout page links supporting credit cards, Apple Pay, and Google Pay." },
        { icon: "Bell", title: "Live Status Broadcasts", description: "Sends automated text updates when orders are cooking, packaged, or out for courier delivery." },
        { icon: "RotateCcw", title: "One-Click Re-ordering", description: "Guests can instantly repeat their past order by typing a single keyword command (e.g. 'reorder') in the chat." },
        { icon: "Settings", title: "POS Sync Matrix", description: "WhatsApp menu options, pricing tiers, and out-of-stock items sync with your central POS database in real-time." },
        { icon: "HeartHandshake", title: "Loyalty Broadcast Campaigns", description: "Broadcast seasonal coupons, discount codes, and surveys directly to guest numbers with high-open rates." }
      ]
    },
    impact: {
      title: "Unlock massive customer re-orders",
      subtitle: "Verified Business Impact",
      metrics: [
        { value: "+35%", suffix: "", label: "Customer Re-orders" },
        { value: "90%+", suffix: "", label: "Message Open Rates" },
        { value: "0", suffix: "", label: "App Downloads Needed" },
        { value: "-25%", suffix: "", label: "Call Center Load" }
      ]
    },
    useCases: {
      title: "Powering chat sales across restaurant sectors",
      subtitle: "Deployments",
      useCases: [
        { title: "Busy Neighborhood Cafes", imageSrc: "/gallery-boba.png" },
        { title: "QSR Takeaway Joints", imageSrc: "/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" },
        { title: "Office Food Service", imageSrc: "/foodcourt.png" }
      ]
    },
    analytics: {
      title: "Oversight of chat conversions",
      subtitle: "Chat Analytics",
      description: "Monitor active chat sessions, conversion rates, re-order volumes, and average message response speeds from your portal.",
      imageSrc: "/pos-software.png"
    },
    success: {
      title: "Boosting checkout conversions by 35% via WhatsApp",
      subtitle: "Success Story",
      quote: "Customers did not want to install another restaurant app. Deploying WhatsApp Ordering let guests check out in seconds. Our repeat order rates increased by 35% using simple push messages.",
      author: "Leila Rahimi",
      role: "Brand Director, Wok & Roll",
      challenge: "High mobile web cart abandonment and zero customer re-engagement channels limited digital takeaway growth.",
      solution: "Deployed the SELFX WhatsApp Ordering chatbot linked to automated POS delivery tracking.",
      results: ["35% re-order increase", "90%+ campaign open rates", "Zero app installs required"]
    },
    faqs: [
      { q: "Do customers need to download a special app to order?", a: "No, customers only need standard WhatsApp installed on their phone. They click a link or scan a QR code to start ordering." },
      { q: "Can the WhatsApp bot handle complex customizations and allergy notes?", a: "Yes. The catalog allows customers to choose modifiers (e.g. 'Add Bacon', 'Extra Spicy') and type allergy notes, which flow directly into the kitchen." },
      { q: "What payment methods does WhatsApp Ordering support?", a: "The checkout link supports major credit cards, debit cards, Apple Pay, Google Pay, and localized bank transfer wallets." },
      { q: "Does the system send automated order status updates?", a: "Yes. When the kitchen bumps the ticket or the driver dispatches, WhatsApp sends automated messages like 'Your order is ready for pickup!'" },
      { q: "Can we use the database for promotional push notifications?", a: "Yes, you can broadcast menu changes, happy hour discounts, or holiday specials directly to users who have opted in." },
      { q: "Does the WhatsApp bot hand off to a human agent?", a: "Yes. If a guest asks a question the bot cannot resolve, the system flags the chat and notifies your staff to take over the conversation." },
      { q: "How does the order sync with our existing POS system?", a: "Orders ingest directly into your central POS Cloud Software, auto-routing prep tickets to KDS screens and printers without manual steps." },
      { q: "Is customer data secure?", a: "Absolutely. Conversations are secured via WhatsApp's API infrastructure. Payment checkouts are hosted on secure, PCI-compliant portals." }
    ],
    cta: {
      title: "Launch chat-based ordering.",
      subtitle: "Engage customers where they already spend their time. Deploy SELFX WhatsApp Ordering to drive re-orders and sales."
    }
  }
};
