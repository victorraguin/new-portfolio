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
      screens: {
        
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
        '4xl': '2560px',
        // => @media (min-width: 2560px) { ... }
        '5xl': '3440px',
        // => @media (min-width: 3440px) { ... }
        '6xl': '3840px',
        // => @media (min-width: 3840px) { ... }
      },
    },
    colors: {
      'main': '#ffb400',
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
