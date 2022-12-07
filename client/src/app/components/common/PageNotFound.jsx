import React from "react";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[inherit] h-full flex flex-wrap justify-center items-center mt-[100px] pb-[10%]">
            <div className="w-full text-2xl text-center py-5 my-10">Мы очень сожалеем, но искомая Вами страница не найдена!</div>
            <Button
                buttonClass="w-full bg-gray-700 text-2xl text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer active:text-yellow-300 disabled:cursor-default disabled:opacity-50"
                type="button" onClick={() => navigate(-1, { replace: true })}>Назад</Button>
        </div>
    );
};