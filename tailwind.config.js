/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
          50: withOpacity("--color-primary-50"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
        },
        gray: {
          900: withOpacity("--color-gray-900"),
          800: withOpacity("--color-gray-800"),
          700: withOpacity("--color-gray-700"),
          600: withOpacity("--color-gray-600"),
          500: withOpacity("--color-gray-500"),
          400: withOpacity("--color-gray-400"),
          300: withOpacity("--color-gray-300"),
          200: withOpacity("--color-gray-200"),
          100: withOpacity("--color-gray-100"),
          50: withOpacity("--color-gray-50"),
        },
        amber: {
          400: withOpacity("--color-amber-400"),
          500: withOpacity("--color-amber-500"),
        },

        emerald: {
          400: withOpacity("--color-emerald-400"),
          500: withOpacity("--color-emerald-500"),
        },
      
      },
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
