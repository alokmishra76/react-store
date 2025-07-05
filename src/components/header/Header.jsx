import React, { useState } from "react";

import "./Header.css";

import {
  FaBars,
  FaSearch,
  FaVideo,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>

             <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>


             <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>


             <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>

             <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>

             <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>
          </ul>
        </nav>
      </aside>

       {isSidebarOpen && (
        <div className="overlay" onClick={toggleSidebar}></div>
      )}

     <header className="header">
      <div className="header_left">
        <FaBars className="header_icon" onClick={toggleSidebar} />
        <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="YouTube Logo"
            className="header_logo"
          />
      </div>

      <div className="header_center">
         <input type="text" placeholder="Search" />
          <button>
            <FaSearch />
          </button>
      </div>

      <div className="header_right">
         <FaVideo className="icon" />
          <FaBell className="icon" />
          <FaUserCircle className="icon" />
      </div>
    </header>
    </>
  );
};

export default Header;
