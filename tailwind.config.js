module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "image-checkout": "url('/checkout.jpg')",
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"),],
  mode: "jit",
}
