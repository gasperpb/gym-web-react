import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBg);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar scroll navbar-expand-sm fixed-top"
            : "navbar navbar-expand-sm fixed-top"
        }
      >
        <a href="#" className="navbar-brand">
          <span>A</span> RENA ACADEMIA
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                HORÁRIOS
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                PLANOS
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
