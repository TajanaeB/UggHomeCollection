import React, { Component } from "react";
import './BlackNavbar.css';
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class BlackNavbar extends Component{
    render (){
        return(
            <div className="board">
                <>
  <Navbar class="bg-custom" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="rewards"><a href><u> Send a Gift Card   |   </u></a></Nav.Link>
      <Nav.Link href="#features" className="rewards">Our stores are open in select locations. <a href><u> Learn More.</u></a></Nav.Link>
    </Nav>
      <Nav.Link href="#pricing"></Nav.Link>
    <Form inline className="rewards">
        Ugg Rewards
    </Form>
</Navbar>
</>
  </div>
        )
    }
}
export default BlackNavbar;


