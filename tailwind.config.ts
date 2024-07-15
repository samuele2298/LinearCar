import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          std: '#e53935', // Red-600
          hover: '#c62828', // Darker shade for hover effect
        },
        secondary: {
          std: '#000000', // Black
          hover: '#333333', // Brighter black for hover effect
        },
      },
    },
  },
  plugins: [],
};
export default config;
