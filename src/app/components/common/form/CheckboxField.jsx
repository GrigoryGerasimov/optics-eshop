import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({ className, label, id, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        const { name, checked: value } = target;
        onChange({
            target: { name, value }
        });
    };

    return (
        <div className={className}>
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={value}
                onChange={handleChange}
            />{" "}
            <label htmlFor={id}>{label}</label>
            <div>{error && <span>{error}</span>}</div>
        </div>
    );
};

export default CheckboxField;

CheckboxField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    error: PropTypes.string
};
