import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './MiddleNav.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";



class MiddleNav extends Component {
    render() {
        return (
            <div>
                <>
  <Nav className="justify-content-left" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" className="home">Home  /</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className="home">Home & Gifts  /</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="home">Home Collection</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <p className="text-left mt-4 mb-4">HOME COLLECTION</p>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link className="home">36 Items | Refine By:</Nav.Link>
    </Nav.Item>
        <NavDropdown title="Product Type" id="right-nav-dropdown">
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.2">
                    Blankets
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Pillows
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Booties
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Rugs
                  </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Color" id="right-nav-dropdown">
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.2">
                    Black
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Grey
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Blue
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Pink
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Beige
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Neutral
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    White
                  </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Material" id="right-nav-dropdown">
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.2">
                    Sheepskin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Cotton Blend
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Fleece
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Faux Fur
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Polyester
                  </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Sort By" id="right-nav-dropdown">
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.2">
                    Price - Low to High
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Price - High to Low
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Customer Rating
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Recommended
                  </NavDropdown.Item>
        </NavDropdown>
    <Nav.Item>
    </Nav.Item>
    <Nav.Item>
    </Nav.Item>
    <Nav.Item>
    </Nav.Item>
  </Nav>
</>
            </div>
        );
    }
}

export default MiddleNav;