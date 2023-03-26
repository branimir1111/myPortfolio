import './sidebarStyle.scss';
import { mainLinks } from '../utils/mainLinks';
import logo from '../assets/logo.png';
import { AiFillCloseCircle } from 'react-icons/ai';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <aside className={sidebarOpen ? 'sidebar sidebarOpen' : 'sidebar'}>
      <div className='headerCenter'>
        <header className='header'>
          <a href='./#'>
            <img src={logo} alt='logo' className='logo' />
          </a>
          <button type='button' className='closeBtn' onClick={closeSidebar}>
            <AiFillCloseCircle />
          </button>
        </header>
      </div>

      <div className='linksContainerSidebar'>
        <ul className='mainLinksSidebar'>
          {mainLinks.map((mainLink) => {
            const { id, text, url } = mainLink;
            return (
              <li key={id} className='navLinkSidebar'>
                <button
                  type='button'
                  className='linkSidebarBtn'
                  onClick={closeSidebar}
                >
                  <a href={url}>{text}</a>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
