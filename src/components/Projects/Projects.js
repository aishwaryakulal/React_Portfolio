import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/banner.jpg";
import emotion from "../../Assets/Projects/movie.jpg";
import editor from "../../Assets/Projects/travel.jpg";
import chatify from "../../Assets/Projects/pro-1.jpg";
import suicide from "../../Assets/Projects/shopper.jpg";
import bitsOfCode from "../../Assets/Projects/pro-2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Beauty-Parlour-management-System"
              description="🌈 Our Beauty Parlour Website is a delightful online platform designed to provide an unparalleled experience in the world of beauty and wellness. With PHP as the backend and CSS, HTML, JavaScript, and Bootstrap as the frontend technologies."
              ghLink="https://github.com/aishwaryakulal/Beauty-Parlour-website"
             demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GoBus"
              description="Designed and implemented a user-friendly interface for the bus ticket booking application, ensuring a seamless experience for users navigating through the app.

              Utilized Android Studio's development environment to harness the full potential of Java and XML, enabling efficient coding and integration of various features within the application."
              ghLink="https://github.com/aishwaryakulal/GoBus"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Travlr"
              description="Travlr - Explore, Discover, Journey! 🌍✈️ Welcome to Travlr, your passport to a world of adventure and exploration! 🗺️ This React-based web application is your go-to destination for discovering fascinating travel places, detailed descriptions, and exciting tour packages."
              ghLink="https://github.com/aishwaryakulal/Travlr---Explore-Discover-Journey-"
              demoLink="https://travlr-explore-discover-journey.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FlavorFiesta"
              description="FlavorFiesta - Frontend Design Welcome to the FlavorFiesta project! 🍔🌮🍕 FlavorFiesta is a delightful React-based web application designed to satisfy your cravings with a diverse menu of mouthwatering food items. This repository contains the frontend codebase"
              ghLink="https://github.com/aishwaryakulal/FlavorFiesta-"
              demoLink="https://flavor-fiesta-aqnc.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SHOPPER🛍️👗👖"
              description="Shopper - Your Ultimate E-commerce Destination! 🛍️👗👖 Welcome to Shopper, a React-based e-commerce application that
               brings the joy of shopping to your fingertips! 🌟 "
              ghLink="https://github.com/aishwaryakulal/SHOPPER"
              demoLink="https://shopper-gray.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TMDB MOVIE APP"
              description="🎬 TimeFlicks: Your TMDB Movie Experience 🕰️ Explore the world of cinema with TimeFlicks, a cutting-edge TMDB movie app crafted in React.js! 🚀 Features: 🌟 Discover a curated list of Popular, Upcoming, and Trending movies at your fingertips. "
              ghLink="https://github.com/aishwaryakulal/TMDB-Movie-App"
              demoLink="https://tmdb-movie-app-n9lt.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
