// docs: https://www.11ty.io/docs/config/
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
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
