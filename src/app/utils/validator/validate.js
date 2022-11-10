import { validateRules } from "./validateRules.js";

export const validate = (data, config) => {
    const error = {};
    for (const name in data) {
        for (const rule in config[name]) {
            const { message } = config[name][rule];
            const isValid = (name === "confirmPassword" && rule === "isPasswordConfirmed") ? validateRules[rule]({ a: data.password, b: data.confirmPassword }) : validateRules[rule](data[name]);
            if (!isValid) {
                error[name] = message;
                break;
            }
        }
    }
    return error;
};
