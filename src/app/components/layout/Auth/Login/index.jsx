import React from "react";
import { Form, FormField } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import styles from "../index.module.scss";

const Login = () => {
    return (
        <div className={styles.auth_container}>
            <Form className={styles.form_container} title="Авторизация">
                <FormField className={styles.form_container_item} label="Логин"/>
                <FormField className={styles.form_container_item} label="Пароль"/>
                <Button className={styles.form_container__button_submit} type="submit" label="Войти"/>
            </Form>
        </div>
    );
};

export default Login;
