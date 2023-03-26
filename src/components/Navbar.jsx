import './navBarStyle.scss';
import { mainLinks } from '../utils/mainLinks';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = ({ setSidebarOpen }) => {
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  return (
    <nav>
      <div className='navContainer'>
        <div className='smallNavbar'>
          <a href='./#' className='logoContainer'>
            <img src={logo} alt='logo' className='logo' />
          </a>

          <button type='button' className='smallMenuBtn' onClick={openSidebar}>
            <FiMenu />
          </button>
        </div>
        <div className='linkContainer'>
          <ul className='navLinks'>
            {mainLinks.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} className='navLink'>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
