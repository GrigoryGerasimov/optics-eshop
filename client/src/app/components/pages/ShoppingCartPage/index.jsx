import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../common/card/Card";
import { useShopping } from "../../hooks";
import paths from "../../../routes/paths";

const ShoppingCartPage = () => {
    const navigate = useNavigate();
    const { shoppingReservation } = useShopping();
    const { PRODUCTS } = paths;

    if (!shoppingReservation?.length) return "Ваша корзина пуста";

    return (
        <div className="pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]">
            {shoppingReservation.map(reservedItem => {
                const paramsToPath = reservedItem.params.map(param => param.slice(1)).reduce((acc, val) => acc + "/" + val);

                return <Card
                    cardClass="w-[70%] h-[150px] m-5 flex flex-row cursor-pointer hover:shadow-lg"
                    cardImgClass="block w-[250px] object-contain"
                    cardTitleClass="w-full p-5 leading-10 text-center self-center"
                    cardBodyClass="w-full p-5 leading-10 self-center"
                    cardFooterClass="hidden"
                    key={reservedItem._id}
                    img={reservedItem.imgSmall[2]}
                    name={reservedItem.name}
                    title={reservedItem.title}
                    brand={reservedItem.brand}
                    collection={reservedItem.collectionTitle}
                    price={reservedItem.price}
                    currencyCode={reservedItem.currencyCode}
                    onClick={() => navigate(`/${PRODUCTS}/${paramsToPath}/${reservedItem._id}`)}
                />;
            })}
        </div>
    );
};

export default ShoppingCartPage;
