import React from "react"
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"



const App: React.FC = () => {
return (
   <div>
    <section><Navbar /></section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
    {/* <Test /> */}
  
   </div>
  )
}

export default App
