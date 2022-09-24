import React, { useState } from "react";
import PropTypes from "prop-types";

const initialState = {
    login: "",
    password: ""
};

const Form = ({ className, title, children }) => {
    const [data, setData] = useState(initialState);

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <fieldset className={className}>
            <legend>{title}</legend>
            <form onSubmit={handleSubmit}>
                {React.Children.map(children, child => {
                    let config = {};
                    switch (child.props.type) {
                        case "submit": {
                            config = {
                                ...child,
                                type: child.props.type
                            };
                            break;
                        }
                        default: {
                            config = {
                                ...child,
                                id: data[child.props.name],
                                type: "text",
                                name: data[child.props.name],
                                value: data[child.props.value],
                                onChange: handleChange,
                                error: ""
                            };
                            break;
                        }
                    }
                    return React.cloneElement(child, config);
                })}
            </form>
        </fieldset>
    );
};

export default Form;

Form.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
