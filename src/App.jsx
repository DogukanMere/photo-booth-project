import './App.css';
import VideoComponent from './components/VideoComponent';
import Events from './sections/Events';
import FeaturesBooth from './sections/FeaturesBooth';
import Header from './sections/Header';
import Intro from './sections/Intro';

function App() {
  return (
    <div className='min-h-screen bg-black overflow-x-hidden scroll-mx-0'>
      <VideoComponent />
      <Intro />
      <FeaturesBooth />
      <Events />
    </div>
  );
}

export default App;
