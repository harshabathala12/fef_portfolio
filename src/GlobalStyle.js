import { createGlobalStyle, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-dark: #121212;
    --bg-light: #1E1E1E;
    --primary: #00A78E;
    --secondary: #9466FF;
    --text-light: #EAEAEA;
    --text-medium: #A0AEC0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: var(--text-light);
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: none;

    /* Animated Background */
    background: linear-gradient(-45deg, #121212, #1E1E1E, #1a202c, #2d3748);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: var(--text-light);
    font-weight: 700;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--text-light);
    }
  }

  ul {
    list-style-position: inside;
  }
`;