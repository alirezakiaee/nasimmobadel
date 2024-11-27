import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Combines class names using clsx only
 */
export function cnx(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Combines class names using tailwind-merge only
 */
export function cnm(...inputs: string[]): string {
  return twMerge(inputs);
}
