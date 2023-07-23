import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const navigateTo = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigateTo("/")}
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
        />
        <img
          onClick={() => navigateTo("/profile")}
          className="nav__avatar"
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
