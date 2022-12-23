import React from "react";
import { Outlet } from "react-router-dom";

const AuthContainer = () => {
    return (
        <div className="w-full h-full flex justify-center items-center mt-[50px]">
            <Outlet/>
        </div>
    );
};

export default AuthContainer;
