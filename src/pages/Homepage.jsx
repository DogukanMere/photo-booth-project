import React from 'react';
import VideoComponent from '../components/VideoComponent';
import Intro from '../sections/Intro';
import FeaturesBooth from '../sections/FeaturesBooth';
import Events from '../sections/Events';

const Homepage = () => {
  return (
    <div>
      <VideoComponent />
      <Intro />
      <FeaturesBooth />
      <Events />
    </div>
  );
};

export default Homepage;
