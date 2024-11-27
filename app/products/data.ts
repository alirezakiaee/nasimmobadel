export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  image: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "shell-and-tube",
    title: "Shell & Tube Heat Exchangers",
    description: "Industrial-grade shell and tube heat exchangers for efficient heat transfer in various applications.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80",
    products: [
      {
        id: "fixed-tube-sheet",
        name: "Fixed Tube Sheet Heat Exchanger",
        description: "Ideal for applications where thermal stress is not a major concern. Features a fixed tube sheet design for reliable performance.",
        features: [
          "Fixed tube sheet construction",
          "High thermal efficiency",
          "Easy maintenance",
          "Suitable for liquid-to-liquid applications"
        ],
        specifications: {
          "Heat Transfer Area": "10-1000 m²",
          "Design Pressure": "Up to 30 bar",
          "Temperature Range": "-20°C to 200°C",
          "Material Options": "Carbon Steel, Stainless Steel, Titanium"
        },
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80"
      },
      {
        id: "floating-head",
        name: "Floating Head Heat Exchanger",
        description: "Designed for applications with high temperature differentials. The floating head design accommodates thermal expansion.",
        features: [
          "Floating head design",
          "Excellent for high temperature differentials",
          "Enhanced thermal expansion accommodation",
          "Suitable for process industries"
        ],
        specifications: {
          "Heat Transfer Area": "20-2000 m²",
          "Design Pressure": "Up to 40 bar",
          "Temperature Range": "-40°C to 350°C",
          "Material Options": "Carbon Steel, Stainless Steel, Exotic Alloys"
        },
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "plate",
    title: "Plate Heat Exchangers",
    description: "Compact and efficient plate heat exchangers for various industrial applications.",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&q=80",
    products: [
      {
        id: "gasketed-plate",
        name: "Gasketed Plate Heat Exchanger",
        description: "Versatile and maintenance-friendly design with high thermal efficiency.",
        features: [
          "Easily expandable design",
          "High heat transfer coefficient",
          "Compact footprint",
          "Easy maintenance and cleaning"
        ],
        specifications: {
          "Heat Transfer Area": "0.1-2500 m²",
          "Design Pressure": "Up to 25 bar",
          "Temperature Range": "-35°C to 180°C",
          "Plate Material": "AISI 304, AISI 316, Titanium"
        },
        image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "air-cooled",
    title: "Air-Cooled Heat Exchangers",
    description: "Efficient air-cooled heat exchangers for applications where water cooling is not practical.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    products: [
      {
        id: "forced-draft",
        name: "Forced Draft Air Cooler",
        description: "High-performance air-cooled heat exchanger with forced draft fans.",
        features: [
          "Forced draft design",
          "Low noise operation",
          "Suitable for various climates",
          "Multiple fan configurations"
        ],
        specifications: {
          "Heat Rejection": "100 kW - 10 MW",
          "Air Flow": "Up to 500,000 m³/h",
          "Fan Power": "5-50 kW",
          "Material Options": "Carbon Steel, Stainless Steel"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "spiral",
    title: "Spiral Heat Exchangers",
    description: "Space-efficient spiral heat exchangers for handling fouling services.",
    image: "https://images.unsplash.com/photo-1582593605877-42978c6fd591?auto=format&fit=crop&q=80",
    products: [
      {
        id: "type-1",
        name: "Type I Spiral Heat Exchanger",
        description: "Single-channel spiral design for handling heavily fouling media.",
        features: [
          "Self-cleaning design",
          "Handles fouling services",
          "Compact footprint",
          "High heat transfer efficiency"
        ],
        specifications: {
          "Heat Transfer Area": "1-100 m²",
          "Design Pressure": "Up to 10 bar",
          "Temperature Range": "-20°C to 400°C",
          "Channel Gap": "6-25 mm"
        },
        image: "https://images.unsplash.com/photo-1582593605877-42978c6fd591?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "compact",
    title: "Compact Heat Exchangers",
    description: "High-performance compact heat exchangers for space-constrained applications.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
    products: [
      {
        id: "printed-circuit",
        name: "Printed Circuit Heat Exchanger",
        description: "Advanced compact heat exchanger with chemically etched flow passages.",
        features: [
          "Ultra-compact design",
          "High pressure capability",
          "Superior heat transfer",
          "Multi-stream capability"
        ],
        specifications: {
          "Heat Transfer Area": "0.1-10 m²",
          "Design Pressure": "Up to 600 bar",
          "Temperature Range": "-200°C to 900°C",
          "Material Options": "Stainless Steel, Inconel"
        },
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "Tailored heat exchanger solutions for unique applications and requirements.",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80",
    products: [
      {
        id: "custom-design",
        name: "Custom Engineered Heat Exchanger",
        description: "Specially designed heat exchangers for unique process requirements.",
        features: [
          "Custom design and engineering",
          "Application-specific solutions",
          "Optimized performance",
          "Various material options"
        ],
        specifications: {
          "Design": "According to requirements",
          "Pressure": "As needed",
          "Temperature": "Application specific",
          "Materials": "Based on process needs"
        },
        image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80"
      }
    ]
  }
];
