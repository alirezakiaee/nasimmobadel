"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle>{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4 mb-6">
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
              <Button className="w-full group">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}