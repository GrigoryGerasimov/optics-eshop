import React from "react";
import { Outlet } from "react-router-dom";

const ProductCardsList = () => {
    return (
        <div className="w-[inherit] h-full mt-[50px] pb-[10%]">
            <Outlet/>
        </div>
    );
};

export default ProductCardsList;
