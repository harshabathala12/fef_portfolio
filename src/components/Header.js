import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const HeaderContainer = styled.header`
  padding: 8rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--text-light);
  margin-bottom: 0.5rem;
  span {
    background: -webkit-linear-gradient(45deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled(motion.div)`
  font-size: 1.2rem;
  color: var(--text-medium);
  min-height: 60px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const CTAButton = styled(ScrollLink)`
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: var(--text-light);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(148, 102, 255, 0.5);
    color: var(--text-light);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--text-light);
  }
`;

const ScrollDownIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-medium);
  font-size: 0.8rem;
`;

const scroll = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
`;

const MouseIcon = styled.div`
  width: 25px;
  height: 40px;
  border: 2px solid var(--text-medium);
  border-radius: 20px;
  position: relative;
  margin-bottom: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--text-medium);
    border-radius: 2px;
    animation: ${scroll} 2s infinite;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Name
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BATHALA <span>HARSHA</span>
      </Name>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <TypeAnimation
          sequence={[
            'AI/ML Engineer', 2000,
            'Data Science Enthusiast', 2000,
            'Python & GenAI Developer', 2000,
            'Full-Stack Developer', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Subtitle>
      <ButtonGroup
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <CTAButton to="contact" smooth={true} offset={-70} duration={500}>Get In Touch</CTAButton>
        <SecondaryButton href="/resume.pdf" download>Download CV</SecondaryButton>
      </ButtonGroup>

      <ScrollDownIndicator>
        <MouseIcon />
        Scroll Down
      </ScrollDownIndicator>
    </HeaderContainer>
  );
};

export default Header;