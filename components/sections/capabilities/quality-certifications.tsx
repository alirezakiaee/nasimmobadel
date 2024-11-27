"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certifications } from "./data";

export function QualityCertifications() {
  return (
    <div className="bg-accent/5 rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-center mb-8">Quality Certifications</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}