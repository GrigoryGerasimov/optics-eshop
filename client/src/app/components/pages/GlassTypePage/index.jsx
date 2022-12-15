import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../hooks";
import { Card } from "../../common/card/Card";
import Loader from "../../common/Loader";

const GlassTypePage = () => {
    const navigate = useNavigate();
    const { glasstype } = useParams();
    const glasstypeId = `#${glasstype}`;
    const { products: productData, filterCatalogedProducts } = useProducts();

    useEffect(() => {
        filterCatalogedProducts("glassTypes", `${/^df/g.test(glasstype) ? "dioptersFree" : "diopters"}`, glasstypeId);
    }, []);

    if (!productData.length) return <Loader/>;

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
            {productData.map(dataItem => {
                const paramsToPath = dataItem.params.map(param => param.slice(1)).reduce((acc, val) => acc + "/" + val);

                return <Card
                    key={dataItem._id}
                    img={dataItem.img}
                    name={dataItem.name}
                    title={dataItem.title}
                    brand={dataItem.brand}
                    collection={dataItem.collectionTitle}
                    onClick={() => navigate(`${paramsToPath}/${dataItem._id}`)}
                />;
            })}
        </div>
    );
};

export default GlassTypePage;
