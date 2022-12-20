import React from "react";
import Select from "react-select";
import { convertObjectToArray } from "../../../utils/formatConversion/convertObjectToArray";
import PropTypes from "prop-types";

const FormMultiSelect = ({ formFieldClass, label, id, options, onChange, name, defaultValue, error }) => {
    const optionsData = convertObjectToArray(options);

    const handleChange = value => {
        onChange({ target: { name, value } });
    };

    const getMultiSelectClassName = () => `basic-multi-select pt-3 ${error ? "is-invalid" : ""}`;

    return (
        <div className={formFieldClass}>
            {label && <label htmlFor={id} className="mr-[40px]">{label}</label>}{" "}
            <Select
                isMulti
                options={optionsData}
                className={getMultiSelectClassName()}
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                defaultValue={defaultValue}
                closeMenuOnSelect={false}
                closeMenuOnScroll={false}
                placeholder="Выбрать варианты..."
            />
            <div>{error && <pre className="inline-block text-pink-600 text-base py-4 px-0">{error}</pre>}</div>
        </div>
    );
};

export default FormMultiSelect;

FormMultiSelect.propTypes = {
    formFieldClass: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    defaultValue: PropTypes.array,
    error: PropTypes.string
};