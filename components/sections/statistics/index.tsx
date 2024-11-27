"use client";

import { m } from "framer-motion";
import { StatCard } from "./stat-card";
import { statistics } from "./data";

export function Statistics() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Our Impact in Numbers</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results through innovative heat exchange solutions
          </p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}