import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function to check if we are in dev
export const isDev = process.env.NODE_ENV === 'development';

// function to check if we are in prod
export const isProd = process.env.NODE_ENV === 'production';
