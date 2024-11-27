import { Metadata } from "next";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Applications | Nasim Mobadel",
  description: "Discover the wide range of applications and industries we serve.",
};

const applications = [
  {
    title: "Automotive",
    description: "Precision components and systems for the automotive industry, including engine parts, transmission components, and chassis elements.",
    image: "/images/automotive.jpg",
  },
  {
    title: "Aerospace",
    description: "High-precision parts and assemblies for aircraft engines, structural components, and control systems.",
    image: "/images/aerospace.jpg",
  },
  {
    title: "Medical",
    description: "Specialized equipment and components for medical devices, surgical instruments, and diagnostic equipment.",
    image: "/images/medical.jpg",
  },
  {
    title: "Industrial",
    description: "Heavy machinery components, industrial automation systems, and custom manufacturing solutions.",
    image: "/images/industrial.jpg",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Applications", href: "/applications" },
        ]}
      />
      
      <h1 className="text-4xl font-bold mt-8 mb-6">Applications</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {applications.map((app) => (
          <div key={app.title} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{app.title}</h2>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
