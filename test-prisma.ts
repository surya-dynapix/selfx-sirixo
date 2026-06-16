import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  console.log(Object.keys(prisma));
  if (prisma.siteContent) {
    console.log("siteContent exists!");
  } else {
    console.log("siteContent does not exist");
  }
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
