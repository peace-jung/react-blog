const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withImages(
  withCss(
    withSass({
      cssLoaderOptions: {
        url: false
      }
    })
  )
);