import { useState, useEffect } from "react";
import { useProducts } from "./useProducts.jsx";

export const useShopping = () => {
    const [shoppingReservation, setShoppingReservation] = useState();
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

    return { shoppingReservation, handleShoppingReservation };
};
