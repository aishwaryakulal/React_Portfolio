// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// function Github() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="purple">Code</strong>
//       </h1>
//       <GitHubCalendar
//         username="aishwaryakulal"
//         blockSize={15}
//         blockMargin={5}
//         color="#c084f5"
//         fontSize={16}
//       />
//     </Row>
//   );
// }

// export default Github;
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">Activity</strong>
      </h1> */}
      {/* <GitHubCalendar
        username="aishwaryakulal"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}

      {/* Education Section */}
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        𝓔𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Add your education details here */}
          <Col md={6}>
            <h4>Manipal Institute of Technology MIT Manipal Udupi</h4>
            <p>Degree: Master of Computer Application (MCA)</p>
            <p>Year: 2022-24</p>
          </Col>
          <Col md={6}>
            <h4>Mahatma Ghandhi Memorial College Udupi</h4>
            <p>Degree: Bachelor of Computer Application (BCA)</p>
            <p>Year: 2019-22</p>
          </Col>
          <Col md={6}>
            <h4>PoornaPrajna Pre University college Udupi</h4>
            <p>Degree: Computer Science </p>
            <p>Year: 2017-19</p>
          </Col>
          <Col md={6}>
            <h4>St. Cecily's High School Udupi</h4>
            <p>Degree: High school</p>
            <p>Year: 2017</p>
          </Col>
          {/* Add more education details if needed */}
        </Row>
      </div>
    </Row>
  );
}

export default Github;

