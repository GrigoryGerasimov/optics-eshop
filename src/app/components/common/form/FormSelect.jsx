import React from "react";
import PropTypes from "prop-types";
import { convertObjectToArray } from "../../../utils/formatConversion/convertObjectToArray.js";

const FormSelect = ({ options, label, name, defaultValue, value, onChange, error }) => {
    const optionsData = convertObjectToArray(options);

    return (
        <div className="mb-4">
            <label className="form-label">
                <div className="mb-2">{label}</div>{" "}
                <select
                    className="form-select"
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <option disabled value={""}>{defaultValue}</option>
                    {optionsData.map(option => (
                        <option
                            key={option.id}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            {error && <div>{error}</div>}
        </div>
    );
};

export default React.memo(FormSelect);

FormSelect.defaultProps = {
    defaultValue: "Choose..."
};

FormSelect.propTypes = {
    options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.objectOf(PropTypes.object)]),
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
