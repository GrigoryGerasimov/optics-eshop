import React from "react";
import PropTypes from "prop-types";

const ProductSideImage = ({ productSideImgClass, productSideImgPath, productId }) => {
    return (
        <img className={productSideImgClass} src={productSideImgPath} alt={`Заглавное изображение артикула №${productId}`}/>
    );
};

export default React.memo(ProductSideImage);

ProductSideImage.defaultProps = {
    productSideImgClass: "w-1/3"
};

ProductSideImage.propTypes = {
    productSideImgClass: PropTypes.string,
    productSideImgPath: PropTypes.string,
    productId: PropTypes.string
};
