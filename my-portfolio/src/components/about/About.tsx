import React from 'react';
import "./about.scss";
import { motion } from 'framer-motion'; 

interface AboutProps {}

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About: React.FC<AboutProps> = () => {
  return (
    <motion.div className='mainContainer' variants={variants} initial='initial' whileInView="animate">
      <div className='Space'></div>
      <div className='flexContainer'>
        <div className='Container1'>
          <div className='DivLine1'>
            <h1>About me</h1>
            <div className='HorizontalLine'></div>
          </div>
          <div className='textContainer'>
            <div className='title'>
              <h1>I'm a dreamer</h1>
              <img src='/rocket.png' alt='' />
            </div>
            <p>I'm brazilian, living in Budapest and deeply passionate about coding and user-friendly digital experiences
               through programming. With a keen eye for design and a love for problem-solving, I thrive on the challenges
               and creativity that web development offers.</p>

            <p>Currently, I am actively expanding my skills and knowledge to become a well-rounded full-stack developer.</p>

            <p>Coding is not just a career that I want; it's my passion. I am constantly seeking opportunities to learn and grow, 
               pushing myself to explore new technologies and methodologies. I believe in the power of continuous improvement 
               and am committed to refining my skills to deliver exceptional results.</p>
          </div>
        </div>
        <div className='Container2'>
          <div className='DivLine2'> 
            <h1>My toolbox</h1>
            <div className='HorizontalLine'></div>
          </div>
          <div className='ToolBoxContainer'>
          <table>
              <tbody>
                <tr>
                  <td><img src='/html.png' alt='' /></td>
                  <td><img src='/css-3.png' alt='' /></td>
                  <td><img src='/sass.png' alt='' /></td>
                  <td><img src='/tailwindcss.png' alt='' /></td>
                </tr>
                <tr>
                  <td><img src='/js.png' alt='' /></td>
                  <td><img src='/react.png' alt='' /></td>
                  <td><img src='/typescript.png' alt='' /></td>
                  <td><img src='/node-js.png' alt='' /></td>
                </tr>
                <tr>
                  <td><img src='/mongo.png' alt='' /></td>
                  <td><img src='/express-js1.png' alt='' /></td>
                  <td><img src='/git.png' alt='' /> </td>
                  <td><img src='/npm.png' alt='' /> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;