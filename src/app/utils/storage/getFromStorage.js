export const getFromStorage = key => {
    return new Promise(resolve => {
        setTimeout(() => resolve(localStorage.getItem(key)), 2000);
    });
};
