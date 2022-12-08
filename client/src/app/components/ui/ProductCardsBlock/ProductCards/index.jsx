import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../common/card/Card.jsx";
import { useProducts } from "../../../hooks/useProducts.jsx";

const ProductCards = () => {
    const navigate = useNavigate();
    const { products: productData } = useProducts();

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
            {productData.map(dataItem => {
                return <Card
                    key={dataItem._id}
                    img={dataItem.img}
                    name={dataItem.name}
                    title={dataItem.title}
                    brand={dataItem.brand}
                    collection={dataItem.collectionTitle}
                    onClick={() => navigate(dataItem._id)}
                />;
            })}
        </div>

    );
};

export default ProductCards;
