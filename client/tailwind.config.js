/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      focusColor:"sky400",
      hoverColor:"slate300",
      unUsed:"slate400",
      color: "slate-200",
      blueTint:"#slate700",
      bgColor:"#slate800",

    },
  },
  plugins: [],
}