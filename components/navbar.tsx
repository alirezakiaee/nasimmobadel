"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              ThermalTech
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <Link href="/capabilities" className="hover:text-primary">
              Capabilities
            </Link>
            <Link href="/applications" className="hover:text-primary">
              Applications
            </Link>
            <Link href="/case-studies" className="hover:text-primary">
              Case Studies
            </Link>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button>Request Quote</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/products" className="block px-3 py-2 hover:bg-accent rounded-md">
              Products
            </Link>
            <Link href="/capabilities" className="block px-3 py-2 hover:bg-accent rounded-md">
              Capabilities
            </Link>
            <Link href="/applications" className="block px-3 py-2 hover:bg-accent rounded-md">
              Applications
            </Link>
            <Link href="/case-studies" className="block px-3 py-2 hover:bg-accent rounded-md">
              Case Studies
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Request Quote</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}