import React, { useState } from "react";
import { DiopterGlassCategories, DiopterFreeGlassCategories } from "./Categories";
import PropTypes from "prop-types";
import { useProducts } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../routes/paths";

const initialState = {
    diopters: false,
    dioptersFree: false
};

const GlassSubCatalog = ({ status, active, onAddActiveState }) => {
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
        filterCatalogedProducts("glassTypes", target.id);
        onAddActiveState(target.id);
    };

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-center" : "hidden"}>
            <li className={`${active === "diopters" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="diopters" onClick={handleCategoriesSwitch}>С диоптриями</li>
            <DiopterGlassCategories status={showCategories.diopters} active={active} onAddActiveState={onAddActiveState}/>
            <li className={`${active === "dioptersFree" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-solid active:border-gray-700 active:border-opacity-75 active:rounded active:shadow-md`} id="dioptersFree" onClick={handleCategoriesSwitch}>Без диоптрий</li>
            <DiopterFreeGlassCategories status={showCategories.dioptersFree} active={active} onAddActiveState={onAddActiveState}/>
        </ul>
    );
};

export default GlassSubCatalog;

GlassSubCatalog.propTypes = {
    status: PropTypes.bool,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
