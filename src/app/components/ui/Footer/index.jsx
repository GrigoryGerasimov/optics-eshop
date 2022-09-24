import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks";
import styles from "./index.module.scss";

const Footer = () => {
    return (
        <footer className={styles.navbar}>
            {navbarLinks.map(link => (
                <NavLink
                    className={styles.navbar_item}
                    key={link.id}
                    to={link.pathTo}
                >
                    {link.label}
                </NavLink>
            ))}
        </footer>
    );
};

export default Footer;
