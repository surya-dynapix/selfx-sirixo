import { prisma } from "@/lib/prisma";
import ContentCMSClient from "./ContentCMSClient";

export default async function ContentCMSPage() {
  const content = await prisma.siteContent.findMany();

  return <ContentCMSClient initialContent={content} />;
}
