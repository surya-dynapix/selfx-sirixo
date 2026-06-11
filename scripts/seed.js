import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      id: "bundle-1",
      name: '15" Tablet POS Starter Bundle',
      price: 799,
      description: "Built-in Printer & QR Scanner | Plug & Play setup",
      image: "/selfx-kiosk.png",
      category: "Starter Bundle"
    },
    {
      id: "bundle-2",
      name: "Dual Data Screen POS Bundle",
      price: 1299,
      description: "Customer facing display | Heavy duty operations",
      image: "/Ultra-realistic_premium_product_photography_of_202606091839.jpeg",
      category: "Pro Bundle"
    },
    {
      id: "pos-15-tablet",
      name: '15" Tablet POS',
      price: 699,
      description: "Android Large-Memory POS reader",
      image: "/Ultra-realistic_premium_product_photography_of_202606091844.jpeg",
      category: "Top Rated"
    },
    {
      id: "pos-15-dual",
      name: '15.6" Dual Screen POS',
      price: 1199,
      description: "Advanced Dual Screen POS",
      image: "/Ultra-realistic_premium_product_photography_of_202606091847.jpeg",
      category: "Top Pick"
    },
    {
      id: "kiosk-k32",
      name: "K32 Premium Kiosk",
      price: 2799,
      description: "Premium 32-inch Floor Self Order Kiosk",
      image: "/selfx-kiosk.png",
      category: "Premium"
    },
    {
      id: "thermal-printer",
      name: "80mm Thermal Receipt Printer",
      price: 199.00,
      description: "High-speed auto-cutter receipt printer with USB, LAN, and Serial connectivity.",
      image: "/Ultra-realistic_premium_product_photography_of_202606091320.jpeg",
      category: "Accessories"
    },
    {
      id: "cash-drawer",
      name: "Heavy Duty Cash Drawer",
      price: 99.00,
      description: "RJ11/RJ12 connected cash drawer. Opens automatically on receipt print.",
      image: "/Ultra-realistic_premium_product_photography_of_202606111309.jpeg",
      category: "Accessories"
    },
    {
      id: "barcode-scanner",
      name: "2D Handheld Barcode Scanner",
      price: 149.00,
      description: "Reads 1D and 2D barcodes from paper and mobile phone screens instantly.",
      image: "/barcode scanner.png",
      category: "Accessories"
    },
    {
      id: "kiosk-stand",
      name: "Self-Order Kiosk Floor Stand",
      price: 299.00,
      description: "Commercial grade floor stand compatible with all 21.5\" and 32\" SelfX Kiosks.",
      image: "/selfx-kiosk.png",
      category: "Accessories"
    },
    {
      id: "rfid-reader",
      name: "Desktop RFID Card Reader",
      price: 89.00,
      description: "USB RFID reader for employee login cards and customer loyalty programs.",
      image: "/card reader.png",
      category: "Accessories"
    },
    {
      id: "kitchen-bumpbar",
      name: "KDS Bump Bar",
      price: 249.00,
      description: "Ruggedized aluminum bump bar for Kitchen Display Systems. IP65 rated.",
      image: "/bar.png",
      category: "Accessories"
    }
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { id: p.id },
      update: {},
      create: p,
    });
  }

  console.log("Database seeded with products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
