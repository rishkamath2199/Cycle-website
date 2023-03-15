import "../Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Link to="/">LOGO</Link>
      </div>
      <div className="links">
        <div className="link-heading" id="Home">
          <Link to="/"> Home </Link>
        </div>
        <div className="link-heading">
          <Link to="/"> About </Link>
        </div>
        <div className="link-heading">
          <Link to="/"> Download </Link>
        </div>
        <div className="link-heading">
          <Link to="/Login"> Login </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
