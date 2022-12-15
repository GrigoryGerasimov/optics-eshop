import React, { useState } from "react";
import { SortingIcon, SortingArrowDownIcon, SortingArrowUpIcon } from "../common_ui/icons";
import { useProducts } from "../../hooks";

const Sorting = () => {
    const [showSortingOptions, setShowSortingOptions] = useState(false);
    const [active, setActive] = useState(null);
    const { sortCatalogedProducts } = useProducts();

    const handleAddActiveState = ({ currentTarget }) => {
        const sortParams = currentTarget.id.split("-");
        setActive(currentTarget.id);
        sortCatalogedProducts(sortParams[0], sortParams[1]);
    };

    const handleSortingOptionsToggler = () => {
        setShowSortingOptions(prevState => !prevState);
    };

    return (
        <div className="w-full my-[55px]">
            <div className="flex flex-row flex-wrap justify-end cursor-pointer mb-[15px]" onClick={handleSortingOptionsToggler}>
                <SortingIcon/>
                <span className="ml-[5px]">Сортировать</span>
            </div>
            <div className={showSortingOptions ? "flex flex-row flex-wrap justify-end leading-10 mb-[10px]" : "hidden"}>
                <div className={`${active === "price-desc" ? "font-extrabold" : ""} flex flex-row flex-wrap justify-center cursor-pointer ml-[10px] hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="price-desc" onClick={handleAddActiveState}>
                    <SortingArrowDownIcon/>
                    <span className="ml-[5px]">По цене убывающе</span>
                </div>
                <div className={`${active === "price-asc" ? "font-extrabold" : ""} flex flex-row flex-wrap justify-center cursor-pointer ml-[10px] hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="price-asc" onClick={handleAddActiveState}>
                    <SortingArrowUpIcon/>
                    <span className="ml-[5px]">По цене возрастающе</span>
                </div>
                <div className={`${active === "title-desc" ? "font-extrabold" : ""} flex flex-row flex-wrap justify-center cursor-pointer ml-[10px] hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="title-desc" onClick={handleAddActiveState}>
                    <SortingArrowDownIcon/>
                    <span className="ml-[5px]">По названию убывающе</span>
                </div>
                <div className={`${active === "title-asc" ? "font-extrabold" : ""} flex flex-row flex-wrap justify-center cursor-pointer ml-[10px] hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`} id="title-asc" onClick={handleAddActiveState}>
                    <SortingArrowUpIcon/>
                    <span className="ml-[5px]">По названию возрастающе</span>
                </div>
            </div>
        </div>
    );
};

export default Sorting;
