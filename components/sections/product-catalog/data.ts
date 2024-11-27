export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "shell-and-tube",
    name: "Shell and Tube Heat Exchanger",
    description: "High-performance shell and tube heat exchangers for industrial processes",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    features: [
      "High thermal efficiency",
      "Robust construction",
      "Multiple pass configurations",
      "Custom design options"
    ]
  },
  {
    id: "plate",
    name: "Plate Heat Exchanger",
    description: "Compact and efficient plate heat exchangers for various applications",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1581092160607-f6e7f4d13e83?auto=format&fit=crop&q=80",
    features: [
      "Compact design",
      "Easy maintenance",
      "High heat transfer coefficient",
      "Modular construction"
    ]
  },
  {
    id: "air-cooled",
    name: "Air-Cooled Heat Exchanger",
    description: "Efficient air-cooled heat exchangers for process cooling",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    features: [
      "Low maintenance",
      "No water requirement",
      "Suitable for remote locations",
      "Weather-resistant design"
    ]
  }
];