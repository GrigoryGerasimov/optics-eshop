import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { validate } from "../../../utils/validator/validate.js";

const Form = ({ formClass, title, children, initialState, initialPasswordState, onSubmit, config }) => {
    const [data, setData] = useState(initialState || {});
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(initialPasswordState || {});

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

    const toggleShowPassword = (name, value) => {
        setShowPassword(prevState => ({
            ...prevState,
            [name]: !value
        }));
    };

    const validateFormData = useCallback(() => {
        const error = validate(data, config);
        setErrors(error);
        return Object.keys(errors).length;
    }, [data]);

    useEffect(() => {
        if (Object.keys(data).length) {
            validateFormData();
        }
    }, [validateFormData]);

    useEffect(() => {
        setIsDisabled(!!Object.keys(errors).length);
    }, [errors]);

    return (
        <fieldset className={formClass}>
            <legend>{title}</legend>
            <form onSubmit={handleSubmit}>
                {React.Children.map(children, child => {
                    let config = {};
                    switch (child.props.type) {
                        case "submit": {
                            config = {
                                ...child.props,
                                disabled: isDisabled
                            };
                            break;
                        }
                        case "password": {
                            config = {
                                ...child.props,
                                type: showPassword[child.props.name] ? "text" : "password",
                                value: data[child.props.name],
                                isPasswordVisible: showPassword[child.props.name],
                                onShowPassword: toggleShowPassword,
                                onChange: handleChange,
                                error: errors[child.props.name]
                            };
                            break;
                        }
                        default: {
                            config = {
                                ...child.props,
                                value: data[child.props.name],
                                onChange: handleChange,
                                error: errors[child.props.name]
                            };
                            break;
                        }
                    }
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
    initialPasswordState: PropTypes.object,
    formClass: PropTypes.string,
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    config: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
