import React from "react";
import PropTypes from "prop-types";

const FormField = ({ className, label, id, type, name, value, onChange, autoFocus, error }) => {
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>{" "}
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoFocus={autoFocus}
            />
            <div>{error && <span>{error}</span>}</div>
        </div>
    );
};

export default React.memo(FormField);

FormField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    error: PropTypes.string
};
