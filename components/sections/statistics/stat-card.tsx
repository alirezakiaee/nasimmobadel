"use client";

import { m, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type Statistic } from "./data";

interface StatCardProps {
  stat: Statistic;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      const interval = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="pt-6 pb-8">
          <div className="text-3xl sm:text-4xl font-bold mb-2">
            {count}
            {stat.suffix && <span className="text-muted-foreground">{stat.suffix}</span>}
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
        </CardContent>
      </Card>
    </m.div>
  );
}