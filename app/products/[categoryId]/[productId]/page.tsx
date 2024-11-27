"use client";

import { productCategories } from "../../data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";

export default function ProductPage({
  params,
}: {
  params: { categoryId: string; productId: string };
}) {
  const category = productCategories.find((c) => c.id === params.categoryId);
  const product = category?.products.find((p) => p.id === params.productId);

  if (!category || !product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: category.title, href: `/products/${category.id}` },
    { label: product.name, href: `/products/${category.id}/${product.id}` }
  ];

  return (
    <div className="min-h-screen w-full py-12 bg-accent/5">
      <div className="w-full max-w-7xl mx-auto px-4 mt-10">
        <ProductBreadcrumb items={breadcrumbItems} className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-border py-2"
                    >
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
