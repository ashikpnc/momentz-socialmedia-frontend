import "./style.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Friends,
  FriendsActive,
  Home,
  HomeActive,
  Messenger,
  Search,
} from "../../svg";
import SearchMenu from "./SearchMenu";
import { useSelector } from "react-redux";
import UserMenu from "./userMenu";

export default function Header({ page, setChat }) {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#65676b";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <img alt="logo" src="./icons/favicon.png" />
          </div>
        </Link>
        <div
          className="search"
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <Search color={color} />
          <input type="text" placeholder="Search Moments" />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu
          color={color}
          token={user.token}
          setShowSearchMenu={setShowSearchMenu}
        />
      )}
      <div className="header_middle">
        <Link
          to="/"
          className={`middle_icon ${page === "home" ? "active" : "hover1"}`}
        >
          {page === "home" ? <HomeActive /> : <Home color={color} />}
        </Link>
        <Link
          to="/relations"
          className={`middle_icon ${
            page === "relations" ? "active" : "hover1"
          }`}
        >
          {page === "relations" ? <FriendsActive /> : <Friends color={color} />}
        </Link>
      </div>
      <div className="header_right">
        <div
          className="circle_icon hover1"
          onClick={() => setChat((prev) => !prev)}
        >
          <Messenger />
        </div>
        <Link
          to="/profile"
          className={`profile_link hover1 ${
            page === "profile" ? "active_link" : ""
          }`}
        >
          <img src={user?.picture} alt="profile pic" />
          <span>{user?.first_name}</span>
        </Link>
        <div
          className={`circle_icon hover1 ${showUserMenu && "active_header"}`}
          onClick={() => {
            setShowUserMenu((prev) => !prev);
          }}
        >
          <div>
            <ArrowDown />
          </div>
        </div>
        {showUserMenu && <UserMenu />}
      </div>
    </header>
  );
}
