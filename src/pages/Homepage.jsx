import React from 'react';
import VideoComponent from '../components/VideoComponent';
import Intro from '../sections/Intro';
import FeaturesBooth from '../sections/FeaturesBooth';
import Events from '../sections/Events';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home | Aura Photobooth</title>
        <link rel='aura photobooth' href='https://auraphotobooth.ca/' />
      </Helmet>
      <VideoComponent />
      <Intro />
      <FeaturesBooth />
      <Events />
    </div>
  );
};

export default Homepage;
