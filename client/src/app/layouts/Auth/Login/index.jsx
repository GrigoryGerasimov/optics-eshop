import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl } from "../../../components/common/form";
import Button from "../../../components/common/Button.jsx";
import { withAuthOption } from "../../../components/hoc/withAuthOption.jsx";
import { validatorConfig } from "./validatorConfig.js";
import { login, authSelectors } from "../../../store/authSlice.js";
import { toast } from "react-toastify";

const LoginForm = withAuthOption(Form);

const initialState = {
    email: "",
    password: ""
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signinError = useSelector(authSelectors.getAuthError());
    const isAuthorized = useSelector(authSelectors.getAuthorizedUserStatus());

    if (isAuthorized) navigate("/", { replace: true });

    useEffect(() => {
        if (signinError) toast.error("Ошибка авторизации! Попробуйте ещё раз!");
    }, [signinError]);

    const handleSubmit = data => {
        try {
            dispatch(login(data));
        } catch (err) {
            toast.error(err);
        }
    };

    return (
        <LoginForm
            initialState={initialState}
            formClass="w-[30%] h-max p-[70px] text-lg text-gray-700 border-none outline-none"
            title="Авторизация"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
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
                autoComplete="current-password"
            />
            <Button buttonClass="w-full bg-gray-700 text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-300 disabled:cursor-default disabled:opacity-50" type="submit">Войти</Button>
        </LoginForm>
    );
};

export default Login;
