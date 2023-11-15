import React from "react";
import "./Sidebar.css";

import { RiWallet3Fill } from "react-icons/Ri";
import { FaDollarSign } from "react-icons/Fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

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
            {option === "Accounts" && <RiWallet3Fill />}
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
