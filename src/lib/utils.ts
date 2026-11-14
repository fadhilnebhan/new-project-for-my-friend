import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateIndianPhone(phone: string): boolean {
  // Accepts standard 10 digit Indian mobile numbers (optionally prefixed with +91 or 0)
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  const pattern = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return pattern.test(cleaned);
}

export function formatIndianPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

export function validateEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
