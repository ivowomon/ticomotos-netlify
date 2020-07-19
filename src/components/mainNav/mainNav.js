import React from "react"

import { Link } from "gatsby"
import style from "./mainNav.module.css"

const NAV_ITEMS = [
  {
    to: "/home/",
    text: "Home",
  },
  {
    to: "/buscador/",
    text: "Buscador",
  },
  {
    to: "/favoritos/",
    text: "Favoritos",
  },
  {
    to: "/map/",
    text: "Mapa",
  },
]

export default function MainNav() {
  const navItems = NAV_ITEMS.map(({ to, text }, index) => (
    <Link key={`${to}${index}`} to={to}>
      <div className={style.itemBody}>{text}</div>
    </Link>
  ))
  return <nav className={style.container}>{navItems}</nav>
}
