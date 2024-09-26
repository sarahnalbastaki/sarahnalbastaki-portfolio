import React from 'react';
import '../styles/About.css'; // Import styles for About page (make sure to create About.css if needed)
import profileImage from '../assets/pink.png'

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <img src={profileImage} alt="Personal Picture" className="about-image" />

      <div className="about-text">
          <p>In an era where technology is seamlessly intertwined with our daily lives, I find myself captivated by the profound question of how we can imbue our devices with the essence of human trust and empathy. My professional journey is dedicated to exploring the interface where emotional depth meets technological innovation.<br/></p>

          <p>With a background that weaves through both psychology and technology, I am committed to pioneering research and development that aims to integrate the warmth, understanding, and authenticity we cherish in human interactions into the devices that accompany us every day. My goal is to bridge the gap between human emotions and digital experiences, crafting technologies that not only understand our needs but resonate with our feelings.<br/></p>

          <p>Through my work, I aspire to redefine the relationship between humans and machines, ensuring that every interaction is not just transactional, but also transformational, fostering a sense of trust and reliability akin to that which we experience with the people we hold dear. Join me on this intriguing journey as we unlock new dimensions of empathy and connection in the digital realm.</p>
      </div>
    </div>
  );
};

export default About;
