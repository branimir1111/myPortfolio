import './aboutStyle.scss';
import portert from '../assets/banePortretSpirala.jpg';
import { FcContacts } from 'react-icons/fc';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';

const About = () => {
  return (
    <section id='about' className='sectionContainerAbout'>
      <div className='sectionCenterAbout'>
        <div className='aboutLeft'>
          <h1 className='aboutLeftTitle'>
            <span>Tools </span>
            <span>I </span>
            <span>use </span>
            <span>in </span>
            <span>my </span>
            <span>projects</span>
          </h1>
          <div className='singleToolContainer'>
            <AiFillHtml5 className='htmlIcon' />
            <div className='spanContainer'>
              <span className='htmlText'>HTML </span>
            </div>
          </div>
          <div className='singleToolContainer'>
            <FaCss3Alt className='cssIcon' />
            <div className='spanContainer'>
              <span className='cssText'>CSS </span>
            </div>
          </div>
          <div className='singleToolContainer'>
            <SiJavascript className='jsIcon' />
            <div className='spanContainer'>
              <span className='javaScriptText'>JavaScript </span>
            </div>
          </div>
          <div className='singleToolContainer'>
            <FaReact className='reactIcon' />
            <div className='spanContainer'>
              <span className='reactText'>React </span>
            </div>
          </div>
          <div className='singleToolContainer'>
            <FaNodeJs className='nodeIcon' />
            <div className='spanContainer'>
              <span className='nodeText'>Node </span>
            </div>
          </div>
          <div className='expressBg singleToolContainer'>
            <SiExpress className='expressIcon' />
            <div className='spanContainer'>
              <span className='expressText'>Express </span>
            </div>
          </div>
        </div>
        <div className='aboutRight aboutRightBg'>
          <img src={portert} alt='portret' className='portret' />

          <h1 className='aboutTitle'>About me</h1>
          <div className='underlineAbout'></div>
          <p className='aboutText'>
            <em>
              My name is Branimir Djordjevic and I am frontend web developer.{' '}
              <br />I really enjoy creating functional web applications that
              solve customer problems. In addition to the tools I already use in
              my applications, I am always open to new technologies that can
              improve my work.
            </em>
          </p>
          <a href='#contact'>
            <button type='button' className='contactBtn'>
              <FcContacts className='contactIcon' />
              <span>Contact</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
