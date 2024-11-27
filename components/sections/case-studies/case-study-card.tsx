"use client";

import { m } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { type CaseStudy } from "./data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <div className="relative h-64">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{study.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{study.description}</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Challenge</h4>
              <p className="text-sm text-muted-foreground">{study.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solution</h4>
              <p className="text-sm text-muted-foreground">{study.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Results</h4>
              <p className="text-sm text-muted-foreground">{study.results}</p>
            </div>
          </div>
          <Button className="w-full mt-6 group">
            Read Full Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </m.div>
  );
}