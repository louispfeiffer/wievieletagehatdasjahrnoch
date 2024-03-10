/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `wievieletagehatdasjahrnoch`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", {
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};