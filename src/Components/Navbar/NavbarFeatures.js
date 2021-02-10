import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './BlackNavbar.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class UggNavbar extends Component {
    render() {
      return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src="./images/UggImage.png" height="70px" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="WOMEN" id="basic-nav-dropdown" className="nav-options">
                  <NavDropdown.Item href="#action/3.1">FEATURED</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    FOOTWEAR
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    APPAREL & ACCESSORIES
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    ENTER SOMETHING
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="MEN" id="basic-nav-dropdown" className="nav-options">
                  <NavDropdown.Item href="#action/3.1">FEATURED</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    FOOTWEAR
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    APPEAREL & ACCESSORIES
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    ENTER SOMETHING
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="KIDS" id="basic-nav-dropdown" className="nav-options">
                  <NavDropdown.Item href="#action/3.1">BIG KIDS (6-10 YEARS)</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    TODDLERS (2-5 YEARS)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    BABY (0-2 YEARS)
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    ENTER SOMETHING
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="HOME & GIFTS" id="basic-nav-dropdown" className="nav-options">
                  <NavDropdown.Item href="#action/3.1">GIFT BOUTIQUE</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  HOME COLLECTION
                  <NavDropdown.Item href="#action/3.3">
                    Blankets & Throws
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Decorative Pillows & Poufs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sheepskin Area Rugs & Decor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    View All
                  </NavDropdown.Item>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="SALE" id="basic-nav-dropdown" className="nav-options">
                  <NavDropdown.Item href="#action/3.1">SALE FOR WOMEN</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SALE FOR MEN
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SALE FOR KIDS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    FEATURED
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                </svg></Button>
              </Form>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
  export default UggNavbar;

















