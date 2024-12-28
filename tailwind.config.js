/** @type {import('tailwindcss').Config} */
// /** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      logo: ["Rubik Vinyl", "serif"],
      logo2: "Agu Display",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   // lg: "260px",
    //   xl: "1200px",
    // },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/images/site-bg.jpg')",
        // site: "url('./assets/1.jpg')",
        about: "url('./assets/images/2.webp')",
        services: "url('./assets/images/services.png')",
      },
    },
  },
  plugins: [],
};