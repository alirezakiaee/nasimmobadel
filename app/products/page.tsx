"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { productCategories } from "./data";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";

const cards = productCategories.map(category => ({
  title: category.title,
  src: category.image,
  href: `/products/${category.id}`
}));

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" }
  ];

  return (
    <div className="min-h-screen w-full py-12 flex items-center justify-center bg-accent/5">
      <div className="w-full max-w-7xl mt-10 mx-auto px-4">
        <ProductBreadcrumb items={breadcrumbItems} className="mb-8" />
        <div className="text-center mb-12">
          <h1 className="mt-10 text-4xl font-bold mb-4">Our Product Range</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of heat exchangers designed for various industrial applications
          </p>
        </div>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
