import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CollectionSubCatalog, GlassSubCatalog, FrameSubCatalog, LenseSubCatalog } from "./SubCatalogs";
import { useProducts } from "../../hooks";
import paths from "../../../routes/paths.js";

const initialState = {
    collectionSubCatalog: false,
    glassSubCatalog: false,
    frameSubCatalog: false,
    lenseSubCatalog: false
};

const Catalog = () => {
    const [showSubCatalogs, setShowSubCatalogs] = useState(initialState);
    const [active, setActive] = useState(null);
    const { filterCatalogedProducts } = useProducts();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleAddActiveState = (id) => {
        setActive(id);
    };

    const handleRemoveActiveState = () => {
        setActive(null);
    };

    const handleSubCatalogsSwitch = ({ target }) => {
        setShowSubCatalogs(prevState => ({
            ...prevState,
            [target.id]: !showSubCatalogs[target.id]
        }));
        handleAddActiveState(target.id);
    };

    const handleSubCatalogsReset = () => {
        setShowSubCatalogs(initialState);
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("_");
        handleRemoveActiveState();
    };

    return (
        <aside className="w-[13%] text-gray-700 text-opacity-95 p-[2%] pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]">
            <ul className="leading-10">
                <li className={`${active === "collectionSubCatalog" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="collectionSubCatalog" onClick={handleSubCatalogsSwitch}>Коллекция</li>
                <CollectionSubCatalog status={showSubCatalogs.collectionSubCatalog} active={active} onAddActiveState={handleAddActiveState}/>
                <li className={`${active === "glassSubCatalog" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="glassSubCatalog" onClick={handleSubCatalogsSwitch}>Очки</li>
                <GlassSubCatalog status={showSubCatalogs.glassSubCatalog} active={active} onAddActiveState={handleAddActiveState}/>
                <li className={`${active === "frameSubCatalog" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="frameSubCatalog" onClick={handleSubCatalogsSwitch}>Оправа</li>
                <FrameSubCatalog status={showSubCatalogs.frameSubCatalog} active={active} onAddActiveState={handleAddActiveState}/>
                <li className={`${active === "lenseSubCatalog" ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="lenseSubCatalog" onClick={handleSubCatalogsSwitch}>Контактные линзы</li>
                <LenseSubCatalog status={showSubCatalogs.lenseSubCatalog} active={active} onAddActiveState={handleAddActiveState}/>
                <li className="cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none" onClick={handleSubCatalogsReset}>Показать все модели</li>
            </ul>
        </aside>
    );
};

export default Catalog;
