import { CONFIG } from "@consts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const {
  TIME_FORMAT: { DAY, LANG, MONTH, YEAR },
} = CONFIG;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat(LANG, {
    month: MONTH,
    day: DAY,
    year: YEAR,
  });
}
