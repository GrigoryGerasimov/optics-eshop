import React from "react";
import { Outlet } from "react-router-dom";

const ProductCardsList = () => {
    return (
        <div className="w-full h-full mt-[50px]">
            <Outlet/>
        </div>
    );
};

export default ProductCardsList;
