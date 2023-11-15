import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="company-name">
          <img src="../companyLogo.jpeg" className="companyLogo" />
        </span>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input
            placeholder="🔍"
            style={{
              height: "35px",
              width: "230px",
              border: "none",
              fontSize: "19px",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="bell-icon">🔔</div>
        <div className="profile-dropdown">
          <img src="Profile.png" alt="profile" className="profileImg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
