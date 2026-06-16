"use server";

import { prisma } from "@/lib/prisma";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;
  
  if (!email) {
    return { success: false, message: "Email is required." };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log(`[CRM Mock] Subscribed ${email} from ${country}`);
    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to subscribe." };
  }
}

export async function submitOrder(formData: FormData, cartItems: any[], totalCost: number) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;

  if (!name || !email || !phone || cartItems.length === 0) {
    return { success: false, message: "Missing required fields or empty cart." };
  }

  try {
    const order = await prisma.order.create({
      data: {
        name,
        email,
        phone,
        company,
        total: totalCost,
        items: {
          create: cartItems.map(item => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          }))
        }
      }
    });

    console.log(`[Database] Created Order ${order.id} for ${name}`);
    return { success: true, message: "Order submitted successfully!" };
  } catch (error) {
    console.error("Order submission error:", error);
    return { success: false, message: "Failed to submit order." };
  }
}

import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const image = formData.get("image") as string || "/selfx right.png";

    await prisma.product.create({
      data: { name, description, price, category, image }
    });
    revalidatePath("/admin/inventory");
    revalidatePath("/hardware");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function updateProduct(id: string, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const image = formData.get("image") as string || "/selfx right.png";

    await prisma.product.update({
      where: { id },
      data: { name, description, price, category, image }
    });
    revalidatePath("/admin/inventory");
    revalidatePath("/hardware");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: { id }
    });
    revalidatePath("/hardware");
    revalidatePath("/admin/inventory");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Failed to delete product" };
  }
}

// Marketing Actions
export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const type = formData.get("type") as string;
    const content = formData.get("content") as string;
    const image = formData.get("image") as string;
    const seoDesc = formData.get("seoDesc") as string;
    
    // Auto-generate slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    await prisma.post.create({
      data: {
        title,
        slug,
        type,
        content,
        image: image || null,
        seoDesc: seoDesc || null,
        published: true
      }
    });

    revalidatePath("/blog");
    revalidatePath("/case-studies");
    revalidatePath("/admin/marketing");
    return { success: true };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: { id }
    });
    revalidatePath("/blog");
    revalidatePath("/case-studies");
    revalidatePath("/admin/marketing");
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}

// Site Content CMS Actions
export async function updateSiteContent(page: string, section: string, content: string) {
  try {
    await prisma.siteContent.upsert({
      where: {
        page_section: {
          page,
          section,
        }
      },
      update: { content },
      create: { page, section, content },
    });
    
    // Revalidate the page so changes reflect immediately
    let path = "/";
    if (page === "home") {
      path = "/";
    } else if (page.startsWith("product-")) {
      path = `/product/${page.substring("product-".length)}`;
    } else if (page.startsWith("solutions-")) {
      path = `/solutions/${page.substring("solutions-".length)}`;
    } else {
      path = `/${page}`;
    }
    revalidatePath(path);
    revalidatePath("/admin/content");

    return { success: true };
  } catch (error) {
    console.error("Error updating site content:", error);
    return { success: false, error: "Failed to update content" };
  }
}
