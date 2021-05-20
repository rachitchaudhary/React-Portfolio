import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// skills
import { skills } from "./skills-data";

import './skills.styles.css'

const Skills = () => {
  return (
    <div className="skillsContainer" id="skills">
      <h1 className="heading">Skills</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {skills.map((skill, index) => (
            <Col md={4}>
              <Card className="focus  mt-2 mb-2" className="skillCard">
                <Card.Body>
                  <Card.Text>
                    <span key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
