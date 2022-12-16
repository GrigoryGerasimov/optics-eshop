import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

export const Modal = ({ modalStatus, onCloseModal, text, actionBtnLabel, secondaryBtnLabel, onAction }) => {
    return (
        <div
            className={`${modalStatus ? "block" : "hidden"} w-full h-full z-999 fixed top-0 left-0 bg-gray-700 bg-opacity-50`}>
            <div
                className={`w-[800px] bg-white rounded z-999 absolute top-[35%] left-[35%] text-gray-700 text-opacity-95 text-lg`}>
                <div className="w-full text-2xl text-center p-5 my-10">
                    {text}
                </div>

                <div className="flex flex-row-flex-wrap justify-between">
                    <Button
                        buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-2xl text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                        type="button"
                        onClick={onAction}
                    >
                        {actionBtnLabel}
                    </Button>
                    <Button
                        buttonClass="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] bg-gray-700 text-2xl text-yellow-200 font-[inherit] py-[10px] px-[20px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                        type="button"
                        onClick={onCloseModal}
                    >
                        {secondaryBtnLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
};

Modal.defaultProps = {
    modalType: "info"
};

Modal.propTypes = {
    modalStatus: PropTypes.bool,
    onCloseModal: PropTypes.func,
    text: PropTypes.string,
    actionBtnLabel: PropTypes.string,
    secondaryBtnLabel: PropTypes.string,
    onAction: PropTypes.func
};
