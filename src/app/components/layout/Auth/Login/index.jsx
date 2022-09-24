import React from "react";
import { Form, FormField } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import styles from "../index.module.scss";

const LoginForm = withAuthOption(Form);

const Login = () => {
    return (
        <div className={styles.auth_container}>
            <LoginForm className={styles.form_container} title="Авторизация">
                <FormField className={styles.form_container_item} label="Логин"/>
                <FormField className={styles.form_container_item} label="Пароль"/>
                <Button className={styles.form_container__button_submit} type="submit" label="Войти"/>
            </LoginForm>
        </div>
    );
};

export default Login;
