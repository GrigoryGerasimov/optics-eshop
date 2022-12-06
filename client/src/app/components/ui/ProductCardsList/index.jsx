import React from "react";
import { Outlet } from "react-router-dom";

const ProductCardsList = () => {
    return (
        <div className="w-[inherit] h-full grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-7 mt-[100px] pb-[10%]">
            <Outlet/>
        </div>
    );
};

export default ProductCardsList;
