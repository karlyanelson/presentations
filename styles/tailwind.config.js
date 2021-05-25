module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.md", "./src/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: { extend: { colors: { "rjs-action": "#42affa" } } },
  variants: {},
  plugins: [],
  prefix: "tw-",
};
