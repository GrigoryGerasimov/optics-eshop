import React from "react";
import { ProductFormLayout } from "../ProductFormLayout.jsx";
import Loader from "../../../../common/Loader.jsx";
import PropTypes from "prop-types";

export const ProductEditForm = ({ positionToEdit, handlePositionUpdate }) => {
    const currentProductUnitToEdit = {
        img: positionToEdit.img,
        imgAddit: positionToEdit.imgAddit?.join(", "),
        title: positionToEdit.title,
        brand: positionToEdit.brand,
        collection: positionToEdit.params?.[0],
        glassType: positionToEdit.params?.[1],
        frameType: positionToEdit.params?.[2],
        lenseType: positionToEdit.params?.[3],
        collectionTitle: positionToEdit.collectionTitle,
        productGroup: positionToEdit.productGroup,
        description: positionToEdit.description,
        colors: positionToEdit.colors,
        shipmentType: positionToEdit.shipmentType,
        license: positionToEdit.license,
        additionalInfo: positionToEdit.additionalInfo,
        warrantyPeriod: positionToEdit.warrantyPeriod,
        countryOfOrigin: positionToEdit.countryOfOrigin,
        quantity: String(positionToEdit.quantity),
        price: String(positionToEdit.price),
        currencyCode: positionToEdit.currencyCode
    };

    const handleSubmit = data => {
        handlePositionUpdate(positionToEdit._id, data);
    };

    return Object.keys(positionToEdit).length ? (
        <ProductFormLayout
            initialState={currentProductUnitToEdit}
            formTitle={`Изменить артикул №${positionToEdit._id}`}
            onSubmit={handleSubmit}
        />
    ) : <Loader/>;
};

ProductEditForm.propTypes = {
    positionToEdit: PropTypes.object,
    handlePositionUpdate: PropTypes.func
};
