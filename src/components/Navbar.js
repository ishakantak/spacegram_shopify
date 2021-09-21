import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="container" href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
         <h1> Spaceagram </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Navigationbar
