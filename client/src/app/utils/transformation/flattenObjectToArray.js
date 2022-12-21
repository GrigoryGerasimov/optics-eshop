export const flattenObjectToArray = obj => {
    const midObj = {};
    for (const extKey in obj) {
        if ((!Array.isArray(obj[extKey]) && typeof obj[extKey] === "object")) {
            for (const intKey in obj[extKey]) {
                if (!midObj[intKey]) midObj[intKey] = obj[extKey][intKey];
            }
            return Object.values(midObj).flat();
        } else if (Array.isArray(obj[extKey])) {
            return Object.values(obj).flat();
        }
    }
};
