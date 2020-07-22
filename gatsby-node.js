const path = require('path')
const _ = require('lodash')

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
    fragment VehicleCardFields on StrapiVehicles {
      brand {
        name
      }
      tags {
        name
      }
      model {
        name
      }
      location{
        address
      }
      year
      displacement
      mileage
      negotiable_price
      plate
      trade
      id
      strapiId
      price
      photos {
        formats {
          large {
            url
          }
          medium {
            url
          }
          small {
            url
          }
          thumbnail {
            url
          }
        }
      }
    }
    {
      allStrapiVehicles {
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

    const posts = _.get(result,'data.allStrapiVehicles.edges', [])

    // Iterate over the array of posts
    posts.forEach(({ node: post }) => {
      // Create the Gatsby page for this WordPress post
      createPage({
        path: `/${post.strapiId}/`,
        component: vehicleTemplate,
        context: {
          post: post,
        },
      })
    })
  })
}
