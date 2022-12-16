import React from "react";
import PropTypes from "prop-types";

const ChevronDown = ({ onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700 cursor-pointer" onClick={onClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
};

export default ChevronDown;

ChevronDown.propTypes = {
    onClick: PropTypes.func
};
