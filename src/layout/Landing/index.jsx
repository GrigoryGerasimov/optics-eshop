import React from "react";
import PropTypes from "prop-types";

const Landing = ({ children }) => {
    return (
        <>
            <div>Landing</div>
            {children}
        </>
    );
};

export default Landing;

Landing.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
