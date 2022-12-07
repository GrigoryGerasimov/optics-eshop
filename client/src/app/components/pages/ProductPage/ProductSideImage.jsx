import React from "react";
import PropTypes from "prop-types";

const ProductSideImage = ({ productSideImgClass, productSideImgPath, productSideImgTitle }) => {
    return (
        <img className={productSideImgClass} src={productSideImgPath} alt={productSideImgTitle}/>
    );
};

export default React.memo(ProductSideImage);

ProductSideImage.defaultProps = {
    productSideImgClass: "w-1/3"
};

ProductSideImage.propTypes = {
    productSideImgClass: PropTypes.string,
    productSideImgPath: PropTypes.string,
    productSideImgTitle: PropTypes.string
};
