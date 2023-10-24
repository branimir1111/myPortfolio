import './homeStyle.scss';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Branimir ', 'web developer '],
      loop: true,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='home' className='sectionContainerHome'>
      <div className='sectionCenterHome'>
        <div className='homeLeft'>
          <div className='homeLeftBg'>
            <h1 className='welcomeTitle'>Welcome!</h1>
            <h1 className='welcomeIntroduction'>
              I am <span ref={el} />
            </h1>
            <p className='welcomeText'>
              <em>
                I am a frontend web developer and I like to build functional
                web applications.
              </em>
            </p>
            <div className='btnContainer'>
              <a href='#projects'>
                <button type='button' className='projectsBtn'>
                  <AiOutlineFundProjectionScreen className='projectsIcon' />
                  <span>Projects</span>
                </button>
              </a>
              <div className='spaceBtn'></div>
              <a
                href='https://www.linkedin.com/in/branimir-djordjevic-530251226/'
                target='_blank'
              >
                <button type='button' className='linkedInBtn'>
                  <FaLinkedin className='linkedInIcon' />
                  <span>linkedIn</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='homeRight'>
          <div className='anime'>
            <span style={{ '--i': 1 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 4 }}></span>
            <span style={{ '--i': 5 }}></span>
            <span style={{ '--i': 6 }}></span>
            <span style={{ '--i': 7 }}></span>
            <span style={{ '--i': 8 }}></span>
            <span style={{ '--i': 9 }}></span>
            <span style={{ '--i': 10 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
