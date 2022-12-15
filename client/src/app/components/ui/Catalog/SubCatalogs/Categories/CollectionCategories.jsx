import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../../routes/paths";

const CollectionCategories = ({ status, season, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("collection", "season", season, target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-end" : "hidden"}>
            <li className={`${active === `#${season}mdeluxe` ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id={`#${season}mdeluxe`} onClick={handleCategoriesFilter}>Мужская Deluxe</li>
            <li className={`${active === `#${season}wdeluxe` ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id={`#${season}wdeluxe`} onClick={handleCategoriesFilter}>Женская Deluxe</li>
            <li className={`${active === `#${season}kidsteens` ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id={`#${season}kidsteens`} onClick={handleCategoriesFilter}>Дети и подростки</li>
            <li className={`${active === `#${season}unisex` ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id={`#${season}unisex`} onClick={handleCategoriesFilter}>Универсальные</li>
        </ul>
    );
};

export default CollectionCategories;

CollectionCategories.propTypes = {
    status: PropTypes.bool,
    season: PropTypes.string,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
