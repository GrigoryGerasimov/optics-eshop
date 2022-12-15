import React from "react";
import { constants } from "../../../constants.jsx";
import PropTypes from "prop-types";

export const CardBody = ({ cardBodyClass, cardBodyMainText, cardBodyAdditionalText }) => {
    const { UNICODE: { CURRENCY: { RUB } } } = constants;

    return (
        <div className={cardBodyClass}>
            <p className="text-xl text-gray-700 text-opacity-95">{cardBodyMainText}</p>
            <pre className="text-lg text-gray-700 text-opacity-95 text-end italic">{cardBodyAdditionalText} {RUB}</pre>
        </div>
    );
};

CardBody.defaultProps = {
    cardBodyClass: "w-full h-[100px] p-5 leading-10"
};

CardBody.propTypes = {
    cardBodyClass: PropTypes.string,
    cardBodyMainText: PropTypes.string,
    cardBodyAdditionalText: PropTypes.string
};
