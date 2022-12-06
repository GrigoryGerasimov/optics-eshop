import React from "react";
import PropTypes from "prop-types";

export const ProductInfoBlock = ({
    productInfoBlockClass,
    title,
    brand,
    collection,
    productGroup,
    description,
    colors,
    shipmentType,
    license,
    additionalInfo,
    warrantyPeriod,
    countryOfOrigin
}) => {
    return (
        <div>
            <p className={productInfoBlockClass}>{title}</p>
            <p className={productInfoBlockClass}>Марка: {brand}</p>
            <p className={productInfoBlockClass}>Коллекция: {collection}</p>
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
    collection: PropTypes.string,
    productGroup: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    shipmentType: PropTypes.string,
    license: PropTypes.string,
    additionalInfo: PropTypes.string,
    warrantyPeriod: PropTypes.string,
    countryOfOrigin: PropTypes.string
};
