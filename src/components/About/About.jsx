import React, { useContext } from 'react';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
// import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section id="about">
      <Container style={{ paddingTop: '7%' }}>
        <Row className="about-wrapper" style={{ paddingTop: '7%' }}>
          <Col md={6} sm={12}>
            <div className="about-wrapper__image">
              <Card style={{ color: '#272341', padding: '5%', border: '1px solid #00cdac' }}>
                <Card.Body>
                  <Row>
                    <Col xs={12} md={12} lg={12}>
                      <AboutImg alt="profile picture" filename={img} />
                      <div style={{ paddingTop: '5%', paddingBottom: '6%' }}>
                        <h1>Javier Ignacio</h1>
                        <h1>Quinteros Carvajal</h1>
                      </div>
                      <Badge
                        pill
                        style={{
                          backgroundColor: '#272341',
                          color: '#fff',
                          paddingTop: '6%',
                          paddingBottom: '2%',
                          paddingLeft: '10%',
                          paddingRight: '10%',
                          fontWeight: 'normal !important',
                        }}
                      >
                        <h3>Desarrollador Fullstack</h3>
                      </Badge>
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: '15%', paddingBottom: '3%' }}>
                    <Col>
                      <a
                        href="https://github.com/cobidev/gatsby-simplefolio"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin fa-inverse" style={{ color: '#272341' }} />{' '}
                      </a>
                    </Col>
                    <Col>
                      <a
                        href="https://github.com/cobidev/gatsby-simplefolio"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-twitter fa-inverse" style={{ color: '#272341' }} />{' '}
                      </a>
                    </Col>
                    <Col>
                      <a
                        href="https://github.com/cobidev/gatsby-simplefolio"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-github fa-inverse" style={{ color: '#272341' }} />{' '}
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Row>
              <h1>Javier Ignacio</h1>
            </Row>
            <Row>
              <div className="about-wrapper__info justify-content">
                <p className="about-wrapper__info-text" style={{ textAlign: 'justify' }}>
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text" style={{ textAlign: 'justify' }}>
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text" style={{ textAlign: 'justify' }}>
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
