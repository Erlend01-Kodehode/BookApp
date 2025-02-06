import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Listing">Listing</Link>
      </nav>
    </div>
  );
}

export default Header;
