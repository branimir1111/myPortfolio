import './projectsStyle.scss';
import pulsar from '../assets/Pulsar.png';
import pulsarLogo from '../assets/neutronStar1.png';
import { VscGithubInverted } from 'react-icons/vsc';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';

const Projects = () => {
  return (
    <section id='projects' className='sectionContainerProjects'>
      <div className='sectionCenterProjects'>
        <h1 className='projectsTitle'>Projects</h1>
        <div className='underline'></div>
        <p className='projectsTitleText'>
          Here you can see some of my projects
        </p>

        <div className='singleProjectContainer'>
          <div className='projectPicture'>
            <img src={pulsar} alt='Pulsar project' title='Pulsar project' />
          </div>
          <div className='projectsRight'>
            <img src={pulsarLogo} alt='pulsarlogo' />
            <h1 className='projectTitle'>Pulsar - project</h1>
            <p className='projectDescription'>
              This is my E-commerce project. It is a store for the sale of
              high-tech geodetic instruments. On the buttons below, you can
              check out the demo version of the store or the github repo if you
              want to see the source code.
              <br />
              Tools I use in this project :{' '}
              <span>
                <AiFillHtml5 id='htmlIcon' /> <FaCss3Alt id='cssIcon' />{' '}
                <SiJavascript id='javaScriptIcon' /> <FaReact id='reactIcon' />{' '}
                <FaNodeJs id='nodeIcon' /> <SiExpress id='expressIcon' />.
                Enjoy.
              </span>
            </p>
            <div className='liveGitBtnContainer'>
              <a href='https://pulsar-project.onrender.com/' target='_blank'>
                <button type='button' className='liveGitBtn liveBtn'>
                  <img src={pulsarLogo} alt='pulsarlogo' />
                  Live site
                </button>
              </a>
              <a
                href='https://github.com/branimir1111/pulsar-project-production-final'
                target='_blank'
              >
                <button type='button' className='liveGitBtn gitBtn'>
                  <VscGithubInverted className='gitHubIcon' />
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
