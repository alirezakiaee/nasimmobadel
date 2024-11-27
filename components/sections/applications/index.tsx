"use client";

import { m } from "framer-motion";
import { ApplicationCard } from "./application-card";
import { applications } from "./data";

export function Applications() {
  return (
    <section className="w-full py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Industry Applications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our heat exchangers power critical processes across diverse industries
          </p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application, index) => (
            <ApplicationCard key={application.id} application={application} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}