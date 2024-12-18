"use client";

import { m } from "framer-motion";
import { ProcessFlow } from "./process-flow";
import { QualityCertifications } from "./quality-certifications";

export function Capabilities() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From design to delivery, we ensure excellence at every step
          </p>
        </m.div>

        <ProcessFlow />
        <QualityCertifications />
      </div>
    </section>
  );
}