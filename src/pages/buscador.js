import React from "react"

let bigArray = []

for (let i = 0; i < 10000; i++) {
  bigArray.push(i)
}

export default function Home() {
  const lotOfComponents = bigArray.map(e => (
    <div>Im a useless component #{e}</div>
  ))

  return <div>Im buscador</div>
}
