import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, label, type, disabled }) => {
    return (
        <button
            className={className}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default React.memo(Button);

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};
