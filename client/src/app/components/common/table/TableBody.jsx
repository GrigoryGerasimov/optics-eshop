import React from "react";
import { convertObjectToArray } from "../../../utils/transformation/convertObjectToArray.js";
import { EditIcon, CloseIcon } from "../../ui/common_ui/icons";
import { useReceiveCurrenciesQuery } from "../../../store/backendApi.js";
import Loader from "../Loader.jsx";
import { useCategories } from "../../../hooks";
import { constants } from "../../../constants.jsx";
import PropTypes from "prop-types";

export const TableBody = ({ tableBodyClass, bodyContent, onEdit, onDelete }) => {
    const body = convertObjectToArray(bodyContent);
    const { UNICODE: { CURRENCY } } = constants;
    const { findCategoryTitleById } = useCategories();
    const { isLoading: isCurrenciesDataLoading, isSuccess: isCurrenciesDataLoadSuccessful, data: currenciesData } = useReceiveCurrenciesQuery({ refetchOnFocus: true });

    return (
        <tbody className={tableBodyClass}>
            {body.map(position => (
                <tr key={position._id} className="text-center">
                    <td className="p-5">{position._id}</td>
                    <td className="p-5">{position.title}</td>
                    {position.params.map((param, i) => <td key={param} className="p-5">{findCategoryTitleById(param)[i]()}</td>)}
                    <td className="p-5">{position.quantity}</td>
                    <td className="p-5">{position.price}</td>
                    <td className="p-5">{!isCurrenciesDataLoading && isCurrenciesDataLoadSuccessful ? CURRENCY[currenciesData?.data.find(currency => currency._id === position.currencyCode).code] : <Loader/>}</td>
                    <td className="p-5">{position.img}</td>
                    <td className="p-5 flex flex-row justify-evenly">
                        <EditIcon onClick={() => onEdit(position._id)}/>
                        <CloseIcon onClick={() => onDelete(position._id)}/>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    tableBodyClass: PropTypes.string,
    bodyContent: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};
