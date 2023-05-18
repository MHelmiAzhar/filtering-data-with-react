import React from "react";
import {
  Logo,
  iconTwitch,
  iconInstagram,
  iconTwitter,
  iconMail,
  iconFacebook,
} from "../assets";

const Footer = () => {
  return (
    <div className="container " style={{ paddingBottom: "100px" }}>
      <div className="row">
        <div className="col-lg-3">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-lg-3">
          <p style={{ fontWeight: "400" }}>Our services</p>
          <p style={{ fontWeight: "400" }}>Why Us</p>
          <p style={{ fontWeight: "400" }}>Testimonial</p>
          <p style={{ fontWeight: "400" }}>FAQ </p>
        </div>
        <div className="col-lg-3 mb-3">
          <p>Connect with us</p>
          <img src={iconFacebook} alt="" />
          <img src={iconInstagram} alt="" />
          <img src={iconTwitter} alt="" />
          <img src={iconMail} alt="" />
          <img src={iconTwitch} alt="" />
        </div>
        <div className="col-lg-3 ">
          <p>Copyright Binar 2022</p>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
