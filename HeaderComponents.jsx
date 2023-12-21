import React from "react";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <div>
      <div className="container">
        <nav className="side">
          <ul className="sidemenu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="TentangKami">About Us</Link>
            </li>
            <li>
              <Link to="YourvoiceUpdate">Yourvoice Update</Link>
            </li>
            <li>
              <Link to="YourvoiceQna">Yourvoice QnA</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default HeaderComponents;
