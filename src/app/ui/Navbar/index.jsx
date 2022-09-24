import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks.js";

const Navbar = () => {
    return (
        <nav>
            {navbarLinks.map(link => <NavLink key={link.id} to={link.pathTo}>{link.label}</NavLink>)}
        </nav>
    );
};

export default Navbar;
