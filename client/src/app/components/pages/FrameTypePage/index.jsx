import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategories, useProducts } from "../../../hooks";
import { Card } from "../../common/card/Card";
import Loader from "../../common/Loader";
import Sorting from "../../ui/Sorting";

const FrameTypePage = () => {
    const navigate = useNavigate();
    const { frametype } = useParams();
    const { products: productData, isProductsLoading, filterCatalogedProducts } = useProducts();
    const { findCategoryTitleById } = useCategories();

    useEffect(() => {
        filterCatalogedProducts("frameTypes", "type", frametype);
    }, []);

    if (isProductsLoading && !productData.length) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <>
            <Sorting/>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
                {productData.map(dataItem => {
                    const paramsToPath = dataItem.params.slice(3).map((param, i) => findCategoryTitleById(param)[i + 3]()).reduce((acc, val) => acc + "/" + val);

                    return <Card
                        key={dataItem._id}
                        img={dataItem.img}
                        name={dataItem.name}
                        title={dataItem.title}
                        brand={dataItem.brand}
                        collection={dataItem.collectionTitle}
                        price={dataItem.price}
                        currencyCode={dataItem.currencyCode}
                        onClick={() => navigate(`${paramsToPath}/${dataItem._id}`)}
                    />;
                })}
            </div>
        </>
    );
};

export default FrameTypePage;
