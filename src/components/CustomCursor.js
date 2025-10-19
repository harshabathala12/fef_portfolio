import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cursor = styled.div.attrs(props => ({
  style: {
    left: `${props.x}px`,
    top: `${props.y}px`,
  },
}))`
  width: 30px;
  height: 30px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, background-color 0.3s;

  &.hovered {
    width: 50px;
    height: 50px;
    background-color: rgba(0, 167, 142, 0.2);
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <Cursor x={position.x} y={position.y} className={isHovered ? 'hovered' : ''} />;
};

export default CustomCursor;