/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


/*

temporal images util i get a way to set multiple
[
"http://localhost:8000/wp-content/uploads/2020/07/fgrKlEcy5ON3-650x433-1.jpg",
"http://localhost:8000/wp-content/uploads/2020/07/vintage-motorcycles-gear-patrol-norton-commando.jpg",
"http://localhost:8000/wp-content/uploads/2020/07/download.jpeg",
"http://localhost:8000/wp-content/uploads/2020/06/BB84bsH.jpeg",
"http://localhost:8000/wp-content/uploads/2020/06/2017-FZ-10-Sport-Street.jpg",
]
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Motos CR | {page}`,
    localImages: [
      "http://localhost:8000/wp-content/uploads/2020/07/fgrKlEcy5ON3-650x433-1.jpg",
      "http://localhost:8000/wp-content/uploads/2020/07/vintage-motorcycles-gear-patrol-norton-commando.jpg",
      "http://localhost:8000/wp-content/uploads/2020/07/download.jpeg",
      "http://localhost:8000/wp-content/uploads/2020/06/BB84bsH.jpeg",
      "http://localhost:8000/wp-content/uploads/2020/06/2017-FZ-10-Sport-Street.jpg",
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'localhost:8000',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {

          wpcom_user: "masteruser",
          wpcom_pass: "1234",
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/place",
          "**/vehicles",
          "**/tags",
        ],
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify',
  ],
}
