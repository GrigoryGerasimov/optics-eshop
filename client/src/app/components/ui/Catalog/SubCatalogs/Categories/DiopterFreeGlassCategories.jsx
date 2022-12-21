import React from "react";
import { useCategories, useProducts } from "../../../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../../routes/paths";
import Loader from "../../../../common/Loader";
import PropTypes from "prop-types";

const DiopterFreeGlassCategories = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const { glassTypes, isGlassTypesLoading } = useCategories();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("glassTypes", "dioptersFree", target.id);
        onAddActiveState(target.id);
    };

    if (isGlassTypesLoading) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-end" : "hidden"}>
            {glassTypes.dioptersFree.map(glassType => (
                <li
                    key={glassType._id}
                    className={`${active === glassType.code ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`}
                    id={glassType.code}
                    onClick={handleCategoriesFilter}
                >
                    {glassType.title.replace(/\s+без\s+диоптрий/gi, "")}
                </li>
            ))}
        </ul>
    );
};

export default DiopterFreeGlassCategories;

DiopterFreeGlassCategories.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
