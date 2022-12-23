import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatorConfig } from "./validatorConfig.js";
import { FormControl, Form } from "../../../common/form";
import Button from "../../../common/Button.jsx";
import { Modal } from "../../../common/Modal.jsx";
import { getRandomOrderId } from "../../../../utils/randomizer/getRandomOrderId.js";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../../store/authSlice.js";
import { useReceiveUsersQuery } from "../../../../store/apiEndpoints";
import Loader from "../../../common/Loader";
import PropTypes from "prop-types";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
};

export const ModalForm = ({ modalStatus, onCloseModal, onSubmit }) => {
    const navigate = useNavigate();
    const [showModalConfirmation, setShowModalConfirmation] = useState(false);

    const authorizedUserId = useSelector(authSelectors.getAuthorizedUserId());
    const { isLoading: isUsersDataLoading, isSuccess: isUsersDataLoadSuccessful, data: usersData } = useReceiveUsersQuery({ refetchOnFocus: true });

    const authorizedUser = usersData?.data?.find(user => user?._id === authorizedUserId);

    const handleCloseModalConfirmation = () => setShowModalConfirmation(false);

    const handleSubmit = () => {
        setShowModalConfirmation(true);
        onSubmit();
        setTimeout(() => navigate(0), 5000);
    };

    const orderConfirmationText = (
        <div className="leading-10">
            <p className="mb-5">Благодарим за Вашу заявку!</p>
            <p className="mb-5">Номер Вашей заявки: <strong>{getRandomOrderId()}</strong></p>
            <p>В ближайшее время с Вами свяжутся наши специалисты для оформления индивидуального заказа на выбранный товар</p>
        </div>
    );

    if (isUsersDataLoading && !isUsersDataLoadSuccessful) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <div
            className={`${modalStatus ? "block" : "hidden"} w-full h-full z-999 fixed top-0 left-0 bg-gray-700 bg-opacity-50`}>
            <div
                className={`bg-white rounded z-9999 pt-[70px] absolute top-[30%] left-[40%] text-gray-700 text-opacity-95`}>
                <Form
                    initialState={!authorizedUser ? initialState : {
                        firstName: authorizedUser.firstName,
                        lastName: authorizedUser.lastName,
                        email: authorizedUser.email,
                        phone: authorizedUser.phone
                    }}
                    formClass="w-max h-max p-[70px] text-lg text-gray-700 border-none outline-none"
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
                        placeholder="test@test.com"
                    />
                    <FormControl
                        formFieldClass="focus:bg-transparent mb-[75px]"
                        label="Тел."
                        id="phone"
                        name="phone"
                        type="phone"
                        placeholder="___-___-__-__"
                    />
                    <Button
                        buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-lg text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                        type="button"
                        onClick={onCloseModal}
                    >
                        Назад
                    </Button>
                    <Button
                        buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-lg text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500 disabled:cursor-default disabled:opacity-50"
                        type="submit"
                    >
                        Отправить
                    </Button>
                </Form>
            </div>
            <Modal
                modalStatus={showModalConfirmation}
                onCloseModal={handleCloseModalConfirmation}
                text={orderConfirmationText}
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
