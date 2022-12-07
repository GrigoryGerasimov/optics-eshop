import React, { useState, useEffect } from "react";
import { Form, FormControl } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import { getFromStorage } from "../../../../utils/storage/getFromStorage.js";
import { validatorConfig } from "./validatorConfig.js";
import Loader from "../../../common/Loader.jsx";
import styles from "../index.module.scss";

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

    return Object.keys(initialState).length ? (
        <LoginForm
            initialState={initialState}
            formClass={styles.form_container}
            title="Авторизация"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass={styles.form_container_item}
                label="E-Mail"
                id="login"
                name="login"
            />
            <FormControl
                formFieldClass={styles.form_container_item}
                type="password"
                label="Пароль"
                if="password"
                name="password"
            />
            <Button buttonClass={styles.form_container__button_submit} type="submit">Войти</Button>
        </LoginForm>
    ) : <Loader/>;
};

export default Login;
