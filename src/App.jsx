import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Contact from './pages/Contact';
import Weddings from './pages/Weddings';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='min-h-screen bg-black overflow-x-hidden scroll-mx-0 relative'>
      <Header />
      {/* Margin for Navbar | safe space | height of navbar */}
      <div className='mt-[100px] md:mt-[120px]'></div>

      {/* All routes */}
      <Routes>
        <Route path='/*'>
          <Route path='' index element={<Homepage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='wedding' element={<Weddings />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
