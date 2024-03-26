import React from "react";
import "./footer.css";
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Working hours</h4>
            <a href="/">
              <p>Mon : 09:30AM - 06:00PM </p>
            </a>
            <a href="/">
              <p>Sat : 9:30AM - 2:00PM </p>
            </a>
            <a href="/">
              <p>Sun : Close</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Showrooms</h4>
            <a href="/">
              <p>Kandy: +94776584975</p>
            </a>
            <a href="/">
              <p>Colombo: +94776584975</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="https://www.apple.com">
              <p>Apple</p>
            </a>
            <a href="https://www.dell.com">
              <p>Dell</p>
            </a>
            <a href="https://www.hp.com">
              <p>HP</p>
            </a>
            <a href="https://www.lenovo.com">
              <p>Lenovo</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Contact Us</p>
            </a>
            <a href="/">
              <p>Careers</p>
            </a>
            <a href="/">
              <p>Press</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon</h4>
            <div className="socialmedia gap-2 h-5 w-5">
              <p>
                <a href="https://www.twitter.com">
                  <FaTwitter style={{ color: "#42b7ff", fontSize: "2rem" }} />
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com">
                  <FaFacebook style={{ color: "#0037a9", fontSize: "2rem" }} />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com">
                  <FaLinkedin style={{ color: "#0656df", fontSize: "2rem" }} />
                </a>
              </p>
              <p>
                <a href="https://www.discord.com">
                  <FaDiscord style={{ fontSize: "2rem" }} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr> <br />
        <br />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              ©{new Date().getFullYear()} Magic Computers. Allrights reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
