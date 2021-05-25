// docs: https://www.11ty.io/docs/config/
const CleanCSS = require("clean-css");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  // https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/
  // tailwind CSS
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({
    "./_tmp/style.css": "./presentations/style.css",
  });
  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  // Copy over fonts/ folder
  eleventyConfig.addPassthroughCopy({
    "src/presentations/fonts/": "./presentations/fonts/",
  });

  // Copy over images/ folder
  eleventyConfig.addPassthroughCopy({
    "src/presentations/images/": "./presentations/images/",
  });

  // https://www.11ty.dev/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
