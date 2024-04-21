import './App.css';
import VideoComponent from './components/VideoComponent';
import Events from './sections/Events';
import Header from './sections/Header';
import Intro from './sections/Intro';

function App() {
  return (
    <div className='min-h-screen bg-black overflow-x-hidden scroll-mx-0'>
      <Header />
      <VideoComponent />
      <Intro />
      <Events />
      <div className='w-full h-[80vh] bg-primaryLight'>d</div>
    </div>
  );
}

export default App;
