/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  extend: {
    screens: {
      'xs': '425px',
    },
    fontFamily: {
      inter: ['inter', 'sans-serif'],
    },
  },
};
export const plugins = [];

