import { useAuthState } from "react-firebase-hooks/auth";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase/firebase";

function AppNavbar() {
  const [user] = useAuthState(auth);
  const naviagte = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => naviagte("/")}
          style={{ cursor: "pointer" }}
        >
          Firebase Authentication
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!user && (
            <>
              <Button
                variant="outline-light"
                onClick={() => naviagte("/login")}
              >
                Login
              </Button>
              <Button
                variant="light mx-2"
                onClick={() => naviagte("/register")}
              >
                Register
              </Button>
            </>
          )}
          {user && (
            <Button variant="outline-light" onClick={logout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
