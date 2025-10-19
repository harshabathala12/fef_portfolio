import React, { useState } from 'react';
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

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const IllustrationContainer = styled.div`
  flex: 1;
  max-width: 300px;
  svg {
    width: 100%;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const TabButton = styled.button`
  background: ${({ $isActive }) => ($isActive ? 'var(--primary)' : 'var(--bg-light)')};
  color: var(--text-light);
  border: 1px solid ${({ $isActive }) => ($isActive ? 'var(--primary)' : '#2a2a2a')};
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    border-color: var(--primary);
  }
`;

const Card = styled.div`
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
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
  &:hover::before {
    opacity: 0.1;
  }
`;

const ExperienceCard = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #2a2a2a;
  }
`;
const JobTitle = styled.h3` color: var(--primary); margin-bottom: 0.2rem; `;
const Company = styled.p` font-weight: 600; color: var(--text-light); margin-bottom: 0.5rem; `;
const ExperienceList = styled.ul` padding-left: 1.2rem; color: var(--text-medium); li { margin-bottom: 0.5rem; }`;
const experiences = [
    { title: 'Data Science Intern', company: 'Oasis Infobyte (Virtual) | July 2025 – Aug 2025', description: ['Built a Spam Detection Classifier achieving 97.8% accuracy.', 'Predicted Used Car Prices with 95.8% R² score using Random Forest.'] },
    { title: 'Accommodation Team Member', company: 'Jain Utsav 2023', description: ['Assisted in managing accommodation for 200+ participants.', 'Contributed to improved check-in efficiency during the 4-day event.'] }
];

const EducationEntry = styled.div`
  &:not(:last-child) { margin-bottom: 1.5rem; }
`;
const University = styled.h3` color: var(--primary); margin: 0; `;
const Degree = styled.p` margin: 0.2rem 0; font-size: 1.1rem; font-weight: 600; color: var(--text-light); `;
const Details = styled.p` color: var(--text-medium); font-size: 0.9rem; `;
const education = [
    { school: 'Jain University, Kanakapura Road', degree: 'B.Tech in Computer Science', details: 'CGPA: 8.1 | Expected Graduation: 2026' },
    { school: 'Sarvodaya Educational Trust, Magadi Road', degree: 'Pre-University (PUC)', details: 'CGPA: 9.4 (89%) | Completed: 2022' },
    { school: 'The Regency Public School, Vidyaranyapura', degree: 'Secondary School (10th Grade)', details: 'CGPA: 9.4 (89%) | Completed: 2020' }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <SectionWrapper id="about">
      <Container>
        <FadeIn>
          <SectionTitle>ABOUT ME</SectionTitle>
          <AboutContainer>
            <IllustrationContainer>
              <svg viewBox="0 0 572 415" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M430.31 306.41c-3.2-11-2.9-22.3.9-33.2 2.5-7.3 5.4-14.3 8.8-21.2 12.9-25.9 28-50.5 45.3-73.6a297.4 297.4 0 0021.7-27c13.2-20.2 19-42.3 16.5-65.7-2.6-24-14.5-45.7-33.1-61.6C472.1 7.2 446.4-1.2 419.6.2c-23.3 1.2-45.3 11.2-62.8 27.6-29.4 27.7-44.2 64.9-42.2 104.2.3 5.8.9 11.6 1.8 17.3m-144-150.9c22.6-1.5 45.1-10.7 63.6-25.2 24.3-19.1 41-45.7 46.5-75.4 2-10.8.8-22-3.1-32.3C377.7-1.4 367-7.2 355.5-9.6c-27.1-5.6-55.2 1.3-76.3 19-21.9 18.3-35.3 45-37.4 73.4-1.4 18.2 2.5 36.2 11.2 52.1" stroke="var(--primary)" strokeWidth="2"/><path d="M331.41 127.11c2.1-23-4.8-46.1-19.4-64.6-18.7-23.7-46-37.8-75.7-38.6-26-.7-51.2 7.7-69.6 26-20.3 20.2-31.5 47.7-31.2 76.5.3 27.1 11.3 52.8 29.8 71.9 22.4 23 51.5 36.1 83.2 36.5h1.5c21.8 0 42.8-6.3 60.5-17.7 13-8.4 24-19.3 32.5-32.1" stroke="var(--primary)" strokeWidth="2"/><path d="M309.41 234.31c23.2-7.3 44.2-20.5 61.1-38.3 22-23.2 34.3-53.7 34.6-86.1.1-18-4.1-35.6-12.7-51.5m-203.4-12.3c-25-10-52-10.1-77.5.3-25.9 10.5-48.1 29-63.3 52.8-14.7 23-22.3 49.9-21.7 77.8 1 43.1 23.9 83.1 59.9 107.5 34.7 23.5 77.1 29.3 118.1 15.2 40.2-13.8 71.3-46.7 85.1-85.6 5.2-14.6 7.6-29.9 7.2-45.5" stroke="var(--primary)" strokeWidth="2"/></svg>
            </IllustrationContainer>
            <ContentContainer>
              <TabsContainer>
                <TabButton $isActive={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>Experience</TabButton>
                <TabButton $isActive={activeTab === 'education'} onClick={() => setActiveTab('education')}>Education</TabButton>
              </TabsContainer>
              <Card>
                {activeTab === 'experience' && (
                  <div>
                    {experiences.map((exp, index) => (
                      <ExperienceCard key={index}>
                        <JobTitle>{exp.title}</JobTitle>
                        <Company>{exp.company}</Company>
                        <ExperienceList>{exp.description.map((point, i) => <li key={i}>{point}</li>)}</ExperienceList>
                      </ExperienceCard>
                    ))}
                  </div>
                )}
                {activeTab === 'education' && (
                  <div>
                    {education.map((edu, index) => (
                      <EducationEntry key={index}>
                        <University>{edu.school}</University>
                        <Degree>{edu.degree}</Degree>
                        <Details>{edu.details}</Details>
                      </EducationEntry>
                    ))}
                  </div>
                )}
              </Card>
            </ContentContainer>
          </AboutContainer>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
};

export default About;