import { useState, useEffect } from "react";
import { useProducts } from "./useProducts.jsx";
import { getFromStorage, setToStorage, removeFromStorage } from "../utils/storage";

export const useShopping = () => {
    const [shoppingReservation, setShoppingReservation] = useState();
    const [totalShoppingAmount, setTotalShoppingAmount] = useState({});
    const [isPresentInCart, setPresentInCart] = useState(false);
    const { products } = useProducts();

    useEffect(() => {
        setShoppingReservation(getFromStorage("itemsToCart") || []);
    }, []);

    const handleCheckPresenceInCart = id => {
        const indexFound = shoppingReservation?.findIndex(item => item._id === id);
        if (indexFound !== -1) {
            setPresentInCart(true);
        } else setPresentInCart(false);
    };

    const handleShoppingReservation = id => {
        const reservedItem = products.find(item => item._id === id);
        setShoppingReservation(prevState => {
            prevState.push(reservedItem);
            setToStorage("itemsToCart", prevState);
            return prevState;
        });
    };

    const handleRemoveFromCart = id => {
        setShoppingReservation(prevState => {
            const stateAfterDeletion = prevState.filter(item => item._id !== id);
            setToStorage("itemsToCart", stateAfterDeletion);
            return stateAfterDeletion;
        });
        setTotalShoppingAmount(prevAmount => {
            prevAmount[id] && delete prevAmount[id];
            return prevAmount;
        });
    };

    const handleClearCart = () => removeFromStorage("itemsToCart");

    const handleTotalAmountCountUp = (id, amount) => setTotalShoppingAmount(prevAmount => ({
        ...prevAmount,
        [id]: amount
    }));

    return { shoppingReservation, totalShoppingAmount, isPresentInCart, handleClearCart, handleShoppingReservation, handleRemoveFromCart, handleTotalAmountCountUp, handleCheckPresenceInCart };
};
