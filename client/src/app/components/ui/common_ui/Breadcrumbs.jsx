import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export const Breadcrumbs = () => {
    const { pathname } = useLocation();

    const paths = pathname.split("/").filter(path => path);

    return (
        <div className="w-[70%] flex flex-row flex-wrap justify-center">
            {paths.map((path, index) => index < paths.length - 1 ? (
                <React.Fragment key={path}>
                    <NavLink to={`/${path}`}>{path}</NavLink>
                    <span className="mx-[15px]">&gt;</span>
                </React.Fragment>
            ) : (
                <span key={path} className="font-extrabold">{path}</span>
            ))}
        </div>
    );
};
