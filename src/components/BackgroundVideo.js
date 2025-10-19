import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; /* Sits behind everything */
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 18, 0.85); /* Dark overlay for text readability */
  z-index: -1;
`;

const BackgroundVideo = () => {
  return (
    <>
      <VideoContainer>
        <Video autoPlay loop muted playsInline>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
      <VideoOverlay />
    </>
  );
};

export default BackgroundVideo;