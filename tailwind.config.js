/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "button-hover": "button-animation-hover 0.2s ease-in",
        "show-ui": "show-ui 5s ease-out forwards",
        "move-from-left": "move-left 1.5s ease-out forwards",
        "move-from-right": "move-right 1.5s ease-out forwards",
      },

      keyframes: {
        "move-left": {
          from: {
            transform: "rotate(0)",
          },
          to: { transform: "rotate(-3deg)" },
        },
        "move-right": {
          from: {
            transform: "rotate(0)",
          },
          to: { transform: "rotate(3deg)" },
        },
        "button-animation-hover": {
          from: {
            "flex-grow": 0,
          },
          to: {
            "flex-grow": 1,
          },
        },
      },
      container: {
        center: true,
      },
      minWidth: {
        "1/2": "50%",
      },

      maxWidth: {
        "1/2": "50%",
      },

      backgroundColor: {
        primary: "#6C63FF",
      },

      colors: {
        primary: "#6C63FF",
      },

      borderColor: {
        primary: "#6C63FF",
      },

      backgroundImage: {
        main: "url('../assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
