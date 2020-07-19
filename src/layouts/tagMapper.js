import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import MainNav from "../components/mainNav/mainNav"
import style from "./homeLayout.module.css"

export default function Layout({
  children,
  renderComponent,
  vehicles = [],
}) {

  return (
    <React.Fragment>
      {vehicles.map((node) => renderComponent(node))}
    </React.Fragment>
  )
}
