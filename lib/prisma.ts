import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Clear cache if the old client instance doesn't have the newest models
if (globalForPrisma.prisma && (!(globalForPrisma.prisma as any).product || !(globalForPrisma.prisma as any).post)) {
  delete (globalThis as any).prisma;
}

export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
