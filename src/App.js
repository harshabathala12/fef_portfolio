import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';

// Lazy load components for performance
const Intro = lazy(() => import('./components/Intro'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const Navbar = lazy(() => import('./components/Navbar'));
const BackgroundVideo = lazy(() => import('./components/BackgroundVideo'));

const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: var(--bg-dark);
  color: var(--text-light);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader>Loading Portfolio...</Loader>}>
        <BackgroundVideo />
        <CustomCursor />
        <Navbar />
        <Header />
        <main>
          <Intro />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </Suspense>
    </>
  );
}

export default App;