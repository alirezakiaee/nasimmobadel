import { Metadata } from "next";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, Settings, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities | Nasim Mobadel",
  description: "Explore our comprehensive range of capabilities and technological expertise in precision manufacturing and engineering solutions.",
};

const capabilities = {
  manufacturing: {
    title: "Manufacturing Excellence",
    icon: Settings,
    description: "State-of-the-art manufacturing capabilities delivering precision and quality.",
    features: [
      "CNC Machining with 5-axis capability",
      "Precision Turning and Milling",
      "EDM (Wire and Sinker)",
      "Sheet Metal Fabrication",
      "Additive Manufacturing / 3D Printing",
      "Injection Molding",
      "Assembly and Integration",
      "Surface Treatment and Finishing",
    ],
    image: "/images/manufacturing.jpg",
  },
  quality: {
    title: "Quality Assurance",
    icon: Shield,
    description: "Comprehensive quality control systems ensuring consistent excellence.",
    features: [
      "ISO 9001:2015 Certified Quality Management",
      "CMM (Coordinate Measuring Machine) Inspection",
      "Non-Destructive Testing (NDT)",
      "Material Certification",
      "First Article Inspection (FAI)",
      "In-Process Quality Control",
      "Statistical Process Control (SPC)",
      "Documentation and Traceability",
    ],
    image: "/images/quality.jpg",
  },
  engineering: {
    title: "Engineering Solutions",
    icon: Zap,
    description: "Advanced engineering capabilities for complex technical challenges.",
    features: [
      "CAD/CAM Design Services",
      "Reverse Engineering",
      "Product Development",
      "Design for Manufacturability (DFM)",
      "Prototyping Services",
      "Value Engineering",
      "Technical Documentation",
      "Engineering Consultation",
    ],
    image: "/images/engineering.jpg",
  },
  performance: {
    title: "Performance Optimization",
    icon: Gauge,
    description: "Optimizing processes and systems for maximum efficiency.",
    features: [
      "Lean Manufacturing Implementation",
      "Process Automation",
      "Production Planning",
      "Supply Chain Optimization",
      "Energy Efficiency Solutions",
      "Preventive Maintenance",
      "Capacity Planning",
      "Performance Monitoring",
    ],
    image: "/images/performance.jpg",
  },
};

function CapabilitySection({ 
  title, 
  icon: Icon, 
  description, 
  features, 
  image, 
  reversed 
}: {
  title: string;
  icon: any;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
}) {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-16`}>
      <div className="md:w-1/2">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-6">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Button className="mt-8" variant="outline" asChild>
          <Link href="/contact">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
        ]}
      />
      
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mt-8 mb-4">Our Capabilities</h1>
        <p className="text-xl text-muted-foreground">
          Leveraging cutting-edge technology and decades of expertise to deliver 
          precision manufacturing and engineering solutions for diverse industries.
        </p>
      </div>
      
      <div className="space-y-24">
        <CapabilitySection {...capabilities.manufacturing} />
        <CapabilitySection {...capabilities.quality} reversed />
        <CapabilitySection {...capabilities.engineering} />
        <CapabilitySection {...capabilities.performance} reversed />
      </div>

      <div className="mt-24 bg-muted rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Project?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Our team of experts is ready to help you find the perfect solution for your manufacturing needs.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
