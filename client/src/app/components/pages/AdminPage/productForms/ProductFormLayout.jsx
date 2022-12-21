import React from "react";
import { FormControl, Form, FormSelect, FormMultiSelect } from "../../../common/form";
import { useCategories } from "../../../hooks";
import { validatorConfig } from "./validatorConfig.js";
import Button from "../../../common/Button.jsx";
import {
    useReceiveCountriesQuery,
    useReceiveCurrenciesQuery,
    useReceiveShipmentTypesQuery,
    useReceiveColorsQuery
} from "../../../../store/backendApi.js";
import Loader from "../../../common/Loader.jsx";
import { flattenObjectToArray } from "../../../../utils/transformation/flattenObjectToArray.js";
import PropTypes from "prop-types";

export const ProductFormLayout = ({ initialState, formTitle, onSubmit }) => {
    const { frameTypes, lenseTypes, glassTypes, collection, isCollectionLoading, isGlassTypesLoading, isFrameTypesLoading, isLenseTypesLoading } = useCategories();
    const { isLoading: isCurrenciesDataLoading, isSuccess: isCurrenciesDataLoadSuccessful, data: currenciesData } = useReceiveCurrenciesQuery({ refetchOnFocus: true });
    const { isLoading: isCountriesDataLoading, isSuccess: isCountriesDataLoadSuccessful, data: countriesData } = useReceiveCountriesQuery({ refetchOnFocus: true });
    const { isLoading: isShipmentTypesDataLoading, isSuccess: isShipmentTypesDataLoadSuccessful, data: shipmentTypesData } = useReceiveShipmentTypesQuery({ refetchOnFocus: true });
    const { isLoading: isColorsDataLoading, isSuccess: isColorsDataLoadSuccessful, data: colorsData } = useReceiveColorsQuery({ refetchOnFocus: true });

    if ((isCurrenciesDataLoading && !isCurrenciesDataLoadSuccessful) || (isCountriesDataLoading && !isCountriesDataLoadSuccessful) || (isShipmentTypesDataLoading && !isShipmentTypesDataLoadSuccessful) || (isColorsDataLoading && !isColorsDataLoadSuccessful) || isCollectionLoading || isGlassTypesLoading || isFrameTypesLoading || isLenseTypesLoading) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    const handleSubmit = data => {
        const transformedData = {
            imgAddit: data.imgAddit.split(",").map(url => url.trim()),
            params: [data.collection, data.glassType, data.frameType, data.lenseType],
            colors: data.colors.map(color => color.value ?? color),
            shipmentType: data.shipmentType.map(type => type.value ?? type),
            quantity: Number(data.quantity),
            price: Number(data.price)
        };
        onSubmit({ ...data, ...transformedData });
    };

    return (
        <Form
            initialState={formTitle.startsWith("Изменить") ? {
                ...initialState,
                colors: initialState.colors.map(color => {
                    const colorParam = colorsData.data.find(dataItem => dataItem._id === color);
                    return ({ label: colorParam.title, value: colorParam._id });
                }),
                shipmentType: initialState.shipmentType.map(sht => {
                    const shtParam = shipmentTypesData.data.find(dataItem => dataItem._id === sht);
                    return ({ label: shtParam.title, value: shtParam._id });
                })
            } : initialState}
            formClass="w-full h-max p-[70px] text-lg text-gray-700 border-none outline-none"
            title={formTitle}
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
            <FormSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Коллекция"
                id="collection"
                name="collection"
                options={flattenObjectToArray(collection)}
            />
            <FormSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип очков"
                id="glassType"
                name="glassType"
                options={flattenObjectToArray(glassTypes)}
            />
            <FormSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип оправы"
                id="frameType"
                name="frameType"
                options={flattenObjectToArray(frameTypes)}
            />
            <FormSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип линз"
                id="lenseType"
                name="lenseType"
                options={flattenObjectToArray(lenseTypes)}
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Дополнительное название коллекции"
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
            <FormMultiSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Цветовая гамма оправы"
                id="colors"
                name="colors"
                options={colorsData.data.map(color => ({ label: color.title, value: color._id }))}
            />
            <FormMultiSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Тип доставки"
                id="shipmentType"
                name="shipmentType"
                options={shipmentTypesData.data.map(type => ({ label: type.title, value: type._id }))}
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Лицензия"
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
            <FormSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Страна-производитель"
                id="countryOfOrigin"
                name="countryOfOrigin"
                options={countriesData.data}
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
            <FormSelect
                formFieldClass="focus:bg-transparent mb-[55px]"
                label="Валюта"
                id="currencyCode"
                name="currencyCode"
                options={currenciesData.data.map(currency => ({ ...currency, title: currency.code }))}
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

ProductFormLayout.propTypes = {
    initialState: PropTypes.object,
    formTitle: PropTypes.string,
    onSubmit: PropTypes.func,
    validatorConfig: PropTypes.object
};
