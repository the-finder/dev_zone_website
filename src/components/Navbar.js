import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar">
        <h2>Dev Zone</h2>
        <div>
            <Link to="/">About Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
        </div>
    </nav>
);

export default Navbar;
