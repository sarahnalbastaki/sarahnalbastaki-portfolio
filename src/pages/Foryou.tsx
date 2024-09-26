import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Foryou.css'; // Custom styles for ForYou page

const resources = [
  {
    title: 'Custom React Component 1',
    description: 'This is a reusable React component that helps with X functionality.',
    image: 'https://via.placeholder.com/150',
    downloadLink: '#',
    githubLink: 'https://github.com/your-repo/custom-react-component-1'
  },
  {
    title: 'Open Source Project 1',
    description: 'An open-source project that I contributed to for handling Y.',
    image: 'https://via.placeholder.com/150',
    downloadLink: '#',
    githubLink: 'https://github.com/your-repo/open-source-project-1'
  },
  {
    title: 'Custom Tool 1',
    description: 'This is a custom tool built for Z that you can download and use for free.',
    image: 'https://via.placeholder.com/150',
    downloadLink: '#',
    githubLink: 'https://github.com/your-repo/custom-tool-1'
  }
];

const ForYou: React.FC = () => {
  return (
    <Container className="foryou-container">
      <h1 className="text-center">For You</h1>
      <p className="text-center">
        Here's a collection of custom components, open-source contributions, and other resources for you to explore and use.
      </p>

      <Row>
        {resources.map((resource, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="resource-card">
              <Card.Img variant="top" src={resource.image} />
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
                <Button variant="primary" href={resource.githubLink} className="me-2">
                  View on GitHub
                </Button>
                <Button variant="secondary" href={resource.downloadLink}>
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ForYou;
