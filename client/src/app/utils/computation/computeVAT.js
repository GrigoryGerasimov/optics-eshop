export const computeVAT = price => {
    const priceToVAT = typeof price !== "number" ? Number(price) : price;
    if (isNaN(priceToVAT)) throw new Error("Цена невалидна");
    return priceToVAT + priceToVAT * 0.1;
};
