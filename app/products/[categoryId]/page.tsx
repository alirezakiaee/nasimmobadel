"use client";

import { productCategories } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = productCategories.find((c) => c.id === params.categoryId);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: category.title, href: `/products/${category.id}` }
  ];

  return (
    <div className="min-h-screen w-full py-12 bg-accent/5">
      <div className="w-full max-w-7xl mx-auto px-4 mt-10">
        <ProductBreadcrumb items={breadcrumbItems} className="mb-8" />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.products.map((product) => (
            <Link
              href={`/products/${category.id}/${product.id}`}
              key={product.id}
              className="group bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
