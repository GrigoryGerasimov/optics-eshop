import React from "react";
import { validatorConfig } from "./validatorConfig.js";
import { FormControl, Form } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import PropTypes from "prop-types";

const initialState = {
    img: "",
    imgAddit: "",
    title: "",
    brand: "",
    collection: "",
    glassType: "",
    frameType: "",
    lenseType: "",
    collectionTitle: "",
    productGroup: "",
    description: "",
    colors: "",
    shipmentType: "",
    license: "",
    additionalInfo: "",
    warrantyPeriod: "",
    countryOfOrigin: "",
    quantity: "",
    price: "",
    currencyCode: ""
};

export const ProductCreateForm = ({ handlePositionCreate }) => {
    const handleSubmit = data => {
        const transformedData = {
            imgAddit: data.imgAddit.split(",").map(url => url.trim()),
            params: [data.collection, data.glassType, data.frameType, data.lenseType],
            colors: data.colors.split(",").map(color => color.trim()),
            shipmentType: data.shipmentType.split(",").map(sht => sht.trim()),
            quantity: Number(data.quantity),
            price: Number(data.price)
        };
        handlePositionCreate({ ...data, ...transformedData });
    };

    return (
        <Form
            initialState={initialState}
            formClass="w-full h-max p-[70px] text-lg text-gray-700 border-none outline-none"
            title="Создать"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Титульная фотография"
                id="img"
                name="img"
                placeholder="URL:..."
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Дополнительные фотографии"
                id="imgAddit"
                name="imgAddit"
                placeholder="URL нескольких фото через запятую, напр.: https://images.com/photo-1, https://images.com/photo-2, https://images.com/photo-3..."
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Наименование артикула"
                id="title"
                name="title"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Бренд"
                id="brand"
                name="brand"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Коллекция"
                id="collection"
                name="collection"
                placeholder="Код коллекции по сезону, напр. #fw23mdeluxe"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип очков"
                id="glassType"
                name="glassType"
                placeholder="Код типа очков, напр. #dcomp"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип оправы"
                id="frameType"
                name="frameType"
                placeholder="Код типа оправы, напр. #thin"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип линз"
                id="lenseType"
                name="lenseType"
                placeholder="Код типа оправы, напр. #daily"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Наименование коллекции"
                id="collectionTitle"
                name="collectionTitle"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Группа товаров"
                id="productGroup"
                name="productGroup"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Описание"
                id="description"
                name="description"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Цветовая гамма оправы"
                id="colors"
                name="colors"
                placeholder="Несколько цветов через запятую, напр.: коричневый, серый, тёмно-синий..."
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип доставки"
                id="shipmentType"
                name="shipmentType"
                placeholder="Несколько типов доставки через запятую, напр.: доставка на дом, почта, курьер..."
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип лицензии"
                id="license"
                name="license"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Дополнительная информация"
                id="additionalInfo"
                name="additionalInfo"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Срок гарантии"
                id="warrantyPeriod"
                name="warrantyPeriod"
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Страна-производитель"
                id="countryOfOrigin"
                name="countryOfOrigin"
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
                label="Валюта"
                id="currencyCode"
                name="currencyCode"
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
    );
};

ProductCreateForm.propTypes = {
    handlePositionCreate: PropTypes.func
};
