import React, { useState, useEffect } from "react";
import { Card } from "../../common/card/Card";
import { ChevronDown, ChevronUp } from "../../ui/common_ui/icons";
import { computeVAT } from "../../../utils/computation/computeVAT.js";
import paths from "../../../routes/paths";
import { useNavigate } from "react-router-dom";
import { constants } from "../../../constants";
import PropTypes from "prop-types";
import { useModal } from "../../hooks";
import { Modal } from "../../common/Modal";

const ShoppingCardPosition = ({ reservedItem, paramsToPath, onDelete, onTotalAmountCountUp }) => {
    const navigate = useNavigate();
    const { PRODUCTS } = paths;
    const { UNICODE: { CURRENCY } } = constants;

    const [orderedQuantity, setOrderedQuantity] = useState(1);
    const { showModal, handleModalOpen, handleModalClose } = useModal();

    const orderedAmount = computeVAT(reservedItem.price) * orderedQuantity;

    useEffect(() => {
        onTotalAmountCountUp(reservedItem._id, orderedAmount);
    }, [orderedAmount]);

    const handleIncrement = () => setOrderedQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setOrderedQuantity(prevQuantity => {
        const decremention = prevQuantity - 1;
        return decremention > 0 ? decremention : 1;
    });

    return (
        <div className="flex flex-row flex-wrap mb-[35px]">
            <Card
                cardClass="w-[70%] h-[150px] m-5 flex flex-row cursor-pointer hover:shadow-lg"
                cardImgClass="block w-[250px] object-contain"
                cardTitleClass="w-full p-5 leading-10 text-center self-center"
                cardBodyClass="w-full p-5 leading-10 flex flex-row flex-wrap items-center justify-evenly"
                cardFooterClass="hidden"
                key={reservedItem._id}
                img={reservedItem.imgAddit[2]}
                title={reservedItem.title}
                brand={reservedItem.brand}
                collection={reservedItem.collectionTitle}
                price={reservedItem.price}
                currencyCode={reservedItem.currencyCode}
                onClick={() => navigate(`/${PRODUCTS}/${paramsToPath}/${reservedItem._id}`)}
            />
            <div className="w-[15%] h-[150px] m-5 px-7">
                <span
                    className="text-gray-700 text-opacity-95 p-3 no-underline cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none"
                    onClick={handleModalOpen}
                >
                    Убрать из корзины
                </span>
                <div className="flex flex-row flex-wrap p-6">
                    <ChevronUp onClick={handleIncrement}/>
                    <output className="mx-[15px]">
                        <strong className="text-lg">
                            {orderedQuantity}
                        </strong>
                    </output>
                    <ChevronDown onClick={handleDecrement}/>
                </div>
                <span className="p-3">Стоимость (с НДС):{" "}
                    <pre className="text-end">
                        <strong className="text-lg">
                            {orderedAmount}{" "}
                            {CURRENCY[reservedItem.currencyCode]}
                        </strong>
                    </pre>
                </span>
            </div>
            <Modal
                modalStatus={showModal}
                onCloseModal={handleModalClose}
                text="Вы действительно хотите удалить данный товар?"
                actionBtnLabel="Удалить"
                secondaryBtnLabel="Отмена"
                onAction={() => onDelete(reservedItem._id)}
            />
        </div>
    );
};

export default ShoppingCardPosition;

ShoppingCardPosition.propTypes = {
    reservedItem: PropTypes.object,
    paramsToPath: PropTypes.string,
    onDelete: PropTypes.func,
    onTotalAmountCountUp: PropTypes.func
};
