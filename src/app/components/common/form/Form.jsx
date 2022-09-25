import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ className, title, children, initialState, onSubmit }) => {
    const [data, setData] = useState(initialState);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(data);
    };

    return (
        <fieldset className={className}>
            <legend>{title}</legend>
            <form onSubmit={handleSubmit}>
                {React.Children.map(children, child => {
                    const type = child.props.type || "text";
                    const config = {
                        ...child,
                        type,
                        value: data[child.props.name],
                        onChange: handleChange,
                        error: ""
                    };
                    return React.cloneElement(child, config);
                })
                }
            </form>
        </fieldset>
    );
};

export default Form;

Form.propTypes = {
    initialState: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
