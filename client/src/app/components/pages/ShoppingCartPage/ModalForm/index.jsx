import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatorConfig } from "./validatorConfig.js";
import { FormControl, Form } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { Modal } from "../../../common/Modal.jsx";
import PropTypes from "prop-types";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    invoicingAddress: "",
    deliveryAddress: ""
};

export const ModalForm = ({ modalStatus, onCloseModal, onSubmit }) => {
    const navigate = useNavigate();
    const [showModalConfirmation, setShowModalConfirmation] = useState(false);

    const handleCloseModalConfirmation = () => setShowModalConfirmation(false);

    const handleSubmit = data => {
        console.log(data);
        setShowModalConfirmation(true);
        onSubmit();
        navigate(0);
    };

    return (
        <div
            className={`${modalStatus ? "block" : "hidden"} w-full h-full z-999 fixed top-0 left-0 bg-gray-700 bg-opacity-50`}>
            <div
                className={`bg-white rounded z-9999 pt-10 absolute top-[5%] left-[40%] text-gray-700 text-opacity-95`}>
                <Form
                    initialState={initialState}
                    formClass="w-max h-max p-[70px] text-xl text-gray-700 border-none outline-none"
                    title="Пожалуйста укажите свои контактные данные"
                    onSubmit={handleSubmit}
                    config={validatorConfig}
                >
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[35px]"
                        label="Имя"
                        id="firstName"
                        name="firstName"
                    />
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[35px]"
                        label="Фамилия"
                        id="lastName"
                        name="lastName"
                    />
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[35px]"
                        label="E-Mail"
                        id="email"
                        name="email"
                        type="email"
                    />
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[35px]"
                        label="Тел."
                        id="phone"
                        name="phone"
                        type="phone"
                    />
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[35px]"
                        label="Адрес выставления счёта"
                        id="invoicingAddress"
                        name="invoicingAddress"
                    />
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[55px]"
                        label="Адрес доставки"
                        id="deliveryAddress"
                        name="deliveryAddress"
                    />
                    <Button
                        buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-xl text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                        type="button"
                        onClick={onCloseModal}
                    >
                        Назад
                    </Button>
                    <Button
                        buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-xl text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500 disabled:cursor-default disabled:opacity-50"
                        type="submit"
                    >
                        Отправить
                    </Button>
                </Form>
            </div>
            <Modal
                modalStatus={showModalConfirmation}
                onCloseModal={handleCloseModalConfirmation}
                text="Благодарим за Ваш заказ! В ближайшее время с Вами свяжутся наши специалисты для оформления индивидуального заказа на выбранный товар"
                modalBtnGroupClass="hidden"
            />
        </div>
    );
};

ModalForm.propTypes = {
    modalStatus: PropTypes.bool,
    onCloseModal: PropTypes.func,
    onSubmit: PropTypes.func
};