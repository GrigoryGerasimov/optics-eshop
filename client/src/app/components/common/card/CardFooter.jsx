import React from "react";
import { getTimestampFormat } from "../../../utils/timestamp/getTimestampFormat.js";
import PropTypes from "prop-types";

export const CardFooter = ({ cardFooterClass, cardCreatedAt, cardEditedAt }) => {
    return (
        <div className={cardFooterClass}>
            <p className="text-sm text-opacity-50">Карточка создана:{" "}
                <output>{cardCreatedAt}</output>
            </p>
            <p className="text-sm text-opacity-50">Последнее обновление:{" "}
                <output>{getTimestampFormat(cardEditedAt)}</output>
            </p>
        </div>
    );
};

CardFooter.defaultProps = {
    cardFooterClass: "w-full h-[80px] p-5 leading-10 bg-yellow-100 bg-opacity-50"
};

CardFooter.propTypes = {
    cardFooterClass: PropTypes.string,
    cardCreatedAt: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
    cardEditedAt: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
};
