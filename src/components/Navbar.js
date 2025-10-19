import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: top 0.3s ease-in-out;
  top: ${({ $isVisible }) => ($isVisible ? '0' : '-100px')};
  display: flex;
  justify-content: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: var(--text-medium);
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;

  &:hover {
    color: var(--text-light);
  }

  &.active {
    color: var(--primary);
  }
`;

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight * 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav $isVisible={isVisible}>
      <NavLinks>
        <NavLink to="intro" spy={true} smooth={true} offset={-70} duration={500}>Intro</NavLink>
        <NavLink to="about" spy={true} smooth={true} offset={-70} duration={500}>About</NavLink>
        <NavLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</NavLink>
        <NavLink to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</NavLink>
        <NavLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;