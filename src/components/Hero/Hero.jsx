import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id="hero" className="jumbotron">
      <Container style={{ paddingLeft: '5%' }}>
        <div className="d-flex justify-content-center">
          <h1 className="hero-title text-left">
            {title || 'Primero que nada...'}{' '}
            <span className="text-color-main">{name || 'buenas tardes!'}</span>
            <br />
            {subtitle || 'Buscabas un Desarrollador Fullstack?'}
          </h1>
        </div>
        <p className="hero-cta">
          <span className="cta-btn cta-btn--hero">
            <Link to="about" smooth duration={500}>
              {cta || 'NO hagas click aquí!'}
            </Link>
          </span>
        </p>
      </Container>
    </section>
  );
};

export default Header;
