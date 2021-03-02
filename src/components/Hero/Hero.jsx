import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title">
          {title} <span className="text-color-main">{name}</span>
          <br />
          {subtitle}
        </h1>

        <p className="hero-cta">
          <span className="cta-btn cta-btn--hero">
            <Link to="about" smooth duration={500}>
              {cta}
            </Link>
          </span>
        </p>
      </Container>
    </section>
  );
};

export default Header;
