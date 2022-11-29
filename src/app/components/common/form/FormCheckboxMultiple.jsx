import React from "react";
import PropTypes from "prop-types";
import { convertObjectToArray } from "../../../utils/formatConversion/convertObjectToArray.js";

const FormCheckboxMultiple = ({ options, label, name, value, onChange, error }) => {
    const optionsData = convertObjectToArray(options);

    const handleChange = ({ target }) => {
        const { name, value: targetValue } = target;
        onChange({
            target: {
                name,
                value: ~value.indexOf(targetValue) ? value.filter(v => v !== targetValue) : [...value, targetValue]
            }
        });
    };

    return (
        <div className="mb-4">
            <label className="form-label">
                <div className="mb-2">{label}</div>{" "}
                {optionsData.map(option => (
                    <div className="form-check" key={option.id}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={option.value}
                            name={name}
                            id={option.id}
                            checked={value.includes(option.value)}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </label>
            {error && <div>{error}</div>}
        </div>
    );
};

export default React.memo(FormCheckboxMultiple);

FormCheckboxMultiple.propTypes = {
    options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.objectOf(PropTypes.object)]),
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    error: PropTypes.string
};
