import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonClass, type, children, ...rest }) => {
    return (
        <button
            className={buttonClass}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
};

export default React.memo(Button);

Button.propTypes = {
    buttonClass: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string])
};
