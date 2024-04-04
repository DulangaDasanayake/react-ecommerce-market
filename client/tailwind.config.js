/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/line-clamp'), i commented because line-clamp is provide default on tailwind dependencies
    // ...
  ],
};
