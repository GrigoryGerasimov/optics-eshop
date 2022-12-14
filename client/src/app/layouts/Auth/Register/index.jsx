import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, FormSelect, FormCheckboxSingle } from "../../../components/common/form";
import Button from "../../../components/common/Button.jsx";
import { withAuthOption } from "../../../components/hoc/withAuthOption.jsx";
import { validatorConfig } from "./validatorConfig.js";
import { authSelectors, register } from "../../../store/authSlice.js";
import { useReceiveRolesQuery } from "../../../store/apiEndpoints";
import Loader from "../../../components/common/Loader";
import { toast } from "react-toastify";

const RegisterForm = withAuthOption(Form);

const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: "",
    adv: false,
    license: false
};

const initialPasswordState = {
    password: false,
    confirmPassword: false
};

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupError = useSelector(authSelectors.getAuthError());
    const isAuthorized = useSelector(authSelectors.getAuthorizedUserStatus());

    if (isAuthorized) navigate("/", { replace: true });

    useEffect(() => {
        if (signupError) toast.error("Ошибка регистрации! Попробуйте ещё раз!");
    }, [signupError]);

    const { isLoading: isRolesDataLoading, isSuccess: isRolesDataLoadSuccessful, data: rolesData } = useReceiveRolesQuery({ refetchOnFocus: true });

    if (isRolesDataLoading && !isRolesDataLoadSuccessful) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    const handleSubmit = data => {
        try {
            dispatch(register(data));
        } catch (err) {
            toast.error(err);
        }
    };

    return (
        <RegisterForm
            initialState={initialState}
            initialPasswordState={initialPasswordState}
            formClass="w-[50%] h-max p-[70px] text-lg text-gray-700 border-none outline-none"
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
            <FormSelect
                formFieldClass="mb-[55px]"
                label="На данном портале я собираюсь..."
                id="role"
                name="role"
                options={rolesData.data}
            />
            <FormControl
                formFieldClass="focus:bg-transparent mb-[35px]"
                label="Тел."
                id="phone"
                name="phone"
                type="phone"
                placeholder="___-___-__-__"
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
            <Button buttonClass="w-full bg-gray-700 text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-300 disabled:cursor-default disabled:opacity-50" type="submit">Отправить</Button>
        </RegisterForm>
    );
};

export default Register;
