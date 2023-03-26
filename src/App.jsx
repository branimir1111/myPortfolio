import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className='backToTop'>
        <a href='./#'>
          <AiOutlineArrowUp className='backToTopIcon' />
        </a>
      </div>
    </>
  );
};

export default App;
