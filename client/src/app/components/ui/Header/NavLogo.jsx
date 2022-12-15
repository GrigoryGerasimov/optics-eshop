import React from "react";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../hooks";

export const NavLogo = () => {
    const { filterCatalogedProducts } = useProducts();

    return (
        <NavLink to="/" className="text-4xl text-gray-700 text-opacity-95 tracking-widest" onClick={() => filterCatalogedProducts("_")}>
            OPTICS DELUXE
        </NavLink>
    );
};
