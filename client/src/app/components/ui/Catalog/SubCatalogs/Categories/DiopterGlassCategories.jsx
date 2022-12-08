import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../../routes/paths";

const DiopterGlassCategories = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("glassTypes", "diopters", target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-end" : "hidden"}>
            <li className={`${active === "#dwomen" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dwomen" onClick={handleCategoriesFilter}>Женские</li>
            <li className={`${active === "#dmen" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dmen" onClick={handleCategoriesFilter}>Мужские</li>
            <li className={`${active === "#dkids" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dkids" onClick={handleCategoriesFilter}>Детские</li>
            <li className={`${active === "#dsports" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dsports" onClick={handleCategoriesFilter}>Спортивные</li>
            <li className={`${active === "#dphotochr" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dphotochr" onClick={handleCategoriesFilter}>Фотохромные</li>
            <li className={`${active === "#dprogres" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dprogres" onClick={handleCategoriesFilter}>Прогрессивные</li>
            <li className={`${active === "#ddriver" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#ddriver" onClick={handleCategoriesFilter}>Для вождения</li>
            <li className={`${active === "#dcomp" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dcomp" onClick={handleCategoriesFilter}>Для компьютера</li>
            <li className={`${active === "#dread" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="#dread" onClick={handleCategoriesFilter}>Для чтения</li>
        </ul>
    );
};

export default DiopterGlassCategories;

DiopterGlassCategories.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
