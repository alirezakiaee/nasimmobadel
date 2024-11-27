"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

interface Item {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface HoverEffectProps {
  items: Item[];
  className?: string;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white shadow-lg border border-transparent group-hover:border-orange-400 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }: CardDescriptionProps) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const LoadingCard = () => (
  <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white shadow-lg animate-pulse">
    <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
  </div>
);

export function HoverEffect({ items, className }: HoverEffectProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100); // Small delay to ensure proper hydration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        className
      )}
    >
      {!mounted
        ? // Loading state
          Array(items.length)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="p-2">
                <LoadingCard />
              </div>
            ))
        : // Actual content
          items.map((item, idx) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <Card>
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </Link>
          ))}
    </div>
  );
}
