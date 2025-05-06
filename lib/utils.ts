import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names or class value arrays into a single className string.
 * Uses clsx for conditional logic and twMerge to properly merge Tailwind CSS classes.
 * 
 * @param inputs - Class values to be merged
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
