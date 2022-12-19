import React from "react";
import { constants } from "../../../constants";
import { useReceiveShipmentTypeByIdQuery, useReceiveColorByIdQuery, useReceiveCountryByIdQuery, useReceiveCurrencyByIdQuery } from "../../../store/backendApi";
import Loader from "../../common/Loader.jsx";
import PropTypes from "prop-types";

export const ProductInfoBlock = ({
    productInfoBlockClass,
    listStyleTypeClass,
    title,
    brand,
    collectionTitle,
    productGroup,
    description,
    colors,
    shipmentType,
    license,
    additionalInfo,
    warrantyPeriod,
    countryOfOrigin,
    price,
    currencyCode
}) => {
    const { UNICODE: { CURRENCY } } = constants;

    const shipmentTypeData = shipmentType.map(sht => {
        const { data: shipmentTypeData } = useReceiveShipmentTypeByIdQuery(sht, { refetchOnFocus: true });
        return { code: shipmentTypeData?.data?.code, title: shipmentTypeData?.data?.title.toLowerCase() };
    });

    const colorData = colors.map(color => {
        const { data: colorData } = useReceiveColorByIdQuery(color, { refetchOnFocus: true });
        return { code: colorData?.data?.code, title: colorData?.data?.title.toLowerCase() };
    });

    const { isLoading: isCountryDataLoading, isSuccess: isCountryDataLoadSuccessful, data: countryData } = useReceiveCountryByIdQuery(countryOfOrigin, { refetchOnFocus: true });

    const { isLoading: isCurrencyDataLoading, isSuccess: isCurrencyDataLoadSuccessful, data: currencyData } = useReceiveCurrencyByIdQuery(currencyCode, { refetchOnFocus: true });

    return (
        <div>
            <div className={productInfoBlockClass}>{title}</div>
            <div className={productInfoBlockClass}>Марка: {brand}</div>
            <div className={productInfoBlockClass}>Коллекция: {collectionTitle}</div>
            <div className={productInfoBlockClass}>Тип: {productGroup}</div>
            <div className={productInfoBlockClass}>Краткое описание: {description}</div>
            <div className={productInfoBlockClass}>Варианты расцветки:{" "}
                <ul>{colorData.map((color, i) => color.code && color.title ? <li key={color.code} className={listStyleTypeClass}>{color.title}</li> : <Loader key={i}/>)}</ul>
            </div>
            <div className={productInfoBlockClass}>Доставка:{" "}
                <ul>{shipmentTypeData.map((type, i) => type.code && type.title ? <li key={type.code} className={listStyleTypeClass}>{type.title}</li> : <Loader key={i}/>)}</ul>
            </div>
            <div className={productInfoBlockClass}>Лицензия: {license}</div>
            <div className={productInfoBlockClass}>{additionalInfo}</div>
            <div className={productInfoBlockClass}>Заводская гарантия: {warrantyPeriod}</div>
            <div className={productInfoBlockClass}>Страна-производитель: {!isCountryDataLoading && isCountryDataLoadSuccessful ? countryData?.data?.title : <Loader/>}</div>
            <div className={productInfoBlockClass}>Цена (до вычета НДС): {price} {!isCurrencyDataLoading && isCurrencyDataLoadSuccessful ? CURRENCY[currencyData?.data?.code] : <Loader/>}</div>
        </div>
    );
};

ProductInfoBlock.defaultProps = {
    productInfoBlockClass: "text-lg text-gray-700 text-opacity-95 leading-10 my-7",
    listStyleTypeClass: "list-inside list-square"
};

ProductInfoBlock.propTypes = {
    productInfoBlockClass: PropTypes.string,
    listStyleTypeClass: PropTypes.string,
    title: PropTypes.string,
    brand: PropTypes.string,
    collectionTitle: PropTypes.string,
    productGroup: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    shipmentType: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    license: PropTypes.string,
    additionalInfo: PropTypes.string,
    warrantyPeriod: PropTypes.string,
    countryOfOrigin: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currencyCode: PropTypes.string
};
