import React, { useState } from "react";
import { Table } from "../../common/table";
import { ProductEditForm } from "./ProductEditForm";
import { ProductCreateForm } from "./ProductCreateForm";
import { columnHeadings } from "./columnHeadings.js";
import { useModal, useProducts } from "../../hooks";
import Loader from "../../common/Loader";
import { Modal } from "../../common/Modal";

const AdminPage = () => {
    const [currentForm, setCurrentForm] = useState("");
    const { products, currentProduct, deleteProductUnit, findProductUnitById } = useProducts();
    const { showModal, handleModalOpen, handleModalClose } = useModal();
    const [currentId, setCurrentId] = useState("");

    if (!products) return <Loader/>;

    const handleFormTypeToggler = type => setCurrentForm(type);

    const handleCheckBeforePositionDelete = id => {
        setCurrentId(id);
        handleModalOpen();
    };

    const handlePositionEdit = id => {
        findProductUnitById(id);
        handleFormTypeToggler("edit");
    };

    return (
        <main className="w-full flex flex-row flex-wrap">
            <section className="p-10">
                <Table
                    bodyContent={products}
                    tableHeadings={columnHeadings}
                    onFormSwitch={handleFormTypeToggler}
                    onPositionDeleteCheck={handleCheckBeforePositionDelete}
                    onPositionEdit={handlePositionEdit}
                />
            </section>
            <section
                className="w-full text-gray-700 text-opacity-95 mt-[75px] pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]">
                <div className={`${currentForm === "create" ? "block" : "hidden"}`}>
                    <ProductCreateForm/>
                </div>
                <div className={`${currentForm === "edit" ? "block" : "hidden"}`}>
                    <ProductEditForm positionToEdit={currentProduct}/>
                </div>
            </section>
            <Modal
                modalStatus={showModal}
                onCloseModal={handleModalClose}
                text="Вы действительно хотите удалить данный товар?"
                actionBtnLabel="Удалить"
                secondaryBtnLabel="Отмена"
                onAction={() => deleteProductUnit(currentId)}
            />
        </main>
    );
};

export default AdminPage;
