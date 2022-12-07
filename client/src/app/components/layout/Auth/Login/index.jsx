import React, { useState, useEffect } from "react";
import { Form, FormControl } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { withAuthOption } from "../hoc/withAuthOption.jsx";
import { getFromStorage } from "../../../../utils/storage/getFromStorage.js";
import { validatorConfig } from "./validatorConfig.js";
import Loader from "../../../common/Loader.jsx";

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
            formClass="w-max h-max p-[70px] text-xl text-gray-700 border-none outline-none"
            title="Авторизация"
            onSubmit={handleSubmit}
            config={validatorConfig}
        >
            <FormControl
                formFieldClass="mb-[55px]"
                label="E-Mail"
                id="login"
                name="login"
            />
            <FormControl
                formFieldClass="mb-[55px]"
                type="password"
                label="Пароль"
                id="password"
                name="password"
                autoComplete="current-password"
            />
            <Button buttonClass="w-full bg-gray-700 text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer active:text-yellow-300 disabled:cursor-default disabled:opacity-50" type="submit">Войти</Button>
        </LoginForm>
    ) : <Loader/>;
};

export default Login;
