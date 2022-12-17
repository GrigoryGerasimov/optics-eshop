export const validateRules = {
    isRequired: data => typeof data === "boolean" ? data : data.trim(),
    isEmailValid: data => /^[0-9a-zA-Z-._]+@[0-9a-zA-Z-._]+\.[0-9a-zA-Z]+$/g.test(data),
    isPasswordValid: data => /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@$%^&]).{10,}$/g.test(data),
    isPasswordConfirmed: ({ a, b }) => a === b,
    isPhone: data => /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/g.test(data)
};
