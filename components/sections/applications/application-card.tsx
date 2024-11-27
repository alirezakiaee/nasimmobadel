"use client";

import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { type Application } from "./data";

interface ApplicationCardProps {
  application: Application;
  index: number;
}

export function ApplicationCard({ application, index }: ApplicationCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group cursor-pointer overflow-hidden">
        <div className="relative h-48">
          <Image
            src={application.image}
            alt={application.title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
          <h4 className="text-lg text-muted-foreground mb-3">{application.title}</h4>
          <p className="text-sm text-muted-foreground">{application.description}</p>
        </CardContent>
      </Card>
    </m.div>
  );
}