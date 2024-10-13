module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #040404 0%, rgba(4, 4, 4, 0.98) 27%, rgba(4, 4, 4, 0) 100%)',
      },
    },
  },
  plugins: [],
}
