import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import SAlert from "../../components/Alert";
import axios from "axios";
import { useNavigate } from "react-router";
import { config } from "../../configs";

function SigninPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    variant: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${config.api_host_dev}/http://localhost:9000/api/v1/cms/auth/signin`,
        form
      );

      console.log(res.data.data);
      setIsLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg || "Internal server error",
        variant: "danger",
      });
    }
  };

  return (
    <Container md={12}>
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && (
          <SAlert message={alert.message} variant={alert.variant} />
        )}
      </div>
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
              loading={isLoading}
              disabled={isLoading}
            >
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SigninPage;
