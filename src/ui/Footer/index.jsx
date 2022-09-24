import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks";

const Footer = () => {
    return (
        <footer>
            {navbarLinks.map(link => <NavLink key={link.id} to={link.pathTo}>{link.label}</NavLink>)}
        </footer>
    );
};

export default Footer;
