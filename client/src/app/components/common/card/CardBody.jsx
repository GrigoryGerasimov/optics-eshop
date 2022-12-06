import React from "react";
import PropTypes from "prop-types";

export const CardBody = ({ cardBodyClass, cardBodyText }) => {
    return (
        <div className={cardBodyClass}>
            <p className="text-xl text-gray-700 text-opacity-95">{cardBodyText}</p>
        </div>
    );
};

CardBody.defaultProps = {
    cardBodyClass: "w-full h-[100px] p-5 leading-10"
};

CardBody.propTypes = {
    cardBodyClass: PropTypes.string,
    cardBodyText: PropTypes.string
};
