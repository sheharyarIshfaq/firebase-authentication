import React from "react";

import Container from "react-bootstrap/Container";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <Container className="text-center">
      <h1 className="my-5">Welcome to the Home Page</h1>
      {!user && <h5>Please login to show your status and email</h5>}
      {user && <h5>Your are logged in and your email is {user.email}</h5>}
    </Container>
  );
};

export default Home;
