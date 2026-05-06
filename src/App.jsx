import NavBar from "./components/homepage/navber/NavBar"
import "./App.css"
import Banner from "./components/homepage/banner/Banner"
import Hrline from "./components/homepage/hrline/Hrline"
import Start from "./components/homepage/start/Start"
import Footer from "./components/homepage/footer/Footer"
import Ready from "./components/homepage/ready/Ready"
import Tools from "./components/homepage/tools/Tools"
import { Suspense, useState } from "react"
import { ToastContainer } from "react-toastify"
import GetStarted from "./components/getStarted/GetStarted"
import Pricing from "./components/pricing/Pricing"

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

    <NavBar  count={count} />
    <Hrline/>
    <Banner/>
    
     </header>
     <main className="container mx-auto ">
      <Start/>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

      <Tools toolsPromise={toolsPromise} setCount={setCount} />
      </Suspense>
      <ToastContainer />
      <GetStarted />
      <Pricing />
      <Ready />

     </main>
     <footer className="">
      
    <Footer className=""/>
     </footer>
    </>
  )
}

export default App
