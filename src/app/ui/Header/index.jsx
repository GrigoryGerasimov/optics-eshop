import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks.js";
import styles from "./index.module.scss";

const Header = () => {
    return (
        <nav className={styles.navbar}>
            {navbarLinks.map(link => (
                <NavLink
                    className={styles.navbar_item}
                    key={link.id}
                    to={link.pathTo}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default Header;
