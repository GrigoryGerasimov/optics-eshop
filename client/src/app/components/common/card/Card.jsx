import React from "react";
import { CardImage } from "./CardImage.jsx";
import { CardTitle } from "./CardTitle.jsx";
import { CardBody } from "./CardBody.jsx";
import { CardFooter } from "./CardFooter.jsx";
import PropTypes from "prop-types";

export const Card = ({ img, name, title, description, ...rest }) => {
    return (
        <div className="w-[400px] h-max m-5 cursor-pointer hover:shadow-lg">
            <CardImage
                cardImgPath={img}
                cardImgTitle={name}
            />
            <CardTitle
                cardTitleText={title}
            />
            <CardBody
                cardBodyText={description}
            />
            <CardFooter/>
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};
