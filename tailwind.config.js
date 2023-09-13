/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bg_gray: "#F4F4F4",
    },
    fontFamily:{
      nunitoSans:['Nunito Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
};
