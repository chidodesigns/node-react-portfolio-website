import { useContext } from "react";
import { ThemeContext } from "../../../context";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  //  Test Data must be removed @TODO
  const user = true;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="top" style={{ color: darkMode && "#222" }}>
      <div className="topLeft">
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-github-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/blog" className="link">
              BLOG
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/portfolio" className="link">
              PORTFOLIO
            </Link>
          </li>
          <li className="topListItem">
            {user && (
               <Link to="/write" className="link">
               WRITE
             </Link>
            )}
          </li>
          <li className="topListItem">
            {user && (
               <Link to="/settings" className="link">
               SETTINGS
             </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user && (
        <img
          className="topImg"
          src="https://avatars.githubusercontent.com/u/22502303?v=4"
          alt=""
        />
        )
        }
        {user && (
           <ul className="topList">
           <li className="topListItem">LOGIN</li>
           <li className="topListItem">LOGOUT</li>
         </ul>
        )}
        <i className=" topSearchIcon fas fa-search"></i>
      </div>

    </div>
  );
}

export default Header;
