import React from "react";
import { useHistory } from "react-router-dom";
import { Form, FormField, Button, CheckboxField } from "../../../common/form";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import styles from "../index.module.scss";
import { setToStorage } from "../../../../utils/storage/setToStorage.js";

const RegisterForm = withAuthOption(Form);

const initialState = {
    _id: "test_uuid",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    adv: false,
    license: false
};

const Register = () => {
    const history = useHistory();

    const handleSubmit = data => {
        setToStorage(data._id, data).then(data => console.log(data));
        history.replace("/login");
    };

    return (
        <div className={styles.auth_container__register}>
            <RegisterForm
                initialState={initialState}
                className={styles.form_container}
                title="Регистрация"
                onSubmit={handleSubmit}
            >
                <FormField
                    className={styles.form_container_item}
                    label="Имя пользователя"
                    id="userName"
                    name="userName"
                />
                <FormField
                    className={styles.form_container_item}
                    label="Имя"
                    id="firstName"
                    name="firstName"
                />
                <FormField
                    className={styles.form_container_item}
                    label="Фамилия"
                    id="lastName"
                    name="lastName"
                />
                <FormField
                    className={styles.form_container_item}
                    label="E-Mail"
                    id="email"
                    name="email"
                />
                <FormField
                    className={styles.form_container_item}
                    type="password"
                    label="Пароль"
                    id="password"
                    name="password"
                />
                <CheckboxField
                    className={styles.form_container_check}
                    label="Я хочу подписаться на рекламную рассылку по электронной почте"
                    id="adv"
                    name="adv"
                />
                <CheckboxField
                    className={styles.form_container_check}
                    label="Я ознакомлен и согласен с Лицензионным соглашением"
                    id="license"
                    name="license"
                />
                <Button className={styles.form_container__button_submit} type="submit" label="Отправить"/>
            </RegisterForm>
        </div>
    );
};

export default Register;
