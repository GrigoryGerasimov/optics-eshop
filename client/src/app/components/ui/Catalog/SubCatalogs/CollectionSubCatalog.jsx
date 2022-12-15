import React, { useState } from "react";
import { CollectionCategories } from "./Categories";
import { useProducts } from "../../../hooks";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import paths from "../../../../routes/paths";

const initialState = {
    ss22: false,
    fw22: false,
    ss23: false,
    fw23: false
};

const CollectionSubCatalog = ({ status, active, onAddActiveState }) => {
    const [showCategories, setShowCategories] = useState(initialState);
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesSwitch = ({ target }) => {
        setShowCategories(prevState => ({
            ...prevState,
            [target.id]: !showCategories[target.id]
        }));
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("collection", "season", target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-center" : "hidden"}>
            <li className={`${active === "ss22" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="ss22" onClick={handleCategoriesSwitch}>Весна-Лето 2022</li>
            <CollectionCategories status={showCategories.ss22} season="ss22" active={active} onAddActiveState={onAddActiveState}/>
            <li className={`${active === "fw22" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="fw22" onClick={handleCategoriesSwitch}>Осень-Зима 2022</li>
            <CollectionCategories status={showCategories.fw22} season="fw22" active={active} onAddActiveState={onAddActiveState}/>
            <li className={`${active === "ss23" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="ss23" onClick={handleCategoriesSwitch}>Весна-Лето 2023</li>
            <CollectionCategories status={showCategories.ss23} season="ss23" active={active} onAddActiveState={onAddActiveState}/>
            <li className={`${active === "fw23" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="fw23" onClick={handleCategoriesSwitch}>Осень-Зима 2023</li>
            <CollectionCategories status={showCategories.fw23} season="fw23" active={active} onAddActiveState={onAddActiveState}/>
        </ul>
    );
};

export default CollectionSubCatalog;

CollectionSubCatalog.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
