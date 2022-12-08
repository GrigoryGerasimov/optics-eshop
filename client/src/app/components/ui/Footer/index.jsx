import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks";

const Footer = () => {
    return (
        <footer className="w-full h-[10%] fixed bottom-0 flex flex-row justify-evenly items-center flex-wrap bg-gray-700">
            {navbarLinks.map(link => (
                <NavLink
                    className="w-max h-max text-xl text-yellow-200 p-2 no-underline hover:border-b hover:border-yellow-200 hover:border-opacity-50 hover:rounded active:bg-yellow-200 active:border-solid active:border-yellow-300 active:border-opacity-75 active:rounded active:text-black"
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
