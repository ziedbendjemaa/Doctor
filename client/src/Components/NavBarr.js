import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/action'
import {Link } from 'react-router-dom'

const NavBarr = ( {text,setText}) => {
  const dispatch = useDispatch()
    return (
        <div>
            <Navbar  expand="lg" style={{ backgroundColor:"rgb(53, 202, 158)", color:"white"}}>
  <Container fluid>
    <Navbar.Brand href="#">PARA-ONLINE</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <Link to='/sign'>
        signUp
        </Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          value={text}
          onChange={e=>setText(e.target.value)}
          className="me-2"
          aria-label="Search"
        />
        
      </Form>
      <Link to='/login' onClick={()=>dispatch(logout())}>deconnectet</Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBarr
