import { prisma } from "@/lib/prisma";
import HardwareClient from "./HardwareClient";

export const dynamic = "force-dynamic";

export default async function HardwarePage() {
  const products = await prisma.product.findMany();
  return <HardwareClient products={products} />;
}
