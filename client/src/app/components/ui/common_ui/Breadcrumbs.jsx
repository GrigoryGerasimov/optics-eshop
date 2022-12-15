import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export const Breadcrumbs = () => {
    const { pathname } = useLocation();
    const pathCompounds = [];

    pathname.split("/").filter(path => path).reduce((acc, val) => {
        acc = acc + "/" + val;
        pathCompounds.push(acc);
        return acc;
    }, "");

    return (
        <div className="w-[70%] flex flex-row flex-wrap justify-center">
            {pathCompounds.map((path, index) => {
                const pathName = path.slice(path.lastIndexOf("/") + 1);

                return index < pathCompounds.length - 1 ? (
                    <React.Fragment key={path}>
                        <NavLink to={path}>{pathName}</NavLink>
                        <span className="mx-[15px]">&gt;</span>
                    </React.Fragment>
                ) : (
                    <span key={path} className="font-extrabold">{pathName}</span>
                );
            })}
        </div>
    );
};
