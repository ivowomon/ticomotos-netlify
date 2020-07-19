import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import MainNav from "../components/mainNav/mainNav"
import style from "./homeLayout.module.css"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const title = data.site.siteMetadata.title
  return (
    <React.Fragment>
      <MainNav />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={style.middleContainer}>{children}</div>
    </React.Fragment>
  )
}
