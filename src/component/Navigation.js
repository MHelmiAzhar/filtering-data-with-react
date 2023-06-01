import React from "react";
import { Logo } from "../assets/index.js";
import "../index.css";
import { Button } from "react-bootstrap";

function Navigation() {
  return (
    <nav className=" navigation navbar navbar-expand-lg ">
      <div className="container-fluid container">
        <a href="/">
          <img src={Logo} alt="Logo" />{" "}
        </a>
        <div>
          <div className="navbar-nav gap-3">
            <a className="nav-link text-dark" href="#our-services">
              Our Services
            </a>
            <a className="nav-link text-dark" href="#why-us">
              Why Us
            </a>
            <a className="nav-link text-dark" href="#testimonial">
              Testimonial
            </a>
            <a className="nav-link text-dark" href="#faq">
              FAQ
            </a>
            <Button
              className="border-0"
              style={{ backgroundColor: "#5CB85F" }}
              href="/cars"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
