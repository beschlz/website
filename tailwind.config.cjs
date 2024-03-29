/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        my: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    colors: {
      mainColor: "#0e1d33",
      translucentMain: "rgba(0, 0, 0, 0.49)",
      secondaryColor: "#b03800",
      translucentWhite: "rgba(255, 255, 255, 0.3)",
      white: "rgb(255 255 255)",
      black: "rgb(0 0 0)",
    },
    fontFamily: {
      mono: ["FragmentMono"],
    },
  },
  plugins: [],
};
