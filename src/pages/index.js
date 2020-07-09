import React from "react"

let bigArray = []

for (let i = 0; i < 10000; i++) {
  bigArray.push(i)
}

export default function Home() {
  const lotOfComponents = bigArray.map(e => (
    <div>Im a useless component # v2{e}</div>
  ))

  return (
    <div>
      <h1 style={{ color: `purple`, fontSize: `40px` }}>Hello Gatsby!</h1>
      <a href="/buscador/">buscador</a>
      {lotOfComponents}
    </div>
  )
}
