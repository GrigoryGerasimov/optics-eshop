import React, { useState } from "react";
import { Table } from "../../common/table";
import { ProductEditForm } from "./productForms/ProductEditForm";
import { ProductCreateForm } from "./productForms/ProductCreateForm";
import { columnHeadings } from "./columnHeadings.js";
import { useModal, useProducts } from "../../hooks";
import Loader from "../../common/Loader";
import { Modal } from "../../common/Modal";
import { useUpdateProductMutation, useCreateProductMutation, useDeleteProductMutation } from "../../../store/backendApi.js";
import { toast } from "react-toastify";

const AdminPage = () => {
    const [currentForm, setCurrentForm] = useState("");
    const { showModal, handleModalOpen, handleModalClose } = useModal();
    const [currentId, setCurrentId] = useState("");
    const [currentProduct, setCurrentProduct] = useState({});
    const [currentModalFlag, setCurrentModalFlag] = useState("");
    const { products, isProductsLoading } = useProducts();

    if (isProductsLoading) return <Loader/>;

    const [updateProduct] = useUpdateProductMutation();
    const [createProduct] = useCreateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const errorCatcher = error => toast.error(error);

    const modalActionSwitcher = action => {
        setCurrentModalFlag(action);
        handleModalOpen();
        setTimeout(() => handleModalClose(), 4000);
    };

    const findProductUnitById = id => setCurrentProduct(products.find(item => item._id === id));

    const handleFormTypeToggler = type => setCurrentForm(type);

    const handlePositionCreate = payload => {
        try {
            createProduct(payload);
            modalActionSwitcher("create");
        } catch (err) {
            errorCatcher(err);
        }
    };

    const handlePositionEdit = id => {
        findProductUnitById(id);
        handleFormTypeToggler("edit");
    };
    const handlePositionUpdate = async (id, payload) => {
        try {
            const { data } = await updateProduct({ id, payload }).unwrap();
            setCurrentProduct(data);
            modalActionSwitcher("update");
        } catch (err) {
            errorCatcher(err);
        }
    };

    const handleCheckBeforePositionDelete = id => {
        setCurrentId(id);
        setCurrentModalFlag("deleteCheck");
        handleModalOpen();
    };
    const handlePositionDelete = id => {
        try {
            deleteProduct(id);
            handleModalClose();
            modalActionSwitcher("delete");
        } catch (err) {
            errorCatcher(err);
        }
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
                    <ProductCreateForm handlePositionCreate={handlePositionCreate}/>
                </div>
                <div className={`${currentForm === "edit" ? "block" : "hidden"}`}>
                    <ProductEditForm positionToEdit={currentProduct} handlePositionUpdate={handlePositionUpdate}/>
                </div>
            </section>
            {currentModalFlag === "deleteCheck" ? (
                <Modal
                    modalStatus={showModal}
                    onCloseModal={handleModalClose}
                    text="Вы действительно хотите удалить данный товар?"
                    actionBtnLabel="Удалить"
                    secondaryBtnLabel="Отмена"
                    onAction={() => handlePositionDelete(currentId)}
                />
            ) : currentModalFlag === "delete" ? (
                <Modal
                    modalStatus={showModal}
                    text="Артикул успешно удалён!"
                    modalBtnGroupClass="hidden"
                />
            ) : currentModalFlag === "create" ? (
                <Modal
                    modalStatus={showModal}
                    text="Новый артикул успешно создан!"
                    modalBtnGroupClass="hidden"
                />
            ) : (
                <Modal
                    modalStatus={showModal}
                    text="Артикул успешно обновлён!"
                    modalBtnGroupClass="hidden"
                />
            )}
        </main>
    );
};

export default AdminPage;
