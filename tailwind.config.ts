import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Framer color tokens
        "framer-white": "rgba(255, 255, 255, 1)",
        "framer-purple": "rgb(116, 60, 255)",
        "framer-black": "rgb(0, 0, 0)",
        "framer-light-purple": "rgb(245, 245, 255)",
        "framer-cyan": "rgb(100, 250, 250)",
        "framer-light-blue": "rgb(246, 247, 255)",
        "framer-pink": "rgb(255, 253, 253)",
        "framer-green": "rgb(8, 200, 94)",
        "framer-red": "rgb(204, 0, 0)",
        // Custom colors
        izi: {
          50: "#fff8f8",
          100: "#ffefef",
          200: "#ffdbdb",
          400: "#ff9999",
          600: "#743cff",
          800: "#2d1b69",
        },
        "pink-header": "rgb(255, 239, 241)",
        // Gradient colors
        "gradient-blue-start": "rgb(152, 182, 250)",
        "gradient-blue-end": "rgb(84, 86, 237)",
      },
      fontFamily: {
        inter: ["Inter", "Inter Placeholder", "sans-serif"],
        "dm-sans": ["DM Sans", "DM Sans Placeholder", "sans-serif"],
        "plus-jakarta": [
          "Plus Jakarta Sans",
          "Plus Jakarta Sans Placeholder",
          "sans-serif",
        ],
        sans: ["Inter", "Inter Placeholder", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config