export const validateRules = {
    isRequired: data => typeof data === "boolean" ? data : Array.isArray(data) ? data.length : data.trim(),
    isEmailValid: data => /^[0-9a-zA-Z-._]+@[0-9a-zA-Z-._]+\.[0-9a-zA-Z]+$/g.test(data),
    isPasswordValid: data => /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@$%^&]).{10,}$/g.test(data),
    isPasswordConfirmed: ({ a, b }) => a === b,
    isPhone: data => /^\d{3}-\d{3}-\d{2}-\d{2}$/g.test(data),
    isURL: data => data.split(",").map(dataItem => dataItem.trim()).every(dataItem => /https?:\/\/\S+\.\S+/g.test(dataItem))
};
