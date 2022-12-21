import React from "react";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../../hooks";
import PropTypes from "prop-types";

export const Breadcrumbs = ({ itemId, itemPath }) => {
    const pathCompounds = [];
    const { findCategoryTitleById } = useCategories();

    const transformedPathArray = itemPath.map((param, i) => findCategoryTitleById(param)[i]());

    transformedPathArray.push(itemId);

    transformedPathArray.reduce((acc, val) => {
        acc = acc + "/" + val;
        pathCompounds.push(acc);
        return acc;
    }, "products");

    return (
        <div className="w-[70%] flex flex-row flex-wrap justify-center">
            {pathCompounds.map((path, index) => {
                const pathName = path.slice(path.lastIndexOf("/") + 1);

                return index < pathCompounds.length - 1 ? (
                    <React.Fragment key={path}>
                        <NavLink to={`/${path}`}>{pathName}</NavLink>
                        <span className="mx-[15px]">&gt;</span>
                    </React.Fragment>
                ) : (
                    <span key={path} className="font-extrabold">{pathName}</span>
                );
            })}
        </div>
    );
};

Breadcrumbs.propTypes = {
    itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    itemPath: PropTypes.array
};
