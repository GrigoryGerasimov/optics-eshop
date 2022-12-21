import React from "react";
import PropTypes from "prop-types";
import { convertObjectToArray } from "../../../utils/transformation/convertObjectToArray.js";

const FormSelect = ({ formFieldClass, options, label, id, name, defaultValue, value, onChange, error }) => {
    const optionsData = convertObjectToArray(options);

    return (
        <div className={formFieldClass}>
            {label && <label htmlFor={id} className="mr-[40px]">{label}</label>}{" "}
            <select
                className="w-full py-3 outline-none border-b border-gray-700 border-opacity-50 leading-9"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option disabled value={""}>{defaultValue}</option>
                {optionsData.map(option => (
                    <option
                        key={option._id}
                        value={option._id}
                    >
                        {option.title}
                    </option>
                ))}
            </select>
            <div>{error && <pre className="inline-block text-pink-600 text-base py-4 px-0">{error}</pre>}</div>
        </div>
    );
};

export default React.memo(FormSelect);

FormSelect.defaultProps = {
    defaultValue: "Выбрать вариант..."
};

FormSelect.propTypes = {
    formFieldClass: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    label: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
