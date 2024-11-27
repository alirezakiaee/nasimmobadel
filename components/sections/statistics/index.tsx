"use client";

import { m } from "framer-motion";
import { StatCard } from "./stat-card";
import { statistics } from "./data";

export function Statistics() {
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
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results through innovative heat exchange solutions
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}