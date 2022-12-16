import React from "react";
import CardImage from "./CardImage.jsx";
import { CardTitle } from "./CardTitle.jsx";
import { CardBody } from "./CardBody.jsx";
import { CardFooter } from "./CardFooter.jsx";
import PropTypes from "prop-types";

export const Card = ({ cardClass, cardImgClass, cardTitleClass, cardBodyClass, cardFooterClass, img, name, title, brand, collection, price, currencyCode, ...rest }) => {
    return (
        <div className={cardClass} {...rest} >
            <CardImage
                cardImgClass={cardImgClass}
                cardImgPath={img}
                cardImgTitle={name}
            />
            <CardTitle
                cardTitleClass={cardTitleClass}
                cardTitleText={title}
            />
            <CardBody
                cardBodyClass={cardBodyClass}
                cardBodyMainText={`${brand} - ${collection}`}
                cardBodyAdditionalText={price}
                currencyCode={currencyCode}
            />
            <CardFooter
                cardFooterClass={cardFooterClass}
            />
        </div>
    );
};

Card.defaultProps = {
    cardClass: "w-[400px] h-max m-5 self-center justify-self-center cursor-pointer hover:shadow-lg"
};

Card.propTypes = {
    cardClass: PropTypes.string,
    cardImgClass: PropTypes.string,
    cardTitleClass: PropTypes.string,
    cardBodyClass: PropTypes.string,
    cardFooterClass: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currencyCode: PropTypes.string,
    collection: PropTypes.string
};
