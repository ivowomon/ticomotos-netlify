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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: ['vehicles'],
    // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "masteruser",
          password: "",
        },
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
