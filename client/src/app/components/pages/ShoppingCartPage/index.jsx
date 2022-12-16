import React from "react";
import { useShopping } from "../../hooks";
import ShoppingCardPosition from "./ShoppingCardPosition";
import { Divider } from "../../common/Divider.jsx";
import Button from "../../common/Button";

const ShoppingCartPage = () => {
    const { shoppingReservation, totalShoppingAmount, handleRemoveFromCart, handleTotalAmountCountUp } = useShopping();

    if (!shoppingReservation?.length) return "Ваша корзина пуста";

    const handleDelete = id => handleRemoveFromCart(id);

    const handleTotalAmount = (id, amount) => handleTotalAmountCountUp(id, amount);

    let totalAmountOutput = 0;

    for (const key in totalShoppingAmount) totalAmountOutput += totalShoppingAmount[key];

    return (
        <div className="pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]">
            {shoppingReservation.map(reservedItem => {
                const paramsToPath = reservedItem.params.map(param => param.slice(1)).reduce((acc, val) => acc + "/" + val);

                return (
                    <ShoppingCardPosition
                        key={reservedItem._id}
                        reservedItem={reservedItem}
                        paramsToPath={paramsToPath}
                        onDelete={handleDelete}
                        onTotalAmountCountUp={handleTotalAmount}
                    />
                );
            })}
            <Divider/>
            <div className="h-[100px] flex flex-row flex-wrap text-xl justify-evenly items-center my-[55px]">
                <div className="h-[inherit] flex flex-row flex-wrap justify-evenly self-center items-center">
                    <span className="mr-[15px]">Итого к оплате (с учётом НДС):{" "}</span>
                    <output>
                        <pre className="text-end">
                            <strong>{totalAmountOutput}</strong>
                        </pre>
                    </output>
                </div>
                <Button buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-gray-700 text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer active:text-yellow-300 disabled:cursor-default disabled:opacity-50" type="button">Оставить заявку для оформления заказа</Button>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
