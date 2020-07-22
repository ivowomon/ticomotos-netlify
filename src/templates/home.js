import React from "react"
import {graphql} from "gatsby"
import {get, groupBy} from "lodash"

import HomeLayout from "../layouts/homeLayout"
import VehicleList from "../components/vehicleList/vehicleList"

export default function Home({ data }) {
  const posts = get(data, 'allStrapiVehicles.edges', [])
  console.log("Home -> data", data)
  console.log("Home -> posts", posts)
  const postsByTag = groupBy(posts, 'node.tags[0].name')// change this to allow multiple tags
  console.log("Home -> postsByTag", postsByTag)

  
  return (
    <HomeLayout>
      <VehicleList items={postsByTag["recommended"]} />
      <h1>Im content title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        urna magna, sollicitudin porta interdum vel, sagittis id lorem. Nullam
        pretium convallis sapien, molestie cursus massa luctus sit amet. Nulla
        fermentum, augue vitae fermentum auctor, quam lacus aliquet ante, a
        volutpat tortor ligula maximus ipsum. Nam mollis neque sed porta rutrum.
        Ut commodo aliquam mauris, nec suscipit nibh lacinia pulvinar. Fusce dui
        lorem, fringilla at risus nec, eleifend imperdiet orci.
      </p>
      <h3>Im content sub title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        urna magna, sollicitudin porta interdum vel, sagittis id lorem. Nullam
        pretium convallis sapien, molestie cursus massa luctus sit amet. Nulla
        fermentum, augue vitae fermentum auctor, quam lacus aliquet ante, a
        volutpat tortor ligula maximus ipsum. Nam mollis neque sed porta rutrum.
        Ut commodo aliquam mauris, nec suscipit nibh lacinia pulvinar. Fusce dui
        lorem, fringilla at risus nec, eleifend imperdiet orci.
      </p>
    </HomeLayout>
  )
}

export const pageQuery = graphql`
  query PostsByTagQuery($tags: [String]!) {
    allStrapiVehicles(filter: {tags: {elemMatch:{name:{in:$tags}}}}) {
      edges {
        node {
          ...VehicleCardFields
        }
      }
    }
  }
` 