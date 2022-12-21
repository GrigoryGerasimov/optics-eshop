import React from "react";
import { convertObjectToArray } from "../../../utils/transformation/convertObjectToArray";
import Button from "../Button";
import { PlusIcon } from "../../ui/common_ui/icons";
import PropTypes from "prop-types";

export const TableFooter = ({ tableFooterClass, tableHeadings, onClick }) => {
    const headings = convertObjectToArray(tableHeadings);

    return (
        <tfoot className={tableFooterClass}>
            <tr>
                <th colSpan={headings.length}>
                    <Button
                        buttonClass="w-full bg-gray-700 text-lg text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] mt-[35px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                        type="button"
                        onClick={() => onClick("create")}
                    >
                        <div className="flex flex-row justify-center">
                            <PlusIcon/>
                            <span className="ml-[10px]">Создать новый артикул</span>
                        </div>
                    </Button>
                </th>
            </tr>
        </tfoot>
    );
};

TableFooter.propTypes = {
    tableFooterClass: PropTypes.string,
    tableHeadings: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onClick: PropTypes.func
};
