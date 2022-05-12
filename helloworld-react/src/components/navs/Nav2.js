import React from 'react'
import '../../../node_modules/antd/dist/antd.css';
import {UserOutlined} from '@ant-design/icons';
import './nav.css'
import { Avatar } from 'antd';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
function Nav2() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/sign-in">Movie Time</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/wishlist">My Wishlist</Nav.Link>
        <Nav.Link href="/chooseMovie">Choose-Movie</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Nav.Link href="/logout"><UserOutlined /> Logout</Nav.Link>
    <Nav.Link href="/logout">
    <Avatar style={{backgroundColor:"orange",verticalAlign: 'middle', }} size="small">{sessionStorage.getItem('username').charAt(0)}</Avatar> LoggedIn as {sessionStorage.getItem('username')}
    </Nav.Link>
  </Container>
</Navbar>

</div>

    )
}

export default Nav2
