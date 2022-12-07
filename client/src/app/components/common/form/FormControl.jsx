import React from "react";
import Button from "../Button.jsx";
import { EyeIcon, EyeSlashIcon } from "../../ui/common_ui/icons";
import PropTypes from "prop-types";

const FormControl = ({ formFieldClass, label, id, type, name, value, onChange, isPasswordVisible, onShowPassword, error, ...rest }) => {
    return (
        <div className={formFieldClass}>
            {label && <label htmlFor={id} className="mr-[40px]">{label}</label>}{" "}
            <div className="flex">
                <input
                    className="w-full outline-none border-b border-gray-700 border-opacity-50 leading-9"
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
                {(name === "password" || name === "confirmPassword") && (
                    <Button
                        type="button"
                        onClick={() => onShowPassword(name, isPasswordVisible)}
                    >
                        {isPasswordVisible ? <EyeSlashIcon/> : <EyeIcon/>}
                    </Button>
                )}
            </div>
            <div>{error && <pre className="inline-block text-pink-600 text-base py-4 px-0">{error}</pre>}</div>
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
