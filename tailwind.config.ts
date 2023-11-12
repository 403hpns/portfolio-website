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
        "slide-from-top": "slide-from-top 0.5s ease-in forwards",
        "slide-to-top": "slide-to-top 0.5s ease-in forwards",
      },

      keyframes: {
        "slide-from-top": {
          from: {
            opacity: 0,
            top: "-100%",
          },
          to: {
            opacity: 1,
            top: 0,
          },
        },
        "slide-to-top": {
          from: {
            opacity: 1,
            top: 0,
          },
          to: {
            opacity: 0,
            top: "-100%",
          },
        },
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
        main: "url('../assets/background.svg')",
      },
    },
  },
  plugins: [],
};
