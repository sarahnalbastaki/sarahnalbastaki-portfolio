import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@styles/Projects.css'; // Import styles for the Projects page

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of Project 1.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of Project 2.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'This is a brief description of Project 3.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 4',
    description: 'This is a brief description of Project 4.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 5',
    description: 'This is a brief description of Project 5.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 6',
    description: 'This is a brief description of Project 6.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 7',
    description: 'This is a brief description of Project 7.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 8',
    description: 'This is a brief description of Project 8.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 9',
    description: 'This is a brief description of Project 9.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <Container className="projects-container">
      <h1 className="text-center">My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
