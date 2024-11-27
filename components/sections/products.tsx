"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import { useState, useEffect } from "react";

const productItems = [
  {
    title: "NSM-602",
    description: "High-precision model with advanced features for industrial applications",
    link: "/products/nsm-602",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "NSM-603",
    description: "Enhanced performance model for demanding environments",
    link: "/products/nsm-603",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "NSM-620",
    description: "Next-generation solution for complex manufacturing processes",
    link: "/products/nsm-620",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "NSM-600",
    description: "Versatile model suitable for various industrial applications",
    link: "/products/nsm-600",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "NSM-710",
    description: "Advanced model with integrated smart features",
    link: "/products/nsm-710",
    image: "https://images.unsplash.com/photo-1581092671424-cfa8fb6dbf8c?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "NSM-GZ",
    description: "Specialized model for high-precision manufacturing",
    link: "/products/nsm-gz",
    image: "https://images.unsplash.com/photo-1581092786450-7767da8fd7f8?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "NSM-MZ",
    description: "Premium model with enhanced durability and precision",
    link: "/products/nsm-mz",
    image: "https://images.unsplash.com/photo-1581092918790-58fc7d6564b5?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "NSM-612",
    description: "Professional-grade model for industrial automation",
    link: "/products/nsm-612",
    image: "https://images.unsplash.com/photo-1581092871430-2c6396a1cfe8?q=80&w=1970&auto=format&fit=crop"
  }
];

const LoadingBanner = () => (
  <div className="w-full h-[300px] relative overflow-hidden bg-gray-200 animate-pulse">
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="h-12 bg-gray-300 rounded w-3/4 max-w-md mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 max-w-sm"></div>
    </div>
  </div>
);

export default function ProductsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100); // Small delay to ensure proper hydration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-300">
      {!mounted ? (
        <LoadingBanner />
      ) : (
        <div className="w-full h-[300px] relative overflow-hidden">
          <Image
            src="https://www.shell-tube.com/images/shell_tube_heat_exchanger.jpg"
            alt="Products Banner"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Our Products
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-white/80 md:text-600 mx-auto">
              Discover our range of high-precision industrial models
            </p>
          </div>
        </div>
      )}

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Product Line
            </p>
          </div>
          
          <div className="mt-16">
            <HoverEffect items={productItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
