import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  background: var(--bg-light);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const SkillName = styled.p`
  font-weight: 600;
  color: var(--text-medium);
`;

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/129683134?s=200&v=4' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <Container>
        <FadeIn>
          <SectionTitle>TECHNOLOGIES I USE</SectionTitle>
          <SkillsGrid>
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
};

export default Skills;