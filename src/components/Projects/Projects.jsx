import React, { useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="¿Qué valor aporta Javier Quinteros?" />
          {projects.map((project) => {
            const { title, info, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title}</h3>
                    <div>
                      <p>{info}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div className="project-wrapper__image">
                    <div className="thumbnail rounded">
                      <ProjectImg alt={title} filename={img} />
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
