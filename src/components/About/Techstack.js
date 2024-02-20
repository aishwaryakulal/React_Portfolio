
// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import { AiOutlineLineChart } from "react-icons/ai";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <AiOutlineLineChart />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;
// import React from "react";
// import { Col, Row, Card } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import { AiOutlineLineChart } from "react-icons/ai";

// const techStackData = [
//   { icon: <CgCPlusPlus />, skillName: "C++" },
//   { icon: <DiJavascript1 />, skillName: "JavaScript" },
//   { icon: <DiPython />, skillName: "Python" },
//   { icon: <DiMongodb />, skillName: "MongoDB" },
//   { icon: <DiReact />, skillName: "React" },
//   { icon: <AiOutlineLineChart />, skillName: "Charting" },
//   { icon: <DiGit />, skillName: "Git" },
//   { icon: <DiJava />, skillName: "Java" },
// ];

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       {techStackData.map((tech, index) => (
//         <Col key={index} xs={12} md={4} lg={3} className="tech-icons">
//           <Card style={{ textAlign: "center", padding: "20px", margin: "10px" }}>
//             <Card.Body>
//               <Card.Title>{tech.icon}</Card.Title>
//               <Card.Text>
//                 <h4>{tech.skillName}</h4>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Techstack;

// import React from "react";
// import { Col, Row, Card } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiCss3,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import { AiOutlineLineChart } from "react-icons/ai";

// const techStackData = [
//   { icon: <CgCPlusPlus />, skillName: "C++" },
//   { icon: <DiJavascript1 />, skillName: "JavaScript" },
//   { icon: <DiPython />, skillName: "Python" },
//   { icon: <DiCss3 />, skillName: "CSS 3" },
//   { icon: <DiReact />, skillName: "React" },
//   {  icon: <AiOutlineLineChart />,skillName: "Machine Learning" }, // Replace "Charting" with "Machine Learning"
//   { icon: <DiGit />, skillName: "Git" },
//   { icon: <DiJava />, skillName: "Java" },
// ];

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       {techStackData.map((tech, index) => (
//         <Col key={index} xs={12} md={4} lg={3} className="tech-icons">
//           <Card style={{ textAlign: "center", padding: "20px", margin: "10px" }}>
//             <Card.Body>
//               <Card.Title>{tech.icon}</Card.Title>
//               <Card.Text>
//                 {tech.icon ? (
//                   <h4>{tech.skillName}</h4>
//                 ) : (
//                   <p style={{ fontSize: "20px" }}>{tech.skillName}</p>
//                 )}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Techstack;

import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
} from "react-icons/di";
import { AiOutlineLineChart } from "react-icons/ai";

const techStackData = [
  { icon: <CgCPlusPlus />, skillName: "C++" },
  { icon: <DiJavascript1 />, skillName: "JavaScript" },
  { icon: <DiPython />, skillName: "Python" },
  { icon: <DiCss3 />, skillName: "CSS3" },
  { icon: <DiReact />, skillName: "React" },
  { icon: <AiOutlineLineChart size={12} />, skillName: "Machine Learning" }, // Increased icon size
  { icon: <DiGit />, skillName: "Git" },
  { icon: <DiJava />, skillName: "Java" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col key={index} xs={9} md={3} lg={2} sm={4} className="tech-icons">
          <Card style={{ textAlign: "center",  padding: "20px", margin: "10px" }}>
            <Card.Body>
              <Card.Title>{tech.icon}</Card.Title>
              <Card.Text>
                {tech.icon ? (
                  <h4 style={{ fontSize: "14px" }}>{tech.skillName}</h4> // Adjusted text size
                ) : (
                  <p style={{ fontSize: "14px" }}>{tech.skillName}</p> // Adjusted text size
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

