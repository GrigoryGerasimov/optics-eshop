import React from "react";
import PropTypes from "prop-types";

export const ProductSideImage = ({ productSideImgClass, productSideImgPath, productSideImgTitle }) => {
    return (
        <img className={productSideImgClass} src={productSideImgPath} alt={productSideImgTitle}/>
    );
};

ProductSideImage.defaultProps = {
    productSideImgClass: "w-1/3"
};

ProductSideImage.propTypes = {
    productSideImgClass: PropTypes.string,
    productSideImgPath: PropTypes.string,
    productSideImgTitle: PropTypes.string
};
