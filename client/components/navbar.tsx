import logo from "../elements/logo.png";
import "../components/navbar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [underline, setUnderline] = useState<string>("home");
  const loginpage = useNavigate();
  const handleNavigate = () => {
    loginpage("/login");
    setUnderline("login");
  };
  return (
    <nav className="navbar_main">
      <div className="logo">
        <img className="weblogo" src={logo} />
        <span className="brandname1">CodeQuest</span>
      </div>
      <div className="outercontainer">
        <ul className="navbaroptions">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AllProblems"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Problems
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/problem"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              >
              Discuss
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lastcontainer">
        <button className="loginbutton" onClick={handleNavigate}>
          Login
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
