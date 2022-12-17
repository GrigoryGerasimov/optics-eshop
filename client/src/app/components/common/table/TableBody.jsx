import React from "react";
import PropTypes from "prop-types";

export const TableBody = ({ tableBodyClass }) => {
    return (
        <tbody className={tableBodyClass}></tbody>
    );
};

TableBody.propTypes = {
    tableBodyClass: PropTypes.string
};
