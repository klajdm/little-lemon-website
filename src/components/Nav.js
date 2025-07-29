import React from "react";
import { NavLink } from "react-router-dom";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    paddingRight: "3rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    boxSizing: "border-box",
  };

  const logoStyle = {
    height: "50px",
    width: "auto",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "2rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#495E57",
    fontWeight: "500",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    position: "relative",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#F4CE14",
    color: "#495E57",
    fontWeight: "600",
  };

  return (
    <nav style={navStyle}>
      <img src={littlelemon_logo} alt="Little Lemon Logo" style={logoStyle} />
      <ul style={ulStyle}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#EDEFEE";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#EDEFEE";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#EDEFEE";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#EDEFEE";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order-online"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#EDEFEE";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            onMouseEnter={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#EDEFEE";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
