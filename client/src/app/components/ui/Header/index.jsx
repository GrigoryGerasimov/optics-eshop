import React from "react";
import { NavLink } from "react-router-dom";
import { metaContactsLinks, metaLayerLinks, headLayerLinks } from "./navbarLinks";
import { NavLogo } from "./NavLogo.jsx";

const Header = () => {
    return (
        <header className="w-full h-[50%] md:h-[40%] lg:h-[30%] xl:h-[20%] 2xl:h-[10%] mt-[50px]">
            <nav className="h-[50%] flex flex-row justify-evenly items-center flex-wrap">
                <NavLogo/>
                <div className="flex flex-row justify-evenly items-center flex-wrap">
                    {metaContactsLinks.map(link => (
                        <a
                            className="text-gray-700 text-opacity-95 p-6 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-200 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md"
                            key={link.id}
                            href={link.pathTo}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                {metaLayerLinks.map(link => link.urlExternal ? (
                    <a
                        className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-200 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md"
                        key={link.id}
                        href={link.pathTo}
                    >
                        <div className="w-max h-max flex flex-row flex-wrap justify-between">
                            <span className="mr-2">{link.icon}</span>{" "}
                            {link.label && <span>{link.label}</span>}
                        </div>
                    </a>
                ) : (
                    <NavLink
                        className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-200 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md"
                        key={link.id}
                        to={link.pathTo}
                    >
                        <div className="w-max h-max flex flex-row flex-wrap justify-between">
                            <span className="mr-2">{link.icon}</span>{" "}
                            {link.label && <span>{link.label}</span>}
                        </div>
                    </NavLink>
                ))}
            </nav>
            <nav className="h-[50%] flex flex-row justify-evenly items-center flex-wrap">
                {headLayerLinks.map(link => (
                    <NavLink
                        className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-200 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md"
                        key={link.id}
                        to={link.pathTo}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
