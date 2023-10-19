import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* part:1 */}

        <div className="footer-section footer-wide">
          <h4>Subscribe to Aesop communications</h4>
          <hr className="line-space" />
          <div className="input-group">
            <input type="email" placeholder="Email address" className="email"/>
          </div>
          <input type="checkbox" />
          <label>
            Subscribe to receive communications from Aesop. By Subscribing, you
            confirm you have read and understand our privacy policy.
          </label>
        </div>
        <div className="footer-section">
          <h4>Orders and support</h4>
          <hr className="line-space" />
          <div className="set-vertical">
            <h4>Contact us</h4>
            <h4>FAQs</h4>
            <h4>Shipping</h4>
            <h4>Returns</h4>
            <h4>Track your order</h4>
            <h4>Order history</h4>
            <h4>Check gift card balance</h4>
            <h4>Terms and conditions</h4>
            <h4>Product recalls</h4>
          </div>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <hr className="line-space" />
          <div className="set-vertical">
            <h4>Click and Collect</h4>
            <h4>Live assistance</h4>
            <h4>Corporate gifts</h4>
            <h4>Video consultation</h4>
          </div>
        </div>
        <div className="footer-section">
          <h4>Location preferences</h4>
          <hr className="line-space" />
          <div className="set-vertical">
            <h4>Shipping</h4>
            <a className="underline">United States</a>
            <br />
            <h4>Language:</h4>
            <h4>English</h4>
          </div>
        </div>
      </footer>

      {/* part:2 */}
      <footer className="footer">
        <div className="footer-section footer-wide">
          <h4>Sustainability</h4>
          <hr className="line-space" />
          <label>
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation.
            <span className="underline">Learn more</span>
          </label>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <hr className="line-space" />
          <div className="set-vertical">
            <h4>Our story</h4>
            <h4>Foundation</h4>
            <h4>Careers</h4>
            <h4>Regulatory policies</h4>
            <h4>Privacy policy</h4>
            <h4>Cookie policy</h4>
            <h4>California Cleaning Products Right to</h4>
            <h4>Know Act</h4>
          </div>
        </div>
        <div className="footer-section">
          <h4>Social media</h4>
          <hr className="line-space" />
          <div className="set-vertical">
            <h4>Instagram</h4>
            <h4>Twitter</h4>
            <h4>LinkedIn</h4>
          </div>
        </div>
        <div className="footer-section"></div>
      </footer>

      <footer className="footer-last">
        <hr />
        <a href="#">Aesop</a>
      </footer>
    </>
  );
};

export default Footer;
