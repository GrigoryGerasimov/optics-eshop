import React from "react";
import PropTypes from "prop-types";

const ProductMainImage = ({ productMainImgClass, productMainImgPath, productMainImgTitle }) => {
    return (
        <img className={productMainImgClass} src={productMainImgPath} alt={productMainImgTitle}/>
    );
};

export default React.memo(ProductMainImage);

ProductMainImage.defaultProps = {
    productMainImgClass: "w-full"
};

ProductMainImage.propTypes = {
    productMainImgClass: PropTypes.string,
    productMainImgPath: PropTypes.string,
    productMainImgTitle: PropTypes.string
};
