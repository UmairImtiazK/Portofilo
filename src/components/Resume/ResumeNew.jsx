import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cv_umair.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank" // opens in new tab
            style={{ maxWidth: "250px" }}
          >
            View CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
