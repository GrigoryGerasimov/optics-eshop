import React from "react";
import Button from "../Button.jsx";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const FormControl = ({ formFieldClass, label, id, type, name, value, onChange, isPasswordVisible, onShowPassword, error, ...rest }) => {
    return (
        <div className={formFieldClass}>
            <label htmlFor={id}>{label}</label>{" "}
            <div className={styles.form__internal_wrapper}>
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
                {(name === "password" || name === "confirmPassword") && (
                    <Button
                        buttonClass=""
                        type="button"
                        onClick={() => onShowPassword(name, isPasswordVisible)}
                    >
                        {isPasswordVisible ? "Скрыть" : "Показать"}
                        {/* <i className={`bi bi-eye${isPasswordVisible ? "-slash" : ""}`}></i> */}
                    </Button>
                )}
            </div>
            <div>{error && <pre>{error}</pre>}</div>
        </div>
    );
};

export default React.memo(FormControl);

FormControl.defaultProps = {
    type: "text"
};

FormControl.propTypes = {
    formFieldClass: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isPasswordVisible: PropTypes.bool,
    onShowPassword: PropTypes.func,
    error: PropTypes.string
};
