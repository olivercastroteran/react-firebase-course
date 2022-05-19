import './NavBar.css';
import { Link } from 'react-router-dom';
import { SearchBar } from '../index';
import { useTheme } from '../../hooks/useTheme';

const NavBar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default NavBar;
