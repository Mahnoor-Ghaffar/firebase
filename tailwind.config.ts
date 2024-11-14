import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend the default Tailwind theme here if needed
      colors: {
        // Example: custom colors
        customWhite: '#f9f9f9',
      },
    },
  },
  plugins: [
    // Example: Add Tailwind plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

export default config;
