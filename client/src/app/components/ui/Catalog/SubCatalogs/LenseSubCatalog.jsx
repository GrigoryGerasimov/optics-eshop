import React from "react";
import { useCategories, useProducts } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../routes/paths";
import Loader from "../../../common/Loader";
import PropTypes from "prop-types";

const LenseSubCatalog = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const { lenseTypes, isLenseTypesLoading } = useCategories();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("lenseTypes", "type", target.id);
        onAddActiveState(target.id);
    };

    if (isLenseTypesLoading) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-center" : "hidden"}>
            {lenseTypes.type.map(lenseType => (
                <li
                    key={lenseType._id}
                    className={`${active === lenseType.code ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`}
                    id={lenseType.code}
                    onClick={handleCategoriesFilter}
                >
                    {lenseType.title.replace(/\s+линзы/gi, "")}
                </li>
            ))}
        </ul>
    );
};

export default LenseSubCatalog;

LenseSubCatalog.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
