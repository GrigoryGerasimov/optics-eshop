import React from "react";
import PropTypes from "prop-types";

export const TableFooter = ({ tableFooterClass }) => {
    return (
        <tfoot className={tableFooterClass}>
            <tr>
                <th></th>
            </tr>
        </tfoot>
    );
};

TableFooter.propTypes = {
    tableFooterClass: PropTypes.string
};
