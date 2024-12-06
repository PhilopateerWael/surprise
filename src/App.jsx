import { useState } from "react"
import Loader from "./Components/Loader"
import Home from "./Components/Home"

function App() {
  const [started , setStarted] = useState(false)
  return (
    <div>
      {!started ?<div className="h-screen z-10 absolute top-0 w-full bg-black"><button onClick={()=>setStarted(true)} className="bg-black px-4 py-2 rounded-full text-white border-[1px] mx-auto block mt-[50svh] border-white">Begin Experience</button></div> : null}
      {started ? <div className="h-screen w-screen overflow-hidden loader bg-black z-10"><Loader /></div> : null}
      <Home />
    </div>
  )
}

export default App
