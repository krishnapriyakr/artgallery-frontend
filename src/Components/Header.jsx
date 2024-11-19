import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
     

       <Navbar expand="lg" className=" p-4" style={{backgroundColor:"purple",fontFamily:'monospace'}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"snow",fontFamily:"cursive"}}><h4 > Art Gallery </h4> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{display:"flex",justifyContent:'end',alignItems:"end", marginLeft:"450px"}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="home" style={{color:"snow",fontFamily:'monospace'}} > <b>Home </b></Nav.Link>
              <Nav.Link href="add" style={{ marginLeft: "70px",color:'snow',fontFamily:'monospace'}} > <b> Add Work </b> </Nav.Link>
              <Nav.Link href="#"  style={{marginLeft:"70px",color:'snow',fontFamily:'monospace'}}> <b>About  </b>   </Nav.Link>
            <Nav.Link href="#"  style={{marginLeft:"70px",color:'snow',fontFamily:'monospace'}}> <b>contact  </b>   </Nav.Link>
             
          </Nav>
          <Form className="d-flex" style={{fontFamily:'monospace'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
        </Navbar>
        
    </>
  )
}

export default Header