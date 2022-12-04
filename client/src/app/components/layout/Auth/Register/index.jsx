import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormControl, FormCheckboxSingle } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import { setToStorage } from "../../../../utils/storage/setToStorage.js";
import { validatorConfig } from "./validatorConfig.js";
import styles from "../index.module.scss";

const RegisterForm = withAuthOption(Form);

const initialState = {
    _id: "test_uuid",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adv: false,
    license: false
};

const initialPasswordState = {
    password: false,
    confirmPassword: false
};

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = data => {
        setToStorage(data._id, data).then(data => console.log(data));
        navigate("/login", { replace: true });
    };

    return (
        <RegisterForm
            initialState={initialState}
            initialPasswordState={initialPasswordState}
            formClass={styles.form_container}
            title="Регистрация"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass={styles.form_container_item}
                label="Имя пользователя"
                id="userName"
                name="userName"
                autoFocus
            />
            <FormControl
                formFieldClass={styles.form_container_item}
                label="Имя"
                id="firstName"
                name="firstName"
            />
            <FormControl
                formFieldClass={styles.form_container_item}
                label="Фамилия"
                id="lastName"
                name="lastName"
            />
            <FormControl
                formFieldClass={styles.form_container_item}
                label="E-Mail"
                id="email"
                name="email"
            />
            <FormControl
                formFieldClass={styles.form_container_item}
                type="password"
                label="Пароль"
                id="password"
                name="password"
            />
            <FormControl
                formFieldClass={styles.form_container_item}
                type="password"
                label="Подтверждение пароля"
                id="confirmPassword"
                name="confirmPassword"
            />
            <FormCheckboxSingle
                checkboxFieldClass={styles.form_container_check}
                label="Я хочу подписаться на рекламную рассылку по электронной почте"
                id="adv"
                name="adv"
            />
            <FormCheckboxSingle
                checkboxFieldClass={styles.form_container_check}
                label="Я ознакомлен и согласен с Лицензионным соглашением"
                id="license"
                name="license"
            />
            <Button buttonClass={styles.form_container__button_submit} type="submit">Отправить</Button>
        </RegisterForm>
    );
};

export default Register;
