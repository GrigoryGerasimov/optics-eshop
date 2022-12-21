import React from "react";
import { useCategories, useProducts } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../routes/paths";
import Loader from "../../../common/Loader";
import PropTypes from "prop-types";

const FrameSubCatalog = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const { frameTypes, isFrameTypesLoading } = useCategories();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("frameTypes", "type", target.id);
        onAddActiveState(target.id);
    };

    if (isFrameTypesLoading) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-center" : "hidden"}>
            {frameTypes.type.map(frameType => (
                <li
                    key={frameType._id}
                    className={`${active === frameType.code ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`}
                    id={frameType.code}
                    onClick={handleCategoriesFilter}
                >
                    {frameType.title.replace(/\s+оправа/gi, "")}
                </li>
            ))}
        </ul>
    );
};

export default FrameSubCatalog;

FrameSubCatalog.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
