import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'siwhite': '#EEEEEE',
      'midnight': '#34CAC6',
      'metal': '#8D8E90',
      'tahiti': '#3ab7bf',
      'silver': '#6E706E',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
  
};
export default config;
