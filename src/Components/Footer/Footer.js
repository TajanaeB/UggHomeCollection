import React, { Component } from 'react';
import './Footer.css';
import {
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";

const Footer = () => {
        return (

            <div className="main-footer">
            <div className="container">
            <div className="ugg-stars">
            <img src="./images/uggstars.png" height="40px" width="1400px" alt="" />
            </div>
            <div className="row">
            <div className="col">
                <h5>Be the First to Know</h5>
                <ul className="list-unstyled">
                <Form inline>
                <FormControl
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="mr-sm-2"
                />
                <Button variant><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg></Button>
              </Form>
                </ul>
            </div>

            <div className="col">
                <h5>Help</h5>
                <ul className="list-unstyled">
                    <li>Returns & Exchanges</li>
                    <li>Customer Service</li>
                    <li>Order Status</li>
                    <li>Track My Package</li>
                    <li>Shipping</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className="col">
                <h5>Visit a Store</h5>
                <ul className="list-unstyled">
                    <li>UGG Stores</li>
                    <li>Authorized Retailer</li>
                    <li>Top Sellers</li>
                    <li>Boots</li>
                    <li>Classic Boots</li>
                    <li>Slippers</li>
                    <li>Shoes</li>
                </ul>
            </div>

            <div className="col">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li>Buy a Gift Card</li>
                    <li>Check Your Balance</li>
                    <li>Site Map</li>
                    <li>Account Sign In</li>
                    <li>Wishlist</li>
                    <li>UGG Rewards</li>
                    <li>Promotions & Discounts</li>
                </ul>
            </div>

            <div className="col">
                <h5>About Us</h5>
                <ul className="list-unstyled">
                    <li>Our Story</li>
                    <li>Collaborations</li>
                    <li>Sustainability</li>
                    <li>Counterfeit Education</li>
                    <li>Animal Welfare</li>
                    <li>CA Transparency Act</li>
                    <li>The Blog</li>
                    <li>Careers</li>
                    <li>Materials & Craftmanship</li>
                    <li>Corporate Sales</li>
                </ul>
            </div>




            </div>
            </div>   
            </div>
        );
    }


export default Footer;