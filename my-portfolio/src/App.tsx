import React from "react"
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/Hero"


const App: React.FC = () => {
return (
   <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
      </section>
    <section>Parallax</section>
    <section id="About">About Me</section>
    <section>Parallax</section>
    <section id="Skills">Portfolio1</section>
    <section>Portfolio2</section>
    <section id="Contact">Contact</section>
    <section id="Download CV">Download CV</section>
    {/* <Test /> */}
  
   </div>
  )
}

export default App
