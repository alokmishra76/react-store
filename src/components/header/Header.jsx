import React, { useState } from "react";

import "./Header.css";

import {
  FaBars,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderSearch from "../container/HeaderSearch";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {whishListProducts} = useSelector((state) => state.whishListProducts);

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
        <Link to="/">
          <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="YouTube Logo"
              className="header_logo"
            />
        </Link>
      </div>

      <div className="header_center">
        <HeaderSearch />
      </div>

      <div className="header_right">
         <div className="icon-heart-wrapper" style={{ position: "relative", display: "inline-block" }}>
           <AiFillHeart color="#ef4444" className="icon" />
           <span
             style={{
               position: "absolute",
               top: "-8px",
               right: "-16px",
               background: "gray",
               color: "#fff",
               borderRadius: "50%",
               padding: "2px 6px",
               fontSize: "12px"
             }}
           >
             {whishListProducts.length || 0}
           </span>
         </div>

          <FaBell className="icon" />
          <FaUserCircle className="icon" />
      </div>
    </header>
    </>
  );
};

export default Header;
