import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../common/card/Card.jsx";
import { useCategories, useProducts } from "../../../hooks";
import Sorting from "../../ui/Sorting";
import Loader from "../../common/Loader";

const ProductCardsPage = () => {
    const navigate = useNavigate();
    const { products: productsData, isProductsLoading } = useProducts();
    const { findCategoryTitleById } = useCategories();

    if (isProductsLoading || !productsData?.length) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <>
            <Sorting/>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
                {productsData.map(dataItem => {
                    const paramsToPath = dataItem.params.map((param, i) => findCategoryTitleById(param)[i]()).reduce((acc, val) => acc + "/" + val);

                    return <Card
                        key={dataItem._id}
                        img={dataItem.img}
                        id={dataItem._id}
                        title={dataItem.title}
                        brand={dataItem.brand}
                        collection={dataItem.collectionTitle}
                        price={dataItem.price}
                        currencyCode={dataItem.currencyCode}
                        lastEdited={dataItem.updatedAt}
                        lastCreated={dataItem.createdAt}
                        onClick={() => navigate(`${paramsToPath}/${dataItem._id}`)}
                    />;
                })}
            </div>
        </>
    );
};

export default ProductCardsPage;
