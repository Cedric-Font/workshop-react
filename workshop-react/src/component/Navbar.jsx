import React from "react";
import "./NavBar.css";
import Footer from "./Footer";

function NavBar() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <>
   

    <nav>
      <div className="topnav" id="myTopnav">
        <div className="logo-title">
          <img src="./src/images/logo3.png" alt="" />
          <p>Pom d’API</p>
        </div>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#">Starters</a>
        <a href="#">Dishes</a>
        <a href="#">Desserts</a>
        <a href="#" className="icon" onClick={myFunction}>
          <i className="menu-icon">☰</i>
        </a>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
