import React from "react";
import PropTypes from "prop-types";

const ProductMainImage = ({ productMainImgClass, productMainImgPath, productId }) => {
    return (
        <img className={productMainImgClass} src={productMainImgPath} alt={`Заглавное изображение артикула №${productId}`}/>
    );
};

export default React.memo(ProductMainImage);

ProductMainImage.defaultProps = {
    productMainImgClass: "w-full"
};

ProductMainImage.propTypes = {
    productMainImgClass: PropTypes.string,
    productMainImgPath: PropTypes.string,
    productId: PropTypes.string
};
