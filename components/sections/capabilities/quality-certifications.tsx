"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { certifications } from "./data";

export function QualityCertifications() {
  return (
    <div className="bg-accent/5 rounded-lg p-8">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4">Quality Certifications</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our commitment to excellence is backed by international certifications
        </p>
      </m.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <m.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={cert.logo}
                alt={cert.name}
                fill
                className="object-contain"
              />
            </div>
            <h4 className="font-semibold mb-2">{cert.name}</h4>
            <p className="text-sm text-muted-foreground">{cert.description}</p>
          </m.div>
        ))}
      </div>
    </div>
  );
}