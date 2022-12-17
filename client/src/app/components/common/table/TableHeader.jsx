import React from "react";
import PropTypes from "prop-types";

export const TableHeader = ({ tableHeaderClass }) => {
    return (
        <thead className={tableHeaderClass}>
            <tr>
                <th></th>
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    tableHeaderClass: PropTypes.string
};
