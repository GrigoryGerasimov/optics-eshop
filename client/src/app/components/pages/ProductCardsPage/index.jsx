import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../common/card/Card.jsx";
import { useProducts } from "../../hooks";
import Sorting from "../../ui/Sorting";
import Loader from "../../common/Loader";

const ProductCardsPage = () => {
    const navigate = useNavigate();
    const { products: productData, isLoading } = useProducts();

    if (isLoading) return <Loader/>;

    return (
        <>
            <Sorting/>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
                {productData.map(dataItem => {
                    const paramsToPath = dataItem.params.map(param => param.slice(1)).reduce((acc, val) => acc + "/" + val);

                    return <Card
                        key={dataItem._id}
                        img={dataItem.img}
                        id={dataItem._id}
                        title={dataItem.title}
                        brand={dataItem.brand}
                        collection={dataItem.collectionTitle}
                        price={dataItem.price}
                        currencyCode={dataItem.currencyCode}
                        lastEdited={dataItem.lastEdited}
                        onClick={() => navigate(`${paramsToPath}/${dataItem._id}`)}
                    />;
                })}
            </div>
        </>
    );
};

export default ProductCardsPage;
