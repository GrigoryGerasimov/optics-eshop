import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../hooks";
import { Card } from "../../common/card/Card";
import Loader from "../../common/Loader";
import Sorting from "../../ui/Sorting";

const LenseTypePage = () => {
    const navigate = useNavigate();
    const { lensetype } = useParams();
    const lensetypeId = `#${lensetype}`;
    const { products: productData, filterCatalogedProducts } = useProducts();

    useEffect(() => {
        filterCatalogedProducts("lenseTypes", "type", lensetypeId);
    }, []);

    if (!productData.length) return <Loader/>;

    return (
        <>
            <Sorting/>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
                {productData.map(dataItem => {
                    return <Card
                        key={dataItem._id}
                        img={dataItem.img}
                        name={dataItem.name}
                        title={dataItem.title}
                        brand={dataItem.brand}
                        collection={dataItem.collectionTitle}
                        price={dataItem.price}
                        currencyCode={dataItem.currencyCode}
                        onClick={() => navigate(dataItem._id)}
                    />;
                })}
            </div>
        </>
    );
};

export default LenseTypePage;
