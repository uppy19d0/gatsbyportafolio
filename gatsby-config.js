/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'data',
        path:`${__dirname}/src/data`
      }
    }
  ],
}
