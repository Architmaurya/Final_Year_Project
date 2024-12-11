import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaRegistered, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { MdOutlineContactPhone, MdAdminPanelSettings } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import { MdPostAdd } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import "../../App.css";

function Nav() {
  const [data, setData] = useState("");
  const [userType, setUserType] = useState("");
  const nav = useNavigate();
  const location = useLocation(); // Ensure location is available.

  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem("data"));
    setData(temData);
    const temUserType =JSON.parse(localStorage.getItem("userType"));
    setUserType(temUserType || ""); // Fallback to an empty string.
  }, [location.pathname]);

  //admin Logout function
  const logout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
    nav("/admin/logIn"); // Redirect to home page or login page
  };

 //user Logout function

  const  userlogout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
    nav("/user/logIn"); // Redirect to home page or login page
  };

  // Admin Navbar
  if (userType === "admin") {
    return (
      <div className="container-fluid">
        <div className="row header bg-light">
          <div className="col-lg-2 ms-5 col-9 ps-5 pt-2">
            <img src="/bookSwaplogo.png" alt="Logo" className="img-fluid imglogo" />
          </div>
          <div className="col-lg-9 col-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="menu">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-bar">
                    <li className="nav-item">
                      <Link to="/admin" className="nav-link active nav-text">
                        <FaHome className="nav-icon" /> Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/booklist" className="nav-link nav-text">
                        <BiCategory className="nav-icon" /> BookList
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/userlist" className="nav-link nav-text">
                        <BiCategory className="nav-icon" /> UserList
                      </Link>
                    </li>
                    <li className="nav-item" onClick={logout}>
                      <Link to="#" className="nav-link nav-text">
                        <FaSignOutAlt className="nav-icon" /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  
  // User Navbar
  else if (userType === "user") {
    return (
      <div className="container-fluid">
        <div className="row header bg-light">
          <div className="col-lg-2 ms-5 col-9 ps-5 pt-2">
            <img src="/bookSwaplogo.png" alt="Logo" className="img-fluid imglogo" />
          </div>
          <div className="col-lg-9 col-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="menu">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-bar">
                    <li className="nav-item">
                      <Link to="/user" className="nav-link active nav-text">
                        <FaHome className="nav-icon" /> Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user/bookform" className="nav-link nav-text">
                        <BiCategory className="nav-icon" /> BookForm
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user/bookpost" className="nav-link nav-text">
                        <MdPostAdd className="nav-icon" /> Posted
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user/user-allbooklist" className="nav-link nav-text">
                        <MdOutlineContactPhone className="nav-icon" /> BookList
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user/request" className="nav-link nav-text">
                        <FaRegistered className="nav-icon" /> Request
                      </Link>
                    </li>
                    <li className="nav-item" onClick={userlogout}>
                      <Link to="#" className="nav-link nav-text">
                        <FaSignOutAlt className="nav-icon" /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  // Guest Navbar
  else {
    return (
      <div className="container-fluid">
        <div className="row header bg-light">
          <div className="col-lg-2 ms-5 col-9 ps-5 pt-2">
            <img src="/bookSwaplogo.png" alt="Logo" className="img-fluid imglogo" />
          </div>
          <div className="col-lg-9 col-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="menu">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-bar">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active nav-text">
                        <FaHome className="nav-icon" /> Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/category" className="nav-link nav-text">
                        <BiCategory className="nav-icon" /> Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link nav-text">
                        <FaInfoCircle className="nav-icon" /> About us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link nav-text">
                        <MdOutlineContactPhone className="nav-icon" /> Contact us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/registration" className="nav-link nav-text">
                        <FaRegistered className="nav-icon" /> Register
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="nav-link dropdown-toggle nav-text"
                      >
                        <CiLogin className="nav-icon" /> Log In
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/admin/logIn" className="dropdown-item nav-text">
                            <MdAdminPanelSettings className="nav-icon" /> Admin LogIn
                          </Link>
                        </li>
                        <li>
                          <Link to="/user/login" className="dropdown-item nav-text">
                            <FaRegUser className="nav-icon" /> User LogIn
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
