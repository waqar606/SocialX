import React from "react";
import { FcSearch } from "react-icons/fc";
import { MdFilterList } from "react-icons/md";
//Toggle Bar for Dark and light theme
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
function Navbar({ toggleButton, bgColor, color, toggle }) {
  return (
    <>
      <div className="nav-bar">
        <div
          className="logo"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          WDM
          <div onClick={toggleButton}>
            {toggle ? <BsToggle2On /> : <BsToggle2Off />}{" "}
          </div>{" "}
        </div>
        <div
          className="search"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          <div
            className="left"
            style={{
              backgroundColor: `${bgColor}`,
              color: `${color}`,
            }}
          >
            <FcSearch /> Search here....
          </div>
          <div
            className="right"
            style={{
              backgroundColor: `${bgColor}`,
              color: `${color}`,
            }}
          >
            <MdFilterList /> Filter
          </div>
        </div>
        <div
          className="seller"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          Become a Seller
        </div>
      </div>
    </>
  );
}

export default Navbar;
