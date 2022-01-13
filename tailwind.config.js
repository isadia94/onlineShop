module.exports = {
  mode: "jit",
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
