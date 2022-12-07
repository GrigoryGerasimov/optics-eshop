import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const LoginOption = () => {
    return (
        <div className="text-center mt-[40px] leading-10">
            <p>Уже зарегистрированы?</p>
            <p>Вы можете войти в свою учётную запись{" "}
                <Link to="/auth/login" className="no-underline visited:text-gray-700 visited:text-opacity-75 active:text-yellow-300">
                    <strong>здесь</strong>
                </Link>
            </p>
        </div>
    );
};

const RegisterOption = () => {
    return (
        <div className="text-center mt-[40px] leading-10">
            <p>Нет учётной записи? Не беда!</p>
            <p>Вы всегда можете зарегистрироваться{" "}
                <Link to="/auth/register" className="no-underline visited:text-gray-700 visited:text-opacity-75 active:text-yellow-300">
                    <strong>здесь</strong>
                </Link>
            </p>
        </div>
    );
};

export const withAuthOption = Component => {
    const ChildComponent = ({ children, ...props }) => {
        const { pathname } = useLocation();
        return (
            <Component {...props}>
                {children}
                {pathname === "/auth/login" ? <RegisterOption/> : <LoginOption/>}
            </Component>
        );
    };
    ChildComponent.propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    };
    return ChildComponent;
};

withAuthOption.propTypes = {
    Component: PropTypes.element
};
