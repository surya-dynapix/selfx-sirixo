import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import ProductPageClient from "@/components/ProductPageClient";
import { PRODUCT_DEFAULTS } from "@/lib/productData";

export default async function WhatsAppPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const productKey = "product-whatsapp";
  const content = await prisma.siteContent.findMany({
    where: { page: productKey }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <ProductPageClient productKey={productKey} defaultData={PRODUCT_DEFAULTS[productKey]} />
    </SiteContentProvider>
  );
}
