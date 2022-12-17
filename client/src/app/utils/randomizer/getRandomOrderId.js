export const getRandomOrderId = () => {
    const randomId = Math.floor(Math.random() * (100000 - 1) + 1);
    return randomId < 10 ? `00000${randomId}` : randomId < 100 ? `0000${randomId}` : randomId < 1000 ? `000${randomId}` : randomId < 10000 ? `00${randomId}` : randomId < 100000 ? `0${randomId}` : randomId;
};
