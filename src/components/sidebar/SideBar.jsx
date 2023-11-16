import React from "react";
import "./SideBar.css";

import { FaDollarSign } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import {
  MdContacts,
  MdDashboard,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

function Sidebar({ onOptionClick }) {
  const options = [
    "Dashboard",
    "Accounts",
    "Payroll",
    "Reports",
    "Advisor",
    "Contacts",
  ];
  return (
    <div className="sidebar">
      <ul>
        {options.map((option) => (
          <li key={option} onClick={() => onOptionClick(option)}>
            {option === "Dashboard" && <MdDashboard />}
            {option === "Accounts" && <MdOutlineAccountBalanceWallet />}
            {option === "Payroll" && <FaDollarSign />}
            {option === "Reports" && <IoDocumentTextSharp />}
            {option === "Advisor" && <BsFillPersonFill />}
            {option === "Contacts" && <MdContacts />}
            <span className="menuItem">{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
