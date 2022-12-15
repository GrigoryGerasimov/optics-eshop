import React from "react";
import CardImage from "./CardImage.jsx";
import { CardTitle } from "./CardTitle.jsx";
import { CardBody } from "./CardBody.jsx";
import { CardFooter } from "./CardFooter.jsx";
import PropTypes from "prop-types";

export const Card = ({ cardClass, img, name, title, brand, collection, price, currencyCode, ...rest }) => {
    return (
        <div className={cardClass} {...rest} >
            <CardImage
                cardImgPath={img}
                cardImgTitle={name}
            />
            <CardTitle
                cardTitleText={title}
            />
            <CardBody
                cardBodyMainText={`${brand} - ${collection}`}
                cardBodyAdditionalText={price}
                currencyCode={currencyCode}
            />
            <CardFooter/>
        </div>
    );
};

Card.defaultProps = {
    cardClass: "w-[400px] h-max m-5 self-center justify-self-center cursor-pointer hover:shadow-lg"
};

Card.propTypes = {
    cardClass: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currencyCode: PropTypes.string,
    collection: PropTypes.string
};
