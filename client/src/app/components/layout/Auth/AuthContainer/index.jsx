import React from "react";
import { Outlet } from "react-router-dom";

const AuthContainer = () => {
    return (
        <div className="w-[inherit] h-full flex justify-center items-center mt-[100px] pb-[10%]">
            <Outlet/>
        </div>
    );
};

export default AuthContainer;
