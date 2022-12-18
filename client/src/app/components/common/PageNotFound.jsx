import React from "react";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[inherit] h-full flex flex-wrap justify-center items-center mt-[100px] pb-[10%]">
            <div className="w-full text-xl text-center py-5 my-10">Мы очень сожалеем, но искомая Вами страница не найдена!</div>
            <Button
                buttonClass="w-full bg-gray-700 text-xl text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                type="button" onClick={() => navigate(-1, { replace: true })}>Назад</Button>
        </div>
    );
};
