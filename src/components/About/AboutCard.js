import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aishwarya kulal </span>
            from <span className="purple"> Udupi Karnataka, India.</span>
            <br />
            I am currently employed as a software developer at Aroha Group.
            <br />
            I have completed Master of Computer Application at Manipal Institute of Technology, Manipal.
            
            <br />
            <br/>
            <p style={{ color: "orange" }}>Email: aishwaryakulal8@gmail.com</p>

            <br />
            
          <i>WORK EXPIRENCE</i> 

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> SOFTWARE DEVELOPER Intern at Aroha Group Manipal. -(Jan-Apr)2024
            </li>
            <li className="about-activity">
              <ImPointRight /> MathWork Virtual Internship with Artifical Inteligence -(Jun-Sep)2023
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aishwarya kulal </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
