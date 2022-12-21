import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "./navbarLinks";
import { useCatalogs } from "../../hooks";

const Footer = () => {
    const { handleSubCatalogsReset } = useCatalogs();

    return (
        <footer className="w-full h-[10%] fixed bottom-0 flex flex-row justify-evenly items-center flex-wrap bg-gray-700">
            {navbarLinks.map(link => (
                <NavLink
                    className="w-max h-max text-xl text-yellow-200 p-2 no-underline hover:border-b hover:border-yellow-200 hover:border-opacity-50 hover:rounded active:bg-yellow-200 active:text-black active:border-none"
                    key={link.id}
                    to={link.pathTo}
                    onClick={handleSubCatalogsReset}
                >
                    {link.label}
                </NavLink>
            ))}
        </footer>
    );
};

export default Footer;
