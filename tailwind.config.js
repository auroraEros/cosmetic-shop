/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: ["class"],
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: withOpacity("--color-primary-50"),
          100: withOpacity("--color-primary-100"),
          200: withOpacity("--color-primary-200"),
          300: withOpacity("--color-primary-300"),
          400: withOpacity("--color-primary-400"),
          500: withOpacity("--color-primary-500"),
          600: withOpacity("--color-primary-600"),
          700: withOpacity("--color-primary-700"),
          800: withOpacity("--color-primary-800"),
          900: withOpacity("--color-primary-900"),
          DEFAULT: withOpacity("--primary"),
          foreground: withOpacity("--primary-foreground"),
        },
        secondary: {
          50: withOpacity("--color-secondary-50"),
          100: withOpacity("--color-secondary-100"),
          200: withOpacity("--color-secondary-200"),
          300: withOpacity("--color-secondary-300"),
          400: withOpacity("--color-secondary-400"),
          500: withOpacity("--color-secondary-500"),
          600: withOpacity("--color-secondary-600"),
          700: withOpacity("--color-secondary-700"),
          800: withOpacity("--color-secondary-800"),
          900: withOpacity("--color-secondary-900"),
          DEFAULT: withOpacity("--secondary"),
          foreground: withOpacity("--secondary-foreground"),
        },
        brown: {
          50: withOpacity("--color-brown-50"),
          100: withOpacity("--color-brown-100"),
          200: withOpacity("--color-brown-200"),
          300: withOpacity("--color-brown-300"),
          400: withOpacity("--color-brown-400"),
          500: withOpacity("--color-brown-500"),
          600: withOpacity("--color-brown-600"),
          700: withOpacity("--color-brown-700"),
          800: withOpacity("--color-brown-800"),
          900: withOpacity("--color-brown-900"),
        },
        gray: {
          50: withOpacity("--color-gray-50"),
          100: withOpacity("--color-gray-100"),
          200: withOpacity("--color-gray-200"),
          300: withOpacity("--color-gray-300"),
          400: withOpacity("--color-gray-400"),
          500: withOpacity("--color-gray-500"),
          600: withOpacity("--color-gray-600"),
          700: withOpacity("--color-gray-700"),
          800: withOpacity("--color-gray-800"),
          900: withOpacity("--color-gray-900"),
        },
        amber: {
          400: withOpacity("--color-amber-400"),
          500: withOpacity("--color-amber-500"),
        },
        emerald: {
          400: withOpacity("--color-emerald-400"),
          500: withOpacity("--color-emerald-500"),
        },
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),
        card: {
          DEFAULT: withOpacity("--card"),
          foreground: withOpacity("--card-foreground"),
        },
        popover: {
          DEFAULT: withOpacity("--popover"),
          foreground: withOpacity("--popover-foreground"),
        },
        muted: {
          DEFAULT: withOpacity("--muted"),
          foreground: withOpacity("--muted-foreground"),
        },
        accent: {
          DEFAULT: withOpacity("--accent"),
          foreground: withOpacity("--accent-foreground"),
        },
        destructive: {
          DEFAULT: withOpacity("--destructive"),
          foreground: withOpacity("--destructive-foreground"),
        },
        border: withOpacity("--border"),
        input: withOpacity("--input"),
        ring: withOpacity("--ring"),
        chart: {
          1: withOpacity("--chart-1"),
          2: withOpacity("--chart-2"),
          3: withOpacity("--chart-3"),
          4: withOpacity("--chart-4"),
          5: withOpacity("--chart-5"),
        },
      },
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};