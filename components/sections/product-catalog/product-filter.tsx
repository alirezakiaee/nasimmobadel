"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { products, type Product } from "./data";

interface ProductFilterProps {
  onFilter: (filtered: Product[]) => void;
}

export function ProductFilter({ onFilter }: ProductFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = Array.from(new Set(products.map(p => p.category)));

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProducts(term);
  };

  const filterProducts = (term: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );
    onFilter(filtered);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            onClick={() => handleSearch(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}