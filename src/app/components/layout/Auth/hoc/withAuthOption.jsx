import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../index.module.scss";

const LoginOption = () => {
    return (
        <div className={styles.form_container__invitation}>
            <p>Уже зарегистрированы?</p>
            <p>Вы можете войти в свою учётную запись{" "}
                <Link to="/auth/login">
                    <strong>здесь</strong>
                </Link>
            </p>
        </div>
    );
};

const RegisterOption = () => {
    return (
        <div className={styles.form_container__invitation}>
            <p>Нет учётной записи? Не беда!</p>
            <p>Вы всегда можете зарегистрироваться{" "}
                <Link to="/auth/register">
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
