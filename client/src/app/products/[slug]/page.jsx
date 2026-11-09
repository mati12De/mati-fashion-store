import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailsClient from "@/components/products/ProductDetailsClient";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
