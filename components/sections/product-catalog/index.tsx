"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";
import { ProductFilter } from "./product-filter";
import { useState } from "react";
import { type Product, products } from "./data";

export function ProductCatalog() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  return (
    <section className="w-full py-24 bg-accent/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Product Range</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of heat exchangers designed for various industrial applications
          </p>
        </motion.div>

        <ProductFilter onFilter={setFilteredProducts} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}