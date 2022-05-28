import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="/images/netflix_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="/images/profile_picture.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
