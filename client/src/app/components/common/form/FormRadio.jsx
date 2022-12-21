import React from "react";
import PropTypes from "prop-types";
import { convertObjectToArray } from "../../../utils/transformation/convertObjectToArray.js";

const FormRadio = ({ options, label, name, value, onChange, error }) => {
    const optionsData = convertObjectToArray(options);

    return (
        <div className="mb-3">
            <label className="form-label">
                <span className="me-3">{label}</span>{" "}
                {optionsData.map(option => (
                    <div className="form-check-inline" key={option.id}>
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.id}
                            value={option.value}
                            checked={option.value === value}
                            onChange={onChange}
                        />
                        <label className="form-check-label ms-1" htmlFor={option.id}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </label>
            {error && <div>{error}</div>}
        </div>
    );
};

export default React.memo(FormRadio);

FormRadio.propTypes = {
    options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.objectOf(PropTypes.object)]),
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
