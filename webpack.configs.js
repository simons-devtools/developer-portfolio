module.exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@compons": path.resolve(__dirname, "compons"),
        "@configs": path.resolve(__dirname, "configs"),
        "@fonts": path.resolve(__dirname, "fonts"),
        "@layout": path.resolve(__dirname, "layout"),
        "@styles": path.resolve(__dirname, "styles"),
      },
    },
  });
};
