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
        "button-hover": "button-animation-hover 0.15s ease-in",
        "show-ui": "show-ui 5s ease-out forwards",
      },

      keyframes: {
        "button-animation-hover": {
          from: {
            right: 100,
          },
          to: {
            right: 0,
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
