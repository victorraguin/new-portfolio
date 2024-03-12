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
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(15px)' },
          '50%': { transform: 'translateY(35px)' },
        },
      },
    },
    colors: {
      'pink': '#C778DD',
      'white': '#FFFFFF',
      'gray': '#ABB2BF',
      'dark' : '#282C33',
      "black": "#000000",
    },
  },
  darkMode: 'selector',
  plugins: [],
};
export default config;
