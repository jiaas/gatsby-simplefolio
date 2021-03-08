import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const CustomProgressBar = ({ tech, completed }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#051c61',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#e538d1',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>{tech}</h3>
          <div style={containerStyles}>
            <div style={fillerStyles} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

CustomProgressBar.propTypes = {
  tech: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default CustomProgressBar;
