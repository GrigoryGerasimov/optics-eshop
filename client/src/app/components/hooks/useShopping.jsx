import { useState, useEffect } from "react";
import { useProducts } from "./useProducts.jsx";

export const useShopping = () => {
    const [shoppingReservation, setShoppingReservation] = useState();
    const [totalShoppingAmount, setTotalShoppingAmount] = useState({});
    const { products } = useProducts();

    useEffect(() => {
        setShoppingReservation((localStorage.itemsToCart && JSON.parse(localStorage.getItem("itemsToCart"))) || []);
    }, []);

    const handleShoppingReservation = id => {
        const reservedItem = products.find(item => item._id === id);
        setShoppingReservation(prevState => {
            prevState.push(reservedItem);
            localStorage.setItem("itemsToCart", JSON.stringify(prevState));
            return prevState;
        });
    };

    const handleRemoveFromCart = id => {
        setShoppingReservation(prevState => {
            const stateAfterDeletion = prevState.filter(item => item._id !== id);
            localStorage.setItem("itemsToCart", JSON.stringify(stateAfterDeletion));
            return stateAfterDeletion;
        });
        setTotalShoppingAmount(prevAmount => {
            prevAmount[id] && delete prevAmount[id];
            return prevAmount;
        });
    };

    const handleTotalAmountCountUp = (id, amount) => setTotalShoppingAmount(prevAmount => ({
        ...prevAmount,
        [id]: amount
    }));

    return { shoppingReservation, totalShoppingAmount, handleShoppingReservation, handleRemoveFromCart, handleTotalAmountCountUp };
};
