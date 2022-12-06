import React from "react";
import PropTypes from "prop-types";

export const CardTitle = ({ cardTitleClass, cardTitleText }) => {
    return (
        <div className={cardTitleClass}>
            <p className="text-2xl text-gray-700 text-opacity-95">{cardTitleText}</p>
        </div>
    );
};

CardTitle.defaultProps = {
    cardTitleClass: "w-full h-[80px] p-5 leading-10"
};

CardTitle.propTypes = {
    cardTitleClass: PropTypes.string,
    cardTitleText: PropTypes.string
};
