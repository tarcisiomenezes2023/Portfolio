import React from 'react'
import "./about.scss"


const About: React.FC = () => {
  return (

    <div className='mainContainer'>
        <div className='specification'>
        <h1>My toolbox</h1>
        <h1>About me</h1>
        </div>
        <div className='HorizontalLine'></div>
        <div className='flexContainer'>
            <div className='textContainer'>
                <p>I am deeply passionate about web development and thrive on the dynamic nature of this ever-evolving field. 
                With a fervent love for crafting digital experiences, I find joy in bringing ideas to life through code. 
                Constantly immersing myself in the latest technologies and best practices, I am committed to continuous improvement 
                and growth in my craft. Whether it's mastering new frameworks or refining my problem-solving skills,
                I approach each project with enthusiasm and dedication. I am driven by the challenge of creating elegant solutions
                to complex problems and am always eager to collaborate with others to push the boundaries of what is possible in web 
                development.</p>
            </div>
            <div className='imageContainer'>
                <img src='/rocket.png' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About;