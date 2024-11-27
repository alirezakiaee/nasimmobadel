"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    src: "https://t4.ftcdn.net/jpg/05/21/81/41/360_F_521814137_HueUpOevfAr883Et23mWnXLSYZOfgzUS.jpg",
  },
  {
    src: "https://b2694411.smushcdn.com/2694411/wp-content/uploads/2023/04/crystal-kwok-XUEdfpPIhXg-unsplash.jpg?lossy=1&strip=1&webp=1",
  },
];

const createParticles = (count: number, color: string) => 
  Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 1,
    top: Math.random() * 100,
    left: Math.random() * 60 + 20,
    color: `rgba(${color}, ${Math.random() * 0.5 + 0.1})`,
    blur: Math.random() * 2 + 1,
  }));

const redParticles = createParticles(50, "239, 68, 68");
const blueParticles = createParticles(50, "37, 99, 235");

const ParticlesAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Red particles moving right to left */}
      <motion.div
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute flex"
      >
        <div className="w-[100vw] h-screen flex-none relative">
          {redParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                background: particle.color,
                filter: `blur(${particle.blur}px)`,
              }}
            />
          ))}
        </div>
        <div className="w-[100vw] h-screen flex-none relative">
          {redParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                background: particle.color,
                filter: `blur(${particle.blur}px)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Blue particles moving left to right */}
      <motion.div
        animate={{
          x: ["-100%", "0%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute flex"
      >
        <div className="w-[100vw] h-screen flex-none relative">
          {blueParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                background: particle.color,
                filter: `blur(${particle.blur}px)`,
              }}
            />
          ))}
        </div>
        <div className="w-[100vw] h-screen flex-none relative">
          {blueParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                background: particle.color,
                filter: `blur(${particle.blur}px)`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TestimonialImages = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const isActive = (index: number) => {
    return index === active;
  };

  return (
    <div className="relative h-80 w-full">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.src}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotateY(),
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : randomRotateY(),
              zIndex: isActive(index)
                ? 999
                : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotateY(),
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 origin-bottom"
          >
            <Image
              src={testimonial.src}
              alt="Client testimonial"
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const StreamAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <ParticlesAnimation />
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute flex"
        >
          <div className="w-[100vw] h-screen flex-none">
            <div className="absolute top-[30%] left-[40%] w-[800px] h-[800px] bg-gradient-to-r from-blue-600/40 to-red-600/40 rounded-full blur-[120px]" />
            <div className="absolute top-[60%] left-[60%] w-[600px] h-[600px] bg-gradient-to-r from-red-600/40 to-blue-600/40 rounded-full blur-[120px]" />
            <div className="absolute top-[45%] left-[50%] w-[700px] h-[700px] bg-gradient-to-r from-blue-500/30 to-red-500/30 rounded-full blur-[120px]" />
          </div>
          <div className="w-[100vw] h-screen flex-none">
            <div className="absolute top-[30%] left-[40%] w-[800px] h-[800px] bg-gradient-to-r from-blue-600/40 to-red-600/40 rounded-full blur-[120px]" />
            <div className="absolute top-[60%] left-[60%] w-[600px] h-[600px] bg-gradient-to-r from-red-600/40 to-blue-600/40 rounded-full blur-[120px]" />
            <div className="absolute top-[45%] left-[50%] w-[700px] h-[700px] bg-gradient-to-r from-blue-500/30 to-red-500/30 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export function HeroSection() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-background/80">
      <StreamAnimation />
      <div className="absolute inset-0 flex items-center pt-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Next-Generation <span className="text-red-600">Heat</span> <span className="text-blue-600">Exchange</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Revolutionizing industrial efficiency with advanced thermal technology.
              Our heat exchangers deliver unmatched performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Products
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[600px] flex items-center justify-center"
          >
            <TestimonialImages />
          </motion.div>
        </div>
      </div>
    </section>
  );
}