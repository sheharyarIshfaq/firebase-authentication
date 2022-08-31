import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { registerWithEmailAndPassword, auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  return (
    <Container className="mt-5 w-50 shadow-sm py-4 px-5 rounded-2">
      <h2 className="my-3">Fill the form to create a new account</h2>
      <Form onSubmit={registerHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
