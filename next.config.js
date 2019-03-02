// const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withImages(
  withCss(
    withSass({
      cssLoaderOptions: {
        url: false
      },
      exportPathMap: async defaultPathMap => {
        return {
          "/": { page: "/" },
          "/about": { page: "/about" },
          "/about/secondparam": {
            page: "/about",
            query: { title: "secondparrrrram" }
          }
        };
      }
    })
  )
);
