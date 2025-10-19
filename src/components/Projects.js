import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import FadeIn from './FadeIn';

import project1Image from '../assets/projects/project1.jpg';
import project2Image from '../assets/projects/project2.jpg';
import project3Image from '../assets/projects/project3.jpg';

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: var(--bg-light);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-medium);
  flex-grow: 1;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const TechTag = styled.span`
  background-color: #2d3748;
  color: var(--text-medium);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  a {
    color: var(--text-medium);
    &:hover {
      color: var(--primary);
    }
  }
`;

const projects = [
  {
    title: 'Crowd Density Analyzer',
    description: 'Real-time crowd monitoring system using YOLOv8 with 92% precision and integrated Twilio SMS alerts.',
    tech: ['YOLOv8', 'Flask', 'OpenCV', 'Twilio'],
    repo: 'https://github.com/harshabathala12/Crowd-density-monitoring-system',
    live: '#',
    imageUrl: project1Image,
  },
  {
    title: 'Gesture-Based Virtual Mouse',
    description: 'Hardware-independent virtual mouse with 95% accuracy, enabling touchless computing via hand gestures.',
    tech: ['Python', 'MediaPipe', 'OpenCV'],
    repo: 'https://github.com/harshabathala12/Virtual-Mouse',
    live: '#',
    imageUrl: project2Image,
  },
  {
    title: 'SteamyBites AI Food Delivery',
    description: 'A full-stack platform with personalized food recommendations, achieving 30% faster search via ML.',
    tech: ['Flask', 'MongoDB', 'Scikit-learn'],
    repo: 'https://github.com/harshabathala12/SteamyBites-Food-delivery-website',
    live: '#',
    imageUrl: project3Image,
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <Container>
        <FadeIn>
          <SectionTitle>FEATURED PROJECTS</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage src={project.imageUrl} alt={`${project.title} screenshot`} />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechList>
                    {project.tech.map((tag, i) => (
                      <TechTag key={i}>{tag}</TechTag>
                    ))}
                  </TechList>
                  <ProjectLinks>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
};

export default Projects;