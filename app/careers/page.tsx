import { Metadata } from "next";
import { ProductBreadcrumb } from "@/components/ui/product-breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers | Nasim Mobadel",
  description: "Join our team of innovators and make an impact in industrial manufacturing.",
};

const openPositions = [
  {
    title: "Senior Manufacturing Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead the development and implementation of manufacturing processes for cutting-edge industrial solutions.",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Quality Control",
    location: "Boston, MA",
    type: "Full-time",
    description: "Ensure the highest standards of quality in our manufacturing processes and final products.",
  },
  {
    title: "R&D Engineer",
    department: "Research & Development",
    location: "Austin, TX",
    type: "Full-time",
    description: "Drive innovation in industrial manufacturing through research and development of new technologies.",
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Lead complex manufacturing projects from conception to completion, ensuring timely delivery and client satisfaction.",
  },
];

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    title: "Professional Development",
    description: "Continuous learning opportunities through training programs and education reimbursement.",
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements and generous paid time off.",
  },
  {
    title: "Financial Benefits",
    description: "Competitive salary, 401(k) matching, and performance bonuses.",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mt-8 mb-6">Join Our Team</h1>
        
        <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/careers-hero.jpg"
            alt="Careers at Nasim Mobadel"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            At Nasim Mobadel, we're always looking for talented individuals who share our passion for innovation and excellence in industrial manufacturing. Join our team and be part of a company that's shaping the future of the industry.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.title} className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="text-muted-foreground">
                      <p>{position.department} | {position.location} | {position.type}</p>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-card rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-lg mb-6">
              We're always interested in meeting talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Button size="lg">Send Your Resume</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
