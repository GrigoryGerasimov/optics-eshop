import React from "react";
import { TableBody } from "./TableBody.jsx";
import { TableHeader } from "./TableHeader.jsx";
import { TableFooter } from "./TableFooter.jsx";
import PropTypes from "prop-types";

export const Table = ({ bodyContent, tableClass, tableHeadings, onFormSwitch, onPositionDeleteCheck, onPositionEdit }) => {
    return (
        <table className={tableClass}>
            <TableHeader tableHeadings={tableHeadings}/>
            <TableFooter tableHeadings={tableHeadings} onClick={onFormSwitch}/>
            <TableBody bodyContent={bodyContent} onEdit={onPositionEdit} onDelete={onPositionDeleteCheck}/>
        </table>
    );
};

Table.propTypes = {
    bodyContent: PropTypes.array,
    tableClass: PropTypes.string,
    tableHeadings: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onFormSwitch: PropTypes.func,
    onPositionDeleteCheck: PropTypes.func,
    onPositionEdit: PropTypes.func
};
