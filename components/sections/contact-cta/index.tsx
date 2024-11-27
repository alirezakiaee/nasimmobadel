"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Heat Exchange Systems?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Contact our experts today for a customized solution that meets your specific requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="opacity-90">+1 (555) 123-4567</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="opacity-90">info@thermaltech.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <MessageSquare className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="opacity-90">Available 24/7</p>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[200px]"
              >
                Request a Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}