import React from "react";
import { convertObjectToArray } from "../../../utils/transformation/convertObjectToArray";
import PropTypes from "prop-types";

export const TableHeader = ({ tableHeaderClass, tableHeadings }) => {
    const headings = convertObjectToArray(tableHeadings);

    return (
        <thead className={tableHeaderClass}>
            <tr>
                {headings.map(heading => <th key={heading.path} className="w-[200px]">{heading.name}</th>)}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    tableHeaderClass: PropTypes.string,
    tableHeadings: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
