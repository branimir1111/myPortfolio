import './footerStyle.scss';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';

const Footer = () => {
  return (
    <section className='sectionContainerFooter'>
      <footer className='sectionCenterFooter'>
        <div className='footerContent'>
          <div className='footerContentLeft'>
            <h2>BRANIMIR DjORDjEVIC</h2>
            <h2 className='juniorFullStackDeveloper'>
              Full Stack Web Developer
            </h2>
          </div>
          <div className='footerContentRight'>
            <div></div>
            <a
              href='https://www.linkedin.com/in/branimir-djordjevic-530251226/'
              target='_blank'
            >
              <FaLinkedin className='socialBtn' />
            </a>
            <a href='https://github.com/branimir1111' target='_blank'>
              <VscGithubInverted className='socialBtn' />
            </a>
            <a href='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='socialBtn' />
            </a>
            <a href='https://twitter.com/branimir1111' target='_blank'>
              <FaTwitter className='socialBtn' />
            </a>
            <a href='https://www.instagram.com/branimir_art/' target='_blank'>
              <FaInstagram className='socialBtn' />
            </a>
          </div>
        </div>
        <div className='footerCopyright'>
          <h2>
            &copy; {new Date().getFullYear()}
            <span> All rights reserved</span>
          </h2>
          <span> </span>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
