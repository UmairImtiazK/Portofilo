import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Umair Imtiaz Khokhar </span>
            from <span className="purple"> Muzaffarabad, Azad Jammu & Kashmir.</span>
            <br />
            I am currently a fifth-semester student pursuing a degree in Software Engineering. 
            <br />
            I have developed a strong foundation in Full Stack Development.
            <br />
            While I am not currently employed by a company, I actively refine my skills and explore innovative projects that enhance my understanding of software development and technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Umair Imtiaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
