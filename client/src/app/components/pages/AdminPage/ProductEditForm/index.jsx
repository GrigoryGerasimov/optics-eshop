import React from "react";
import { validatorConfig } from "./validatorConfig.js";
import { FormControl, Form } from "../../../common/form";
import Button from "../../../common/Button.jsx";

const initialState = {
    name: "",
    collection: "",
    glassType: "",
    frameType: "",
    lenseType: "",
    totalQuantity: "",
    totalAmount: "",
    imgSrc: ""
};

export const ProductEditForm = () => {
    const handleSubmit = data => {
        console.log(data);
    };

    return (
        <Form
            initialState={initialState}
            formClass="w-max h-max p-[70px] text-lg text-gray-700 border-none outline-none"
            title="Изменить"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Наименование"
                id="name"
                name="name"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Коллеция"
                id="collection"
                name="collection"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Тип очков"
                id="glassType"
                name="glassType"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Тип оправы"
                id="frameType"
                name="frameType"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Тип линз"
                id="lenseType"
                name="lenseType"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Количество"
                id="totalQuantity"
                name="totalQuantity"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Стоимость"
                id="totalAmount"
                name="totalAmount"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Фото"
                id="imgSrc"
                name="imgSrc"
            />
            <Button
                buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-xl text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                type="reset"
            >
                Сброс
            </Button>
            <Button
                buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-xl text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500 disabled:cursor-default disabled:opacity-50"
                type="submit"
            >
                Отправить
            </Button>
        </Form>
    );
};
