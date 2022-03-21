import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import meContact from "../assets/images/meWaterMin.jpg";

function Contact() {
  return (
    <div className=" cardContainer container">
      <div className="row">
        <div className="card contactCard col-11 col-md-10 col-xl-8">
          <img className="imgMain imgContact col-10 " src={meContact}></img>
          <h2>Want more of me?</h2>
          <div className="contactContainer">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=MattphLawrence@gmail.com&tf=cm"
              target="_blank"
            >
              <button className="card-link button spin circle">
                <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
              </button>
            </a>
            <a href="https://github.com/MattpLawrence" target="_blank">
              <button className="card-link button spin circle">
                <FontAwesomeIcon icon={faGithub} className="faIcon" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/mattplawrence" target="_blank">
              <button className="card-link button spin circle">
                <FontAwesomeIcon icon={faLinkedin} className="faIcon" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
