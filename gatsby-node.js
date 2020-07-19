const path = require('path')

exports.onCreateNode = ({ node }) => {
  console.log("internal type", node.internal.type)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/home.js`)

  createPage({
    path: `/home/`,
    component: pageTemplate,
    context: {
      tags: ['recommended', 'featured'],
    },
  })

  return graphql(`
    fragment VehicleCardFields on wordpress__wp_vehicles {
      title
      slug
      tags {
        slug
      }
      acf {
        vehicles_mileage
        vehicles_year
        vehicles_location {
          lng
          lat
          state
          city
        }
        vehicles_brand {
          post_title
        }
        vehicles_price
      }
    }
    {
      allWordpressWpVehicles {
        edges {
          node {
            ...VehicleCardFields
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const vehicleTemplate = path.resolve(`./src/templates/vehicle.js`)

    const posts = result.data.allWordpressWpVehicles.edges

    // Iterate over the array of posts
    posts.forEach(({ node: post }) => {
      // Create the Gatsby page for this WordPress post
      createPage({
        path: `/${post.slug}/`,
        component: vehicleTemplate,
        context: {
          post: post,
        },
      })
    })
  })
}
