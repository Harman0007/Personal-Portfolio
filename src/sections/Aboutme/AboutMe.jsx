import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate software developer with a keen interest in front-end development. 
          I enjoy creating interactive web applications and have experience working with technologies 
          like React, JavaScript, HTML, and CSS. I'm always eager to learn new things and take on exciting projects.
        </p>
      </div>
      <div className="container">
        <h2>Education</h2>
        <p>
          I am currently pursuing a Bachelor's degree in Computer Science Engineering at 
          Guru Tegh Bahadur Institute of Technology (GTBIT). My coursework includes subjects 
          such as data structures, algorithms, and full-stack development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
