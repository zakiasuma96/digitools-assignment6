import NavBar from "./components/homepage/navber/NavBar"
import "./App.css"
import Banner from "./components/homepage/banner/Banner"
import Hrline from "./components/homepage/hrline/Hrline"
import Start from "./components/homepage/start/Start"
import Footer from "./components/homepage/footer/Footer"
import Ready from "./components/homepage/ready/Ready"

function App() {


  return (
    <>
     <header >

    <NavBar />
    <Hrline/>
    <Banner/>
    
     </header>
     <main>
      <Start/>
      <Ready />

     </main>
     <footer className="bg-[#101727] ">
      
    <Footer/>
     </footer>
    </>
  )
}

export default App
