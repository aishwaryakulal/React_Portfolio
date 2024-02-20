// Certifications.js
import React from "react";
//import Certification1Viewer from "../../Assets/home-main.svg";
import "./Certifications.css";
import { Container, Row, Col } from "react-bootstrap";
import python from "../Assets/python.pdf";
import React1 from '../Assets/React.pdf'
import Devops from '../Assets/Devops.pdf'
import php from '../Assets/php.pdf'
//import { Document, Page, pdfjs } from "react-pdf";
function Certification() {
  return (
    <Container fluid className="certifications-section">
      <Container>
        <h3 className="certifications-heading">
          My Certifications
        </h3>

        {/* Add your certification content here */}
        <Row>
          <Col md={6} className="certification-card">
            {/* Add your first certification */}
            <h3>Python for Data Analysis</h3>
            <p>From coursera</p>

            <iframe 
              title="Certification1Viewer"
             // href={pdf}
             src={python}     // src="/certifications/certification_2.pdf" do this pdf downloadand put path
              width="90%" 
              height="400px"
            ></iframe>
            {/* Add PDF viewer or link for the second certification */}
            <a href="https://www.coursera.org/account/accomplishments/certificate/VK3QDS7QYGJC" target="_blank" rel="noopener noreferrer">
              
            </a>
           
           
          </Col>

          <Col md={6} className="certification-card">
            {/* Add your second certification */}
            <h3>Front-End development with React JS</h3>
            <p>from coursera</p>
            {/* Add PDF viewer or link for the second certification */}
             {/* Add PDF viewer or link for the second certification */}

             <iframe 
              title="Certification1Viewer"
             // href={pdf}
             src={React1}     // src="/certifications/certification_2.pdf" do this pdf downloadand put path
              width="90%" 
              height="400px"
            ></iframe>



             <a href="https://coursera.org/share/c11b5475f9d7f89156cf48d9fa401d57" target="_blank" rel="noopener noreferrer">
              
            </a>
          </Col>





          <Col md={6} className="certification-card">
            {/* Add your second certification */}
            <h3>DevOps on AWS</h3>
            <p>from coursera</p>
            {/* Add PDF viewer or link for the second certification */}
             {/* Add PDF viewer or link for the second certification */}

             <iframe 
              title="Certification1Viewer"
             // href={pdf}
             src={Devops}     // src="/certifications/certification_2.pdf" do this pdf downloadand put path
              width="90%" 
              height="400px"
            ></iframe>



             <a href="https://coursera.org/share/21f2648f087456b4eff69360df78f511" target="_blank" rel="noopener noreferrer">
              
            </a>
          </Col>

        


          <Col md={6} className="certification-card">
            {/* Add your second certification */}
            <h3>PHP</h3>
            <p>from coursera</p>
            {/* Add PDF viewer or link for the second certification */}
             {/* Add PDF viewer or link for the second certification */}

             <iframe 
              title="Certification1Viewer"
             // href={pdf}
             src={php}     // src="/certifications/certification_2.pdf" do this pdf downloadand put path
              width="90%" 
              height="400px"
            ></iframe>



             <a href="https://coursera.org/share/97005e1eea181a707c40732624dd42f0" target="_blank" rel="noopener noreferrer">
             
            </a>
          </Col>











        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
