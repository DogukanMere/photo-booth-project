import './App.css';
import VideoComponent from './components/VideoComponent';
import Events from './sections/Events';
import Header from './sections/Header';
import Intro from './sections/Intro';

function App() {
  return (
    <div className='min-h-screen min-w-screen bg-grey700'>
      <Header />
      <VideoComponent />
      <Intro />
      <Events />
    </div>
  );
}

export default App;
