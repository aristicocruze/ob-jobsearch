import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/" className="link">
          <span className="homepage">OpenVitae - Ofertas</span>
        </Link>
      </div>
      <div className="create-post">
        <Link to="create" className="link">
          <span className="post">POST</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
