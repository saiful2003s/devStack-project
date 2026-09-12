// import { useState } from 'react'
import Nav from "./components/nav"
import Banner from "./components/banner"
import Technologies from "./components/technologies/technologies"
import { Suspense } from "react"
import type { Itechnology } from "./types/technologyType"



const technologiesFetch = async (): Promise<Itechnology[] > => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}


function App() {
  // const [count, setCount] = useState(0)
  const technologiesPromise = technologiesFetch()

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback= { <h3>Loading...</h3>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
     
    </>
  )
}

export default App
