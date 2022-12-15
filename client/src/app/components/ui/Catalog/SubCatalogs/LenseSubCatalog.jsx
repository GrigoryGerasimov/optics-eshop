import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../routes/paths";

const LenseSubCatalog = ({ status, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("lenseTypes", "type", target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-center" : "hidden"}>
            <li className={`${active === "#daily" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#daily" onClick={handleCategoriesFilter}>Однодневные</li>
            <li className={`${active === "#everyday" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#everyday" onClick={handleCategoriesFilter}>Двухдневные</li>
            <li className={`${active === "#monthly" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#monthly" onClick={handleCategoriesFilter}>От 1 до 3 месяцев</li>
            <li className={`${active === "#hygiene" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="#hygiene" onClick={handleCategoriesFilter}>Растворы и средства для очистки</li>
        </ul>
    );
};

export default LenseSubCatalog;

LenseSubCatalog.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
