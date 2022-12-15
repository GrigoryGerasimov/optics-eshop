import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../../routes/paths";

const DiopterFreeGlassCategories = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("glassTypes", "dioptersFree", target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-end" : "hidden"}>
            <li className={`${active === "#dfwomen" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfwomen" onClick={handleCategoriesFilter}>Женские</li>
            <li className={`${active === "#dfmen" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfmen" onClick={handleCategoriesFilter}>Мужские</li>
            <li className={`${active === "#dfkids" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfkids" onClick={handleCategoriesFilter}>Детские</li>
            <li className={`${active === "#dfstyle" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfstyle" onClick={handleCategoriesFilter}>Имиджевые</li>
            <li className={`${active === "#dfflat" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfflat" onClick={handleCategoriesFilter}>Плоские</li>
            <li className={`${active === "#dfsun" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfsun" onClick={handleCategoriesFilter}>Солнцезащитные</li>
            <li className={`${active === "#dfswimming" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#dfswimming" onClick={handleCategoriesFilter}>Для плавания</li>
        </ul>
    );
};

export default DiopterFreeGlassCategories;

DiopterFreeGlassCategories.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
