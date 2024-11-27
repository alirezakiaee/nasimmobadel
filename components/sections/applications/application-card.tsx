"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { type Application } from "./data";

interface ApplicationCardProps {
  application: Application;
  index: number;
}

export function ApplicationCard({ application, index }: ApplicationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group cursor-pointer overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-64">
            <Image
              src={application.image}
              alt={application.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
              <p className="text-white/80">{application.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}