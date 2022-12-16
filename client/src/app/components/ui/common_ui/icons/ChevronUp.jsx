import React from "react";
import PropTypes from "prop-types";

const ChevronUp = ({ onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700 cursor-pointer" onClick={onClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    );
};

export default ChevronUp;

ChevronUp.propTypes = {
    onClick: PropTypes.func
};
