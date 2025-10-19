import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import FadeIn from './FadeIn';

const SectionWrapper = styled.section`
  padding: 8rem 2rem;
  text-align: center;
`;

const IntroText = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  max-width: 900px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.4;
  color: var(--text-light);

  span {
    font-weight: 700;
    color: var(--primary);
  }
`;

const ExploreButton = styled(Link)`
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--primary);
    color: var(--text-light);
  }
`;

const Intro = () => {
  return (
    <SectionWrapper id="intro">
      <FadeIn>
        <IntroText>
          Hey there. I'm <span>Harsha</span>, an AI/ML Engineer who brings ideas to life with Python and Generative AI. I thrive on building intelligent, full-stack applications that are not just powerful, but intuitive and scalable.
        </IntroText>
        <ExploreButton to="about" smooth={true} offset={-70} duration={500}>
          Explore My Profile
        </ExploreButton>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Intro;