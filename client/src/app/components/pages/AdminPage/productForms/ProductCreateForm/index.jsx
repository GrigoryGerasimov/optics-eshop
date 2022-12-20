import React from "react";
import { ProductFormLayout } from "../ProductFormLayout.jsx";
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
    colors: [],
    shipmentType: [],
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
        handlePositionCreate(data);
    };

    return (
        <ProductFormLayout
            initialState={initialState}
            formTitle="Создать"
            onSubmit={handleSubmit}
        />
    );
};

ProductCreateForm.propTypes = {
    handlePositionCreate: PropTypes.func
};
