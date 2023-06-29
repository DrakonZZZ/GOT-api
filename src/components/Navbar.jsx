import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isScroll, setIsScroll } = useGlobalContext();

  window.onscroll = () => {
    setIsScroll(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <nav className={isScroll ? 'navbar scrolled' : 'navbar'}>
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <a href="https://www.hbo.com/game-of-thrones">
          <img
            src="https://www.nicepng.com/png/full/55-554365_game-of-thrones-logo-transparent-for-kids-feast.png"
            alt="game of thrones"
            className="nav-img"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
