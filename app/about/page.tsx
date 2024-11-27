import { Metadata } from "next";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Nasim Mobadel",
  description: "Learn about our company, our values, and our commitment to excellence.",
};

const values = [
  {
    title: "Innovation",
    description: "Continuously pushing boundaries to deliver cutting-edge solutions.",
  },
  {
    title: "Quality",
    description: "Unwavering commitment to the highest standards of quality in every project.",
  },
  {
    title: "Integrity",
    description: "Building trust through transparent and ethical business practices.",
  },
  {
    title: "Collaboration",
    description: "Working closely with clients to achieve exceptional results.",
  },
];

const milestones = [
  {
    year: "1995",
    title: "Company Founded",
    description: "Started with a vision to revolutionize industrial manufacturing.",
  },
  {
    year: "2005",
    title: "International Expansion",
    description: "Expanded operations to serve clients globally.",
  },
  {
    year: "2015",
    title: "Innovation Center",
    description: "Opened state-of-the-art research and development facility.",
  },
  {
    year: "2023",
    title: "Industry Leadership",
    description: "Recognized as an industry leader in precision manufacturing.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mt-8 mb-6">About Us</h1>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/about-hero.jpg"
            alt="About Nasim Mobadel"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            At Nasim Mobadel, we are dedicated to delivering innovative solutions and exceptional quality in industrial manufacturing. With decades of experience and a commitment to excellence, we have established ourselves as a trusted partner for businesses worldwide.
          </p>
          <p>
            Our team of skilled engineers and technicians combines cutting-edge technology with proven expertise to meet the unique challenges of each project. We take pride in our ability to deliver precise, reliable, and cost-effective solutions that help our clients succeed.
          </p>
        </div>

        <section className="mb-12" id="vision">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <div className="bg-card rounded-lg p-8 shadow-lg mb-6">
            <p className="text-lg">
              To be the global leader in innovative industrial solutions, setting new standards for precision, quality, and technological advancement in manufacturing.
            </p>
          </div>
        </section>

        <section className="mb-12" id="mission">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="bg-card rounded-lg p-8 shadow-lg mb-6">
            <p className="text-lg">
              To empower industries worldwide by delivering cutting-edge manufacturing solutions through continuous innovation, unwavering commitment to quality, and exceptional customer service, while fostering sustainable practices and maintaining the highest standards of integrity.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Company Milestones</h2>
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="w-24 flex-shrink-0">
                  <div className="text-xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
