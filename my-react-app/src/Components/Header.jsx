import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/New-Express-Logo.png";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <header className="header">
      <div
        className="logo"
        style={{
          backgroundColor: "white",
          padding: "10px",
          display: "inline-block",
          borderRadius: "5px",
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Xpress Auto Care Logo"
            style={{ height: "50px" }}
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li className="login">
            <a
              href="#"
              onClick={toggleDropdown}
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Log In
            </a>
            {showDropdown && (
              <div
                className="dropdown-menu"
                style={{
                  border: "2px solid red",
                  padding: "10px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "4px",
                  position: "absolute",
                }}
              >
                <input
                  type="text"
                  placeholder="Username"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    padding: "5px",
                    border: "1px solid red",
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    padding: "5px",
                    border: "1px solid red",
                  }}
                />
                <button
                  style={{
                    color: "black",
                    border: "2px solid red",
                    backgroundColor: "transparent",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    marginBottom: "5px",
                  }}
                >
                  Login
                </button>
                <Link
                  to="/create-account"
                  style={{
                    color: "black",
                    border: "2px solid red",
                    backgroundColor: "transparent",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  Create Account
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
