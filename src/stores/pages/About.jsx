import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card border="primary" style={{ width: '25rem' }} className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Welcome to E-Mart, your premier destination for online shopping. Discover a wide range of products conveniently available at your fingertips.
                <br /><br />
                <strong>Our Mission:</strong><br />
                At E-Mart, we are dedicated to delivering seamless online shopping experiences with an unwavering commitment to quality, reliability, and customer satisfaction.
                <br /><br />
                <strong>Contact Us:</strong><br />
                Have any questions or need assistance? Reach out to us at <code>mohammedriyaz8135@gmail.com</code>.
                <br /><br />
                <strong>Thank You:</strong><br />
                Thank you for choosing E-Mart! Happy shopping!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
