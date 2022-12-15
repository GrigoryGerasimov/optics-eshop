import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../routes/paths";

const FrameSubCatalog = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("frameTypes", "type", target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-center" : "hidden"}>
            <li className={`${active === "#classic" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#classic" onClick={handleCategoriesFilter}>Классика</li>
            <li className={`${active === "#square" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#square" onClick={handleCategoriesFilter}>Прямоугольная</li>
            <li className={`${active === "#round" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#round" onClick={handleCategoriesFilter}>Круглая</li>
            <li className={`${active === "#thick" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#thick" onClick={handleCategoriesFilter}>Широкая</li>
            <li className={`${active === "#thin" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#thin" onClick={handleCategoriesFilter}>Узкая</li>
            <li className={`${active === "#semi" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#semi" onClick={handleCategoriesFilter}>Полуоправа</li>
        </ul>
    );
};

export default FrameSubCatalog;

FrameSubCatalog.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
