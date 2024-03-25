/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        valorant: ["Valorant"],
      },
      backgroundImage: {
        "hero-pattern": "url('@/assets/images/valorant.png')",
      },
    },
  },
  plugins: [],
};
