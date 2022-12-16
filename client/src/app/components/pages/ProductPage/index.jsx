import React from "react";
import { useParams } from "react-router-dom";
import ProductMainImage from "./ProductMainImage.jsx";
import ProductSideImage from "./ProductSideImage.jsx";
import { ProductInfoBlock } from "./ProductInfoBlock.jsx";
import { useProducts, useShopping } from "../../hooks";
import { Breadcrumbs } from "../../ui/common_ui/Breadcrumbs.jsx";
import Button from "../../common/Button";

const ProductPage = () => {
    const { productId } = useParams();
    const { products: productData } = useProducts();
    const { handleShoppingReservation } = useShopping();

    const currentItem = productData.find(productItem => productItem._id === productId);

    return (
        <>
            <Breadcrumbs/>
            <div className="flex flex-row flex-wrap justify-evenly items-center mt-[50px]">
                <div className="2xl:w-6/12">
                    <ProductMainImage
                        productMainImgPath={currentItem.imgBig}
                        productMainImgTitle={currentItem.name}
                    />
                    <div className="flex flex-row flex-wrap mt-1">
                        {currentItem.imgSmall.map(img => (
                            <ProductSideImage
                                key={img.slice(img.lastIndexOf("-") + 1)}
                                productSideImgPath={img}
                                productSideImgTitle={currentItem.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="p-10 2xl:w-3/12">
                    <ProductInfoBlock {...currentItem}/>
                    <Button buttonClass="w-full bg-gray-700 text-xl text-yellow-200 font-[inherit] rounded py-[10px] px-[20px] mt-[35px] cursor-pointer active:text-yellow-300 disabled:cursor-default disabled:opacity-50"
                        type="button" onClick={() => handleShoppingReservation(currentItem._id)}>Добавить в корзину</Button>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
