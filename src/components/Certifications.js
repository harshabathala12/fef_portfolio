import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const SectionWrapper = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid #2a2a2a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    border-radius: 2px;
  }
`;

const CertList = styled.div`
  list-style: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardLink = styled.a`
  display: block;
  text-decoration: none;
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.5rem;
  font-size: 1.1rem;
  color: var(--text-medium);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  strong { color: var(--text-light); }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 0, var(--primary), transparent 40%);
    opacity: 0;
    transition: opacity 0.5s ease;
    transform: scaleY(1.5);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    color: var(--primary);
  }

  &:hover::before {
    opacity: 0.1;
  }
`;

const certifications = [
    { name: 'IBM Machine Learning', href: 'https://www.coursera.org/account/accomplishments/specialization/U91MRG41PFUJ' },
    { name: 'Python Basics', href: 'https://www.coursera.org/account/accomplishments/verify/46T3P57SKZSU' },
    { name: 'Cybersecurity for Everyone', href: 'https://www.coursera.org/account/accomplishments/verify/1D1UXECWNZ3D' },
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <Container>
        <FadeIn>
          <SectionTitle>CERTIFICATIONS</SectionTitle>
          <CertList>
            {certifications.map((cert, index) => (
              <CardLink key={index} href={cert.href} target="_blank" rel="noopener noreferrer">
                <strong>{cert.name}</strong>
              </CardLink>
            ))}
          </CertList>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
};

export default Certifications;