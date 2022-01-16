import { useContext } from "react";
import React, {useState} from "react";
import { ThemeContext } from "../../../context";
import { NavLink } from "react-router-dom";
import Toggle from "../../toggle/Toggle"
import "./header.css";

function Header() {
  //  Test Data must be removed @TODO
  const user = true;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [click, setClick] = useState(false)
  const handleClick  = () => setClick(!click)

  return (
  
      <nav className="navbar" style={{ color: darkMode && "#222" }}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ChidoDesigns
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/portfolio" activeClassName="active" className="nav-links" onClick={handleClick}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/write" activeClassName="active" className="nav-links" onClick={handleClick}>
                Write
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/settings" activeClassName="active" className="nav-links" onClick={handleClick}>
                Settings
              </NavLink>
            </li>
            {user &&
            <li className="nav-item">
              <NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                Login
              </NavLink>
            </li>
            }
            {user &&
            <li className="nav-item">
              <NavLink exact to="/logout" activeClassName="active" className="nav-links" onClick={handleClick}>
                Logout
              </NavLink>
            </li>
            }
            <li className="nav-item nav-links">
            <Toggle/>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
  );
}

export default Header;
