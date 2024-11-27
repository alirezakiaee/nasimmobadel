"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Phone, Mail } from "lucide-react";
import type { Variants } from "framer-motion";
import { m } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function ContactCTA() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12">
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <m.div
                variants={itemVariants}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Heat Exchange Systems?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Contact our experts today for a customized solution that meets your specific requirements
                </p>
              </m.div>

              <m.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              >
                <m.div
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <Phone className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </m.div>

                <m.div
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <Mail className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="opacity-90">info@thermaltech.com</p>
                </m.div>

                <m.div
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <MessageSquare className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="opacity-90">Available 24/7</p>
                </m.div>
              </m.div>

              <m.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="min-w-[200px]"
                >
                  Request a Quote
                </Button>
              </m.div>
            </m.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}