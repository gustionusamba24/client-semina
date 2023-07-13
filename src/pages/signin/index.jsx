import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import SAlert from "../../components/Alert";
import axios from "axios";

function PageSignin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );

      console.log(res);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <Container md={12}>
      <SAlert message={"mantap"} variant="danger" />
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Sign In Page</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email address"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <TextInputWithLabel
              label="Password"
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <SButton
              action={handleSubmit}
              variant="primary"
              type="submit"
            >
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
