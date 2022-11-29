import React from "react";
import { Form, FormControl, FormRadio, FormCheckbox, FormSelect } from "../form";
import API from "../../../api";

export const Register = () => {
    const initialState = {
        login: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        gender: "male",
        age: "",
        birthdate: "",
        intentions: [],
        source: ""
    };
    const initialPasswordState = {
        password: false,
        confirmPassword: false
    };
    const { gender, intentions, source } = API;

    return (

        <Form
            title="Registration Form"
            initialState={initialState}
            initialPasswordState={initialPasswordState}
        >
            <FormControl
                label="Login"
                id="login"
                name="login"
                placeholder="Please create your login"
            />
            <FormControl
                label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="Please create your password"
            />
            <FormControl
                label="Password Confirmation"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Please repeat your password to confirm"
            />
            <FormControl
                label="First Name"
                id="firstName"
                name="firstName"
                placeholder="John"
            />
            <FormControl
                label="Last Name"
                id="lastName"
                name="lastName"
                placeholder="Doe"
            />
            <FormControl
                label="E-Mail"
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@example.com"
            />
            <FormRadio
                options={gender}
                label="Gender"
                name="gender"
            />
            <FormControl
                label="Age"
                id="age"
                type="number"
                name="age"
                min="18"
                max="150"
                step="1"
            />
            <FormControl
                label="Date of Birth"
                id="birthdate"
                type="date"
                name="birthdate"
            />
            <FormCheckbox
                options={intentions}
                label="What would be your primary interest in our eShop?"
                name="intentions"
            />
            <FormSelect
                options={source}
                label="Where did you learn about us from?"
                name="source"
            />
        </Form>
    );
};
