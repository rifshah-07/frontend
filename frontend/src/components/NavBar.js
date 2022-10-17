import React from 'react'
import { NavLink } from 'react-router-dom'
import './chat.css'

const NavBar = () => {
  return (
    <>
  {/* Navbar */}
  <nav
    className="navbar navbar-expand-md navbar-dark bg-primary "
    
  >
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
      <a className="navbar-brand" href="#">
        My React app
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Link */}
          <li className="nav-item">
            <NavLink className="nav-link" to="loginpage">
              Login
            </NavLink>
              Link
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="homepage">
              Home
            </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="event">
              Event Handling
            </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="todo">
              ToDO app
            </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="signup">
              Sign Up
            </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="chats">
              Chats
            </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="manageUser">
              Manage User
            </NavLink>
            </li>
        </ul>
        {/* Icons */}
        <ul className="navbar-nav d-flex flex-row me-1">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
        {/* Search */}
        <form className="w-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default NavBar