export const setToStorage = (key, data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(data));
            resolve([key, data]);
        }, 2000);
    });
};
