import React from 'react'
import {UsergroupAddOutlined} from '@ant-design/icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
function Nav1() {
    return (
        <div>
<Navbar bg="" expand="lg">
  <Container>
    <Navbar.Brand href="/sign-in">Movie Time</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/sign-in"><UsergroupAddOutlined /> Sign in</Nav.Link>
        <Nav.Link href="/sign-up"><UsergroupAddOutlined /> Sign up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Nav1


