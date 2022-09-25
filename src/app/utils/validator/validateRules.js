export const validateRules = {
    isRequired: data => typeof data === "boolean" ? data : data.trim()
};
