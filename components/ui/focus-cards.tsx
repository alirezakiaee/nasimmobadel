"use client";

import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { ComponentProps } from "react";
import { LoadingSpinner } from "./loading";

interface Card {
  title: string;
  src: string;
  href?: string;
}

interface CardProps {
  card: Card;
  index: number;
  hovered: number | null;
  setHovered: (index: number | null) => void;
}

const Card = ({ card, index, hovered, setHovered }: CardProps) => {
  const baseProps = {
    className: "relative h-[400px] w-full rounded-xl overflow-hidden cursor-pointer group",
    onMouseEnter: () => setHovered(index),
    onMouseLeave: () => setHovered(null),
  } as const;

  if (card.href) {
    return (
      <Link href={card.href} {...baseProps}>
        <CardContent card={card} hovered={hovered} index={index} />
      </Link>
    );
  }

  return (
    <div {...baseProps}>
      <CardContent card={card} hovered={hovered} index={index} />
    </div>
  );
};

interface CardContentProps {
  card: Card;
  hovered: number | null;
  index: number;
}

const CardContent = ({ card, hovered, index }: CardContentProps) => (
  <>
    <m.div
      className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        backgroundImage: `url(${card.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={{
        scale: hovered === index ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
    <div className="absolute bottom-0 left-0 w-full p-8">
      <m.h2
        className="text-white text-2xl font-bold mb-4"
        animate={{
          y: hovered === index ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {card.title}
      </m.h2>
    </div>
  </>
);

interface FocusCardsProps {
  cards: Card[];
}

export function FocusCards({ cards }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </LazyMotion>
  );
}
