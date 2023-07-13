import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PageSignin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Sign In Page</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={form.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
