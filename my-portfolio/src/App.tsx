import React from "react"
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Sidebar from "./components/sidebar/Sidebar"

const App: React.FC = () => {
return (
   <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
      <Sidebar />
      
      </section>
    <section id="About and Skills"> <About /></section>
    <section id="Contact"> <Contact /> </section>
   </div>
  )
}

export default App
