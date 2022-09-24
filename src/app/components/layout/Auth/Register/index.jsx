import React from "react";
import { Form, FormField, Button } from "../../../common/form";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import styles from "../index.module.scss";

const RegisterForm = withAuthOption(Form);

const Register = () => {
    return (
        <div className={styles.auth_container}>
            <RegisterForm className={styles.form_container} title="Регистрация">
                <FormField className={styles.form_container_item} label="Имя пользователя"/>
                <FormField className={styles.form_container_item} label="Имя"/>
                <FormField className={styles.form_container_item} label="Фамилия"/>
                <FormField className={styles.form_container_item} label="E-Mail"/>
                <FormField className={styles.form_container_item} label="Пароль"/>
                <Button className={styles.form_container__button_submit} type="submit" label="Отправить"/>
            </RegisterForm>
        </div>
    );
};

export default Register;
