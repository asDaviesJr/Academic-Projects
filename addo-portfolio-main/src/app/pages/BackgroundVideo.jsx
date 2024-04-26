import React from 'react';

const BackgroundVideo = ({ videoUrl }) => (
  <video autoPlay muted loop playsInline className="background-video">
    <source src={videoUrl} type="video/mp4" />
  </video>
);

export default BackgroundVideo;