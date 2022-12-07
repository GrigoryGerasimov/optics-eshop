import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks.js";

const Header = () => {
    return (
        <nav className="h-[10%] flex flex-row justify-evenly items-center flex-wrap">
            {navbarLinks.map(link => (
                <NavLink
                    className="w-max h-max text-xl text-gray-700 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded hover:shadow-md active:bg-yellow-200 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md"
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
