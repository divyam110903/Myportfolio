import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import mindtrace from "../../Assets/Projects/mindtrace.jpeg";
import shuttle from "../../Assets/Projects/shuttle.png";
import chatify from "../../Assets/Projects/chatify.png";
import waves from "../../Assets/Projects/waves.png";
import feedback from "../../Assets/Projects/feedback.jpeg";

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
              title="Chatify"
              description="Developed an AI-powered chatbot that interprets and responds to user queries using natural language processing and machine learning. Employed Naive Bayes classification with TF-IDF vectorization to generate accurate, context-aware replies. Deployed via Dash for a seamless real-time user interface."
              ghLink="https://github.com/divyam110903/Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waves}
              isBlog={false}
              title="Digital Waves"
              description="Built a visually captivating digital marketing platform featuring interactive Lottie animations and modern UI/UX design. Integrated a chatbot using the Gemini API to deliver real-time, personalized customer support. Focused on responsive layouts, smooth navigation, and engaging transitions for an enhanced user experience."
              ghLink="https://github.com/divyam110903/Digital-Waves"
              demoLink="https://digital-waves-steel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindtrace}
              isBlog={false}
              title="MindTrace"
              description="Engineered a supportive web app to assist individuals with short-term memory loss. The platform allows users to manage tasks and important notes through an accessible and user-friendly interface."
              ghLink="https://github.com/divyam110903/Mind-Trace"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/divyam110903/Customer-Segmentation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback}
              isBlog={false}
              title="Feedback App"
              description="Developed a web-based platform to streamline citizen feedback on road infrastructure issues such as potholes, cracks, and waterlogging. The portal enables users to register, log complaints with image uploads and location tags, and track their status. Admin panel allows authorities to manage, prioritize, and resolve complaints efficiently."
              ghLink="https://github.com/divyam110903/citizen-feedback-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shuttle}
              isBlog={false}
              title="Smart "
              description="Built a smart shuttle booking and tracking system to optimize campus transportation. The platform enables students and staff to book shuttle rides, view real-time shuttle locations, and receive estimated arrival times. Integrated Google Maps API for live tracking and route optimization. Admin panel allows for managing shuttle schedules, drivers, and route planning."
              ghLink="https://github.com/divyam110903/Smart-Shuttle"
               demoLink="https://smart-shuttle-lac.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
