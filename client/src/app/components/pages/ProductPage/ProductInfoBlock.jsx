import React from "react";
import { constants } from "../../../constants";
import PropTypes from "prop-types";

export const ProductInfoBlock = ({
    productInfoBlockClass,
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

    return (
        <div>
            <p className={productInfoBlockClass}>{title}</p>
            <p className={productInfoBlockClass}>Марка: {brand}</p>
            <p className={productInfoBlockClass}>Коллекция: {collectionTitle}</p>
            <p className={productInfoBlockClass}>Тип: {productGroup}</p>
            <p className={productInfoBlockClass}>Краткое описание: {description}</p>
            <p className={productInfoBlockClass}>Варианты расцветки: {
                Array.isArray(colors) ? colors.reduce((acc, val) => acc + ", " + val) : typeof colors === "string" ? colors : null
            }</p>
            <p className={productInfoBlockClass}>Доставка: {shipmentType}</p>
            <p className={productInfoBlockClass}>Лицензия: {license}</p>
            <p className={productInfoBlockClass}>{additionalInfo}</p>
            <p className={productInfoBlockClass}>Заводская гарантия: {warrantyPeriod}</p>
            <p className={productInfoBlockClass}>Страна-производитель: {countryOfOrigin}</p>
            <p className={productInfoBlockClass}>Цена (до вычета НДС): {price} {CURRENCY[currencyCode]}</p>
        </div>
    );
};

ProductInfoBlock.defaultProps = {
    productInfoBlockClass: "text-xl text-gray-700 text-opacity-95 leading-10 my-7"
};

ProductInfoBlock.propTypes = {
    productInfoBlockClass: PropTypes.string,
    title: PropTypes.string,
    brand: PropTypes.string,
    collectionTitle: PropTypes.string,
    productGroup: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    shipmentType: PropTypes.string,
    license: PropTypes.string,
    additionalInfo: PropTypes.string,
    warrantyPeriod: PropTypes.string,
    countryOfOrigin: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currencyCode: PropTypes.string
};
