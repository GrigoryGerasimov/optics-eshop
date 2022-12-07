import React from "react";
import PropTypes from "prop-types";

const FormCheckboxSingle = ({ checkboxFieldClass, label, id, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        const { name, checked: value } = target;
        onChange({
            target: { name, value }
        });
    };

    return (
        <div className={checkboxFieldClass}>
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={value}
                onChange={handleChange}
            />{" "}
            <label htmlFor={id}>{label}</label>
            <div>{error && <pre>{error}</pre>}</div>
        </div>
    );
};

export default React.memo(FormCheckboxSingle);

FormCheckboxSingle.propTypes = {
    checkboxFieldClass: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    error: PropTypes.string
};
