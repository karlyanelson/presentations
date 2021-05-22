// docs: https://www.11ty.io/docs/config/
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // eleventyConfig.setTemplateFormats([
  //   "css" // css is not yet a recognized template extension in Eleventy
  // ]);

  // Copy over assets/ folder
  eleventyConfig.addPassthroughCopy({
    "src/presentations/markdown/": "./presentations/markdown/",
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
