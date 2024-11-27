import { Metadata } from "next";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Nasim Mobadel",
  description: "Explore our successful projects and innovative solutions.",
};

const caseStudies = [
  {
    title: "Automotive Manufacturing Optimization",
    description: "How we helped a major automotive manufacturer reduce production time by 30% through innovative process improvements.",
    image: "/images/case-study-1.jpg",
    industry: "Automotive",
    results: ["30% reduction in production time", "20% cost savings", "Improved quality control"],
    href: "/case-studies/automotive-optimization",
  },
  {
    title: "Aerospace Component Innovation",
    description: "Developing a lightweight, high-strength component that reduced aircraft fuel consumption.",
    image: "/images/case-study-2.jpg",
    industry: "Aerospace",
    results: ["15% weight reduction", "Increased durability", "FAA certification achieved"],
    href: "/case-studies/aerospace-innovation",
  },
  {
    title: "Medical Device Precision Engineering",
    description: "Creating precision components for a revolutionary medical device used in minimally invasive surgery.",
    image: "/images/case-study-3.jpg",
    industry: "Medical",
    results: ["Sub-micron precision achieved", "FDA approval", "Successful clinical trials"],
    href: "/case-studies/medical-precision",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
        ]}
      />
      
      <h1 className="text-4xl font-bold mt-8 mb-6">Case Studies</h1>
      
      <div className="space-y-12 mt-8">
        {caseStudies.map((study) => (
          <div key={study.title} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                  {study.industry}
                </div>
                <h2 className="text-2xl font-semibold mb-4">{study.title}</h2>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Key Results:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="text-muted-foreground">{result}</li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={study.href}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
