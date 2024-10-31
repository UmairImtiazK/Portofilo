import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/spotify.png";
import emotion from "../../Assets/Projects/emotion.png";
import admin_pannel from "../../Assets/Projects/admin-pannel.png";
import chatify from "../../Assets/Projects/health_app.png";
import nexcent from "../../Assets/Projects/nexcentpage.png";
import landingpage from "../../Assets/Projects/landingPagee.png";
import ecomerece from "../../Assets/Projects/ecomerece.png";

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
              title="Health Appointment Booking System"
              description="A web application that enhances patient identification and appointment scheduling through face recognition technology. Developed using Django and React.js. Face Recognition Login for secure access.NLP-driven Health Issue Input to route patients to the right department. Automated Appointment Scheduling with available time slots. PDF Receipt Generation with QR codes for easy check-in. User Dashboard to manage upcoming and past appointments. "
              ghLink="https://github.com/UmairImtiazK/rd-health-system"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin_pannel}
              isBlog={false}
              title="ReactMetrics-Material-UI-Admin-Panel"
              description="A robust dashboard for efficient data management.Seamless navigation implementation.Custom intuitive designs.Versatile components for easy integration.Data visualization tools.Effective data management.Single item and form designsImproved user experience.Toggle between light and dark themes.Guide for hosting your React app.This project exemplifies the use of React in creating a functional and visually appealing admin pane"
              ghLink="https://github.com/UmairImtiazK/ReactMetrics-Material-UI-Admin-Panel"
              demoLink="https://react-metrics-material-ui-admin-panel-ui.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingpage}
              isBlog={false}
              title="Responsive Landing Page"
              description="designed and developed with vanilla CSS and best frontend practices, offers a clean and engaging layout optimized for all devices. Following guidance from YouTuber Kevin Powell, I crafted custom CSS classes and styling techniques to create a fully responsive page. The design, initially conceptualized in Figma, was translated into a highly organized and scalable codebase. This project showcases modern CSS techniques, including media queries and custom styling, ensuring a seamless experience across desktops, tablets, and mobile devices."
              ghLink="https://github.com/UmairImtiazK/responsive-layout-with-media-query-magic/"
              demoLink="https://responsive-layout-with-media-query-magic-j96s.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spotify-inspired Music App built with React"
              description="
Discover & Explore: Browse popular tracks, top charts, and nearby music.
Music Player: Interactive controls and song details.
Artist & Song Pages: Detailed views for artists and tracks.
State Management: Smooth navigation with Redux Toolkit.
Tailwind CSS: Modern, fully responsive design.
Search: Find songs and artists quickly with efficient filtering.
Powered by RapidAPIs Shazam Core API, this app provides trending music from around the world, delivering a seamless experience across all devices."
              ghLink="https://github.com/UmairImtiazK/Project-Music-App-Clone"
              demoLink="https://project-music-app-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexcent}
              isBlog={false}
              title="Nexcent Social Marketing Landing Page"
              description="A responsive landing page built with React.js and vanilla CSS, designed for a social marketing service. The page showcases demo content to illustrate key features and benefits, and it follows best coding practices for clean, efficient, and maintainable code. With fully responsive design, it adapts seamlessly to various screen sizes, offering an optimal user experience on both desktop and mobile."
              ghLink="https://github.com/UmairImtiazK/nexcent-landing-page"
              demoLink="https://nexcent-landing-page-flax.vercel.app/" 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomerece}
              isBlog={false}
              title="eCommerce Website "
              description="This eCommerce website provides a fast, user-friendly shopping experience with responsive design, intuitive navigation, and real-time product filtering.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/UmairImtiazK/Ecomerece-Website-using-Filter-approch"
              demoLink="https://ecomerece-website-using-filter-approch-5ahx.vercel.app/"      
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/UmairImtiazK/responsive-layout-with-media-query-magic"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
