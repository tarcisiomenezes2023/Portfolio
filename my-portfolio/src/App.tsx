import React from "react"
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"

const App: React.FC = () => {
return (
   <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
      </section>
    <section id="About and Skills"> <About /></section>
    <section id="Contact">Contact</section>
    <section id="Download CV">Download CV</section>
    {/* <Test /> */}
  
   </div>
  )
}

export default App
