module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        "'Plus Jakarta Display'",
        "'Helvetica Neue'",
        'Arial',
        'sans-serif',
      ],
      serif: ["'Nanum Pen Script'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
