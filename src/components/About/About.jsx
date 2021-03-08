import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card, Badge, Jumbotron } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import CustomProgressBar from './ProgressBarComponent';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img } = about;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <div className="about-wrapper">
          <Title title="¿Quién es Javier Quinteros?" />
          <Row className="about-wrapper">
            <Col md={12} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="about-wrapper__image">
                  <Card
                    style={{
                      color: '#272341',
                      padding: '5%',
                    }}
                  >
                    <Card.Body>
                      <Row>
                        {' '}
                        <Col md={6} sm={12}>
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
                                  paddingBottom: '3%',
                                  paddingLeft: '10%',
                                  paddingRight: '10%',
                                  fontWeight: 'normal !important',
                                }}
                              >
                                <h3>Desarrollador Fullstack</h3>
                              </Badge>
                            </Col>
                          </Row>
                          <Row
                            style={{
                              paddingTop: '10%',
                              paddingBottom: '3%',
                              paddingLeft: '10%',
                              paddingRight: '10%',
                            }}
                          >
                            <Col>
                              <a
                                href="https://www.linkedin.com/in/javier-ignacio/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <i
                                  className="fa fa-linkedin fa-inverse"
                                  style={{ color: '#272341' }}
                                />{' '}
                              </a>
                            </Col>
                            <Col>
                              <a
                                href="https://twitter.com/loestoygozando"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <i
                                  className="fa fa-twitter fa-inverse"
                                  style={{ color: '#272341' }}
                                />{' '}
                              </a>
                            </Col>
                            <Col>
                              <a
                                href="https://github.com/jiaas"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <i
                                  className="fa fa-github fa-inverse"
                                  style={{ color: '#272341' }}
                                />{' '}
                              </a>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} sm={12}>
                          <Fade bottom duration={1000} delay={600} distance="30px">
                            <Row>
                              <Col
                                md={12}
                                sm={12}
                                className="text-left"
                                style={{ padding: '5%', paddingTop: '0%' }}
                              >
                                <CustomProgressBar completed={90} tech=".NET (C#) + XAMARIN" />
                              </Col>
                              <Col md={12} sm={12} className="text-left" style={{ padding: '5%' }}>
                                <CustomProgressBar completed={85} tech="SQL Server (T-SQL)" />
                              </Col>
                              <Col md={12} sm={12} className="text-left" style={{ padding: '5%' }}>
                                <CustomProgressBar completed={80} tech="Flutter (Dart)" />
                              </Col>
                              <Col md={12} sm={12} className="text-left" style={{ padding: '5%' }}>
                                <CustomProgressBar completed={75} tech="Ruby On Rails (Ruby)" />
                              </Col>
                              <Col md={12} sm={12} className="text-left" style={{ padding: '5%' }}>
                                <CustomProgressBar completed={70} tech="ReactJS (+React Native)" />
                              </Col>
                            </Row>
                          </Fade>
                        </Col>
                      </Row>
                      <Jumbotron fluid>
                        <Container>
                          <h1>Estoy buscando oportunidades laborales</h1>
                          <p
                            style={{
                              textAlign: 'justify',
                              paddingTop: '2%',
                              paddingLeft: '2%',
                              paddingRight: '2%',
                            }}
                          >
                            Quiero seguir construyendo el futuro, y se que no puedo hacerlo solo, es
                            por eso que busco integrarme a un equipo donde el respeto y el
                            compañerismo sean valores fundamentales, innovemos juntos pensando en el
                            bien de la comunidad.
                          </p>
                        </Container>
                      </Jumbotron>
                    </Card.Body>
                  </Card>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
