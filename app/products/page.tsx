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
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
        ]}
      />
      
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mt-8 mb-4">Our Product Range</h1>
        <p className="text-xl text-muted-foreground">
          Discover our comprehensive range of heat exchangers designed for various industrial applications
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
