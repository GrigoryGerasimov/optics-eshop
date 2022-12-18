import React from "react";
import { validatorConfig } from "./validatorConfig.js";
import { FormControl, Form } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import Loader from "../../../common/Loader";
import PropTypes from "prop-types";

export const ProductEditForm = ({ positionToEdit, handlePositionUpdate }) => {
    const currentProductUnitToEdit = {
        _id: positionToEdit._id,
        title: positionToEdit.title,
        collection: positionToEdit.params?.[0],
        glassType: positionToEdit.params?.[1],
        frameType: positionToEdit.params?.[2],
        lenseType: positionToEdit.params?.[3],
        quantity: String(positionToEdit.quantity),
        price: String(positionToEdit.price),
        currencyCode: positionToEdit.currencyCode,
        img: positionToEdit.img
    };

    const handleSubmit = data => {
        const transformedData = {
            params: [data.collection, data.glassType, data.frameType, data.lenseType],
            quantity: Number(data.quantity),
            price: Number(data.price),
            lastEdited: Date.now()
        };
        handlePositionUpdate(data._id, { ...data, ...transformedData });
    };

    return Object.keys(positionToEdit).length ? (
        <Form
            initialState={currentProductUnitToEdit}
            formClass="w-full h-max p-[70px] text-lg text-gray-700 border-none outline-none"
            title={`Изменить артикул ${currentProductUnitToEdit._id}`}
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Наименование"
                id="title"
                name="title"
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
                id="quantity"
                name="quantity"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Цена"
                id="price"
                name="price"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Фото"
                id="img"
                name="img"
            />
            <Button
                buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-lg text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                type="reset"
            >
                Сброс
            </Button>
            <Button
                buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-lg text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500 disabled:cursor-default disabled:opacity-50"
                type="submit"
            >
                Отправить
            </Button>
        </Form>
    ) : <Loader/>;
};

ProductEditForm.propTypes = {
    positionToEdit: PropTypes.object,
    handlePositionUpdate: PropTypes.func
};
