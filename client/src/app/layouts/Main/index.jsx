import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="w-[inherit] h-full flex justify-center items-center mt-[50px] pb-[10%]">
            <Outlet/>
        </div>
    );
};

export default Main;
