import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import SAlert from "../../components/Alert";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { config } from "../../configs";
import FormLogin from "./form";

function SigninPage() {
  const token = localStorage.getItem("token");

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
        `${config.api_host_dev}/cms/auth/signin`,
        form
      );

      localStorage.setItem("token", res.data.data);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg || "Internal server error",
        variant: "danger",
      });
    }
  };
  if (token) return <Navigate to="/dashboard" replace={true} />;

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
          <FormLogin
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SigninPage;
