// const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: "Simon Hembrom",
    description: "Simon Hembrom is a software developer who specializes in building (and occasionally designing) exceptional digital experiences.",
    siteUrl: "https://simonhembrom.netlify.app", // No trailing slash allowed!
    image: "/site.png", // Path to your image you placed in the "static" folder
    twitterUsername: "@spsimon3",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-LFG40ZR8BB",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SimonHembrom",
        short_name: "SimonHembrom",
        start_url: "/",
        // background_color: config.colors.darkNavy,
        // theme_color: config.colors.navy,
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
      __key: "content",
    },
  ],
};
