"use client";

import { motion } from "framer-motion";
import { StatCard } from "./stat-card";
import { statistics } from "./data";

export function Statistics() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}