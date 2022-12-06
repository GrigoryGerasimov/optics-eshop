import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormControl, FormCheckboxSingle } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import { setToStorage } from "../../../../utils/storage/setToStorage.js";
import { validatorConfig } from "./validatorConfig.js";

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
            formClass="w-max h-max p-[70px] text-xl text-gray-700 border-none outline-none"
            title="Регистрация"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass="mb-[55px]"
                label="Имя пользователя"
                id="username"
                name="username"
                autoFocus
            />
            <FormControl
                formFieldClass="mb-[55px]"
                label="Имя"
                id="firstName"
                name="firstName"
            />
            <FormControl
                formFieldClass="mb-[55px]"
                label="Фамилия"
                id="lastName"
                name="lastName"
            />
            <FormControl
                formFieldClass="mb-[55px]"
                label="E-Mail"
                id="email"
                name="email"
            />
            <FormControl
                formFieldClass="mb-[55px]"
                type="password"
                label="Пароль"
                id="password"
                name="password"
                autoComplete="new-password"
            />
            <FormControl
                formFieldClass="mb-[55px]"
                type="password"
                label="Подтверждение пароля"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
            />
            <FormCheckboxSingle
                checkboxFieldClass="leading-10"
                label="Я хочу подписаться на рекламную рассылку по электронной почте"
                id="adv"
                name="adv"
            />
            <FormCheckboxSingle
                checkboxFieldClass="leading-10 mb-[55px]"
                label="Я ознакомлен и согласен с Лицензионным соглашением"
                id="license"
                name="license"
            />
            <Button buttonClass="w-full bg-gray-700 text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer active:text-yellow-300 disabled:cursor-default disabled:opacity-50" type="submit">Отправить</Button>
        </RegisterForm>
    );
};

export default Register;
