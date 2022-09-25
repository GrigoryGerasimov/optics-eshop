import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { validate } from "../../../utils/validator/validate.js";

const Form = ({ className, title, children, initialState, onSubmit, config }) => {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);

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

    useEffect(() => {
        setErrors(validate(data, config));
    }, [data]);

    useEffect(() => {
        setIsDisabled(!!Object.keys(errors).length);
    }, [errors]);

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
                        error: errors[child.props.name],
                        disabled: isDisabled
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
    config: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
