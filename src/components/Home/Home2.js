import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avathar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            𝓛𝓮𝓽 𝓜𝓮 <span className="purple"> 𝓘𝓷𝓽𝓻𝓸𝓭𝓾𝓬𝓮 </span> 𝓜𝔂𝓼𝓮𝓵𝓯
            </h1>
            <p className="home-about-body">
              I'm a MCA graduate intrested in  programming and I'm Skilled in some domain such as
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, JavaScript, CSS, HTML5, React Js, Python, Data Science. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies  </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing Apps
              with <b className="purple">Android Applications</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>𝓕𝓘𝓝𝓓 𝓜𝓔</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aishwaryakulal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aishwarya-kulal-8b4161252"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
