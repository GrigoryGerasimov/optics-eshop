import React from "react";
import { TableBody } from "./TableBody.jsx";
import { TableHeader } from "./TableHeader.jsx";
import { TableFooter } from "./TableFooter.jsx";
import PropTypes from "prop-types";

export const Table = ({ tableClass, tableHeadings }) => {
    return (
        <table className={tableClass}>
            <TableHeader tableHeadings={tableHeadings}/>
            <TableFooter/>
            <TableBody/>
        </table>
    );
};

Table.propTypes = {
    tableClass: PropTypes.string,
    tableHeadings: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
