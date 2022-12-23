import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { metaContactsLinks, metaLayerLinks } from "./navbarLinks";
import { NavLogo } from "./NavLogo.jsx";
import { useCatalogs } from "../../../hooks";
import UserProfile from "../UserProfile";
import { authSelectors } from "../../../store/authSlice.js";
import { UserIcon } from "../common_ui/icons";

const Header = () => {
    const { handleSubCatalogsReset } = useCatalogs();
    const isUserAuthorized = useSelector(authSelectors.getAuthorizedUserStatus());

    return (
        <header className="w-full h-[50%] md:h-[40%] lg:h-[30%] xl:h-[20%] mt-[50px]">
            <nav className="h-[50%] flex flex-row justify-evenly items-center flex-wrap">
                <NavLogo/>
                <div className="flex flex-row justify-evenly items-center flex-wrap">
                    {metaContactsLinks.map(link => (
                        <a
                            className="text-gray-700 text-opacity-95 p-6 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none"
                            key={link.id}
                            href={link.pathTo}
                            onClick={handleSubCatalogsReset}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                {metaLayerLinks.map(link => link.urlExternal ? (
                    <a
                        className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none"
                        key={link.id}
                        href={link.pathTo}
                        onClick={handleSubCatalogsReset}
                    >
                        <div className="w-max h-max flex flex-row flex-wrap justify-between">
                            <span className="mr-2">{link.icon}</span>{" "}
                            {link.label && <span>{link.label}</span>}
                        </div>
                    </a>
                ) : (
                    <NavLink
                        className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none"
                        key={link.id}
                        to={link.pathTo}
                        onClick={handleSubCatalogsReset}
                    >
                        <div className="w-max h-max flex flex-row flex-wrap justify-between">
                            <span className="mr-2">{link.icon}</span>{" "}
                            {link.label && <span>{link.label}</span>}
                        </div>
                    </NavLink>
                ))}
                <div>
                    {isUserAuthorized ? <UserProfile/> : (
                        <NavLink
                            className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none"
                            to="/auth"
                            onClick={handleSubCatalogsReset}
                        >
                            <div className="w-max h-max flex flex-row flex-wrap justify-between">
                                <span className="mr-2"><UserIcon/></span>{" "}
                                <span>Войти</span>
                            </div>
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
