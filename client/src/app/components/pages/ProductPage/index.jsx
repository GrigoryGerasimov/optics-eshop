import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductMainImage from "./ProductMainImage.jsx";
import ProductSideImage from "./ProductSideImage.jsx";
import { ProductInfoBlock } from "./ProductInfoBlock.jsx";
import { useShopping, useModal } from "../../../hooks";
import { Breadcrumbs } from "../../ui/common_ui/Breadcrumbs.jsx";
import Button from "../../common/Button";
import { Modal } from "../../common/Modal";
import paths from "../../../routes/paths";
import Loader from "../../common/Loader";
import { useReceiveProductByIdQuery } from "../../../store/backendApi.js";

const ProductPage = () => {
    const { productId } = useParams();
    const { isLoading: isProductDataLoading, isSuccess: isProductDataLoadSuccessul, data: productData } = useReceiveProductByIdQuery(productId, { refetchOnFocus: true });
    const { shoppingReservation, totalShoppingAmount, handleShoppingReservation, isPresentInCart, handleCheckPresenceInCart } = useShopping();
    const { showModal, handleModalOpen, handleModalClose } = useModal();
    const navigate = useNavigate();
    const { CART } = paths;

    const currentItem = productData?.data;

    const processShoppingReservation = id => {
        handleModalOpen();
        handleShoppingReservation(id);
    };

    useEffect(() => {
        handleCheckPresenceInCart(currentItem?._id);
    }, [shoppingReservation, totalShoppingAmount, processShoppingReservation]);

    if (isProductDataLoading || !isProductDataLoadSuccessul || !Object.keys(currentItem).length) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <>
            <Breadcrumbs itemId={currentItem._id} itemPath={currentItem.params}/>
            <div className="flex flex-row flex-wrap justify-evenly items-center mt-[50px]">
                <div className="2xl:w-6/12">
                    <ProductMainImage
                        productMainImgPath={currentItem.img}
                        productId={currentItem._id}
                    />
                    <div className="flex flex-row flex-wrap mt-1">
                        {currentItem.imgAddit.map(img => (
                            <ProductSideImage
                                key={img.slice(img.lastIndexOf("-") + 1)}
                                productSideImgPath={img}
                                productId={currentItem._id}
                            />
                        ))}
                    </div>
                </div>
                <div className="p-10 2xl:w-3/12">
                    <ProductInfoBlock {...currentItem}/>
                    {
                        !isPresentInCart ? (
                            <Button
                                buttonClass="w-full bg-gray-700 text-lg text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] mt-[35px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                                type="button"
                                onClick={() => processShoppingReservation(currentItem._id)}
                            >
                                Добавить в корзину
                            </Button>
                        ) : (
                            <>
                                <div className="w-full text-lg text-center py-5 mt-10">
                                    Данный артикул уже добавлен в Вашу корзину покупок. Вы всегда можете задать необходимое количество непосредственно в корзине.
                                </div>
                                <Button
                                    buttonClass="w-full bg-gray-700 text-lg text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] mt-[35px] cursor-pointer hover:text-yellow-400 active:text-yellow-500"
                                    type="button"
                                    onClick={() => navigate(`/${CART}`)}
                                >
                                    Перейти в корзину
                                </Button>
                            </>
                        )
                    }
                    <div className="text-end text-md italic mt-[95px]">№ артикула {currentItem._id}</div>
                </div>
            </div>
            <Modal
                modalStatus={showModal}
                onCloseModal={handleModalClose}
                text="Поздравляем! Товар успешно добавлен в корзину покупок!"
                actionBtnLabel="Перейти в корзину"
                secondaryBtnLabel="Продолжить покупки"
                onAction={() => navigate(`/${CART}`)}
            />
        </>
    );
};

export default ProductPage;
