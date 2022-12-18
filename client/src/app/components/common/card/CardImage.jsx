import React from "react";
import PropTypes from "prop-types";

const CardImage = ({ cardImgClass, cardImgPath, cardImgProductId }) => {
    return (
        <img
            className={cardImgClass}
            src={cardImgPath}
            alt={`Титульное изображение артикула №${cardImgProductId}`}
        />
    );
};

export default React.memo(CardImage);

CardImage.defaultProps = {
    cardImgClass: "block w-full h-[250px]"
};

CardImage.propTypes = {
    cardImgClass: PropTypes.string,
    cardImgPath: PropTypes.string,
    cardImgProductId: PropTypes.string
};
