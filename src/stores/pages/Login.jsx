import React, { useState } from "react";
import { Form, Button, Container, Row, Col, ProgressBar, Tooltip, OverlayTrigger } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("Weak");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login", { email, password });
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    let feedback = "Weak";

    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 1;

    if (strength < 3) {
      feedback = "Weak";
    } else if (strength < 4) {
      feedback = "Moderate";
    } else {
      feedback = "Strong";
    }

    setPasswordStrength(strength);
    setPasswordFeedback(feedback);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    calculatePasswordStrength(newPassword);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div style={{ border: "2px solid #007bff", borderRadius: "10px", padding: "20px" }}>
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>

              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="password-strength-tooltip">
                    {passwordFeedback}
                  </Tooltip>
                }
              >
                <ProgressBar
                  now={(passwordStrength / 5) * 100}
                  variant={
                    passwordStrength < 3
                      ? "danger"
                      : passwordStrength < 4
                      ? "warning"
                      : "success"
                  }
                  className="mb-3"
                />
              </OverlayTrigger>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
