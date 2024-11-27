"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export function LoadingSpinner() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <m.div
          className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </LazyMotion>
  );
}
