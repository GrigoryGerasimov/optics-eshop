import React from "react";
import { Outlet } from "react-router-dom";

const ProductCardsList = () => {
    return (
        <div className="w-full h-full mt-[50px] pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]">
            <Outlet/>
        </div>
    );
};

export default ProductCardsList;
