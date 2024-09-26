import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
  <>
    <div>
        <h1 className="title">Hello world! My name is <span className="highlight">Sarah Al Bastaki</span>.</h1>
        <h2 className="secondary-title">You have reached my digital portfolio.</h2>
    </div>

    <div className="side-by-side-container">
        <h1 className="about-me-header">
            <a href="/sarahnalbastaki-portfolio/about">About Me</a>
        </h1>

        <h1 className="projects-header">
            <a href="/sarahnalbastaki-portfolio/projects">Projects</a>
        </h1>

        <h1 className="resume-header">
            <a href="/sarahnalbastaki-portfolio/resume.pdf">Resume</a>
        </h1>
    </div>
  </>
  );
};

export default Home;
