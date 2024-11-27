"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Their heat exchangers have significantly improved our plant's efficiency. The quality and performance are unmatched in the industry.",
    name: "Sarah Chen",
    designation: "Plant Manager at IndustrialTech",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The energy savings have been remarkable.",
    name: "Michael Rodriguez",
    designation: "Chief Engineer at ProcessFlow",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The thermal efficiency and durability of their heat exchangers have transformed our manufacturing process.",
    name: "Emily Watson",
    designation: "Operations Director at ThermalSolutions",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust engineering. Their heat exchangers have been crucial to our energy optimization goals.",
    name: "James Kim",
    designation: "Technical Director at EnergyPro",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing. We've seen a 40% reduction in energy costs since installation.",
    name: "Lisa Thompson",
    designation: "Sustainability Manager at GreenTech",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
