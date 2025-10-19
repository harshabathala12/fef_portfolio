import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--bg-light);
  margin-top: 4rem;
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-light);
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: var(--text-medium);
  max-width: 500px;
  margin: 0 auto 2rem auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  a {
    color: var(--text-light);
    font-size: 2.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: var(--primary);
      transform: translateY(-5px);
    }
  }
`;

const CopyrightText = styled.p`
  color: var(--text-medium);
  font-size: 0.9rem;
  span {
    color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Let's Connect</FooterTitle>
      <FooterText>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </FooterText>
      <SocialLinks>
        <a href="https://github.com/harshabathala12" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/bathalaharsha" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </SocialLinks>
      <CopyrightText>
        Designed & Built by Bathala Harsha with <span>React</span>
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;