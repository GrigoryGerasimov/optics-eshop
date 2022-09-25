import React, { useState, useEffect } from "react";
import { Form, FormField } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import { getFromStorage } from "../../../../utils/storage/getFromStorage.js";
import styles from "../index.module.scss";
import { validatorConfig } from "./validatorConfig.js";

const LoginForm = withAuthOption(Form);

const Login = () => {
    const [initialState, setInitialState] = useState({});

    useEffect(() => {
        getFromStorage("test_uuid").then(data => {
            const response = JSON.parse(data);
            setInitialState(response?._id ? {
                login: response.email,
                password: response.password
            } : {
                login: "",
                password: ""
            });
        });
    }, []);

    const handleSubmit = data => {
        console.log(data);
    };

    return (
        <div className={styles.auth_container__login}>
            {Object.keys(initialState).length ? (
                <LoginForm
                    initialState={initialState}
                    className={styles.form_container}
                    title="Авторизация"
                    onSubmit={handleSubmit}
                    config={validatorConfig}
                >
                    <FormField
                        className={styles.form_container_item}
                        label="E-Mail"
                        id="login"
                        name="login"
                    />
                    <FormField
                        className={styles.form_container_item}
                        type="password"
                        label="Пароль"
                        if="password"
                        name="password"
                    />
                    <Button className={styles.form_container__button_submit} type="submit" label="Войти"/>
                </LoginForm>
            ) : "Загрузка..."}
        </div>
    );
};

export default Login;
