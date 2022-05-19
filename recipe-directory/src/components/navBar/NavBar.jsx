import './NavBar.css';
import { Link } from 'react-router-dom';
import { SearchBar } from '../index';

const NavBar = () => {
  return (
    <div className="navbar">
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
