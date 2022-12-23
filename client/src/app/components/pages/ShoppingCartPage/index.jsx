import React from "react";
import { useModal, useShopping } from "../../../hooks";
import ShoppingCardPosition from "./ShoppingCardPosition";
import { Divider } from "../../common/Divider.jsx";
import Button from "../../common/Button";
import { ModalForm } from "./ModalForm";
import { useReceiveCurrenciesQuery } from "../../../store/apiEndpoints";
import Loader from "../../common/Loader.jsx";
import { constants } from "../../../constants.jsx";

const ShoppingCartPage = () => {
    const { shoppingReservation, totalShoppingAmount, handleRemoveFromCart, handleTotalAmountCountUp, handleClearCart } = useShopping();
    const { showModal, handleModalOpen, handleModalClose } = useModal();
    const { UNICODE: { CURRENCY } } = constants;
    const { isLoading: isCurrenciesDataLoading, isSuccess: isCurrenciesDataLoadSuccessful, data: currenciesData } = useReceiveCurrenciesQuery({ refetchOnFocus: true });

    const handleDelete = id => handleRemoveFromCart(id);

    const handleTotalAmount = (id, amount) => handleTotalAmountCountUp(id, amount);

    let totalAmountOutput = 0;

    for (const key in totalShoppingAmount) totalAmountOutput += totalShoppingAmount[key];

    const handleOrderAcceptance = () => {
        handleModalOpen();
    };

    if (!shoppingReservation?.length) return (<div className="w-[inherit] flex justify-center">Ваша корзина пуста</div>);

    return (
        <div>
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
            <div className="h-[100px] flex flex-row flex-wrap text-lg justify-evenly items-center my-[95px]">
                <div className="h-[inherit] flex flex-row flex-wrap justify-evenly self-center items-center">
                    <span className="mr-[15px]">Итого к оплате (с учётом НДС):{" "}</span>
                    <output>
                        <pre className="text-end">
                            <strong>{totalAmountOutput} {!isCurrenciesDataLoading && isCurrenciesDataLoadSuccessful ? CURRENCY[currenciesData?.data.find(currency => currency._id === shoppingReservation[0].currencyCode).code] : <Loader/>}</strong>
                        </pre>
                    </output>
                </div>
                <Button
                    buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-gray-700 text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                    type="button"
                    onClick={handleOrderAcceptance}
                >
                    Оставить заявку для оформления заказа
                </Button>
            </div>
            <ModalForm
                modalStatus={showModal}
                onCloseModal={handleModalClose}
                onSubmit={handleClearCart}
            />
        </div>
    );
};

export default ShoppingCartPage;
