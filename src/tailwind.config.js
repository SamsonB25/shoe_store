/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        100: "28rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
