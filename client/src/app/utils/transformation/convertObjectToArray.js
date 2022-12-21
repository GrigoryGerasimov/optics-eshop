export const convertObjectToArray = data => !Array.isArray(data) && typeof data === "object" ? Object.values(data) : data;
