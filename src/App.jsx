import NavBar from "./components/homepage/navber/NavBar"
import "./App.css"
import Banner from "./components/homepage/banner/Banner"
import Hrline from "./components/homepage/hrline/Hrline"
import Start from "./components/homepage/start/Start"
import Footer from "./components/homepage/footer/Footer"
import Ready from "./components/homepage/ready/Ready"
import Tools from "./components/homepage/tools/Tools"
import { Suspense, useState } from "react"

const fetchTools = async()=>{
  const res =await fetch("/data.json");
  return res.json();
}

function App() {

const toolsPromise = fetchTools();
const [count, setCount] = useState(0);


  return (
    <>
     <header >

    <NavBar count={count} />
    <Hrline/>
    <Banner/>
    
     </header>
     <main>
      <Start/>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

      <Tools toolsPromise={toolsPromise} setCount={setCount} />
      </Suspense>
      <Ready />

     </main>
     <footer className="bg-[#101727] ">
      
    <Footer/>
     </footer>
    </>
  )
}

export default App
