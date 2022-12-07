import React from "react";
import PropTypes from "prop-types";

const CardImage = ({ cardImgClass, cardImgPath, cardImgTitle }) => {
    return (
        <img
            className={cardImgClass}
            src={cardImgPath}
            alt={cardImgTitle}
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
    cardImgTitle: PropTypes.string
};
