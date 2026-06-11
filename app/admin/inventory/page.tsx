import { prisma } from "@/lib/prisma";
import InventoryClient from "./InventoryClient";

export const dynamic = "force-dynamic";

export default async function InventoryPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <InventoryClient initialProducts={products} />;
}
