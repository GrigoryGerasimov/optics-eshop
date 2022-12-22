import React from "react";
import {
    ShoppingCartIcon,
    EmailIcon,
    PhoneIcon,
    WhatsappIcon
} from "../../common_ui/icons";

export const metaLayerLinks = [
    {
        id: "wa",
        pathTo: "tel:+7-000-000-00-00",
        icon: <WhatsappIcon/>,
        label: "+7-000-000-00-00",
        urlExternal: true
    },
    {
        id: "tel",
        pathTo: "tel:+7-777-777-77-77",
        icon: <PhoneIcon/>,
        label: "+7-777-777-77-77",
        urlExternal: true
    },
    {
        id: "mail",
        pathTo: "mailto:test@test.com",
        icon: <EmailIcon/>,
        label: "test@test.com",
        urlExternal: true
    },
    {
        id: "cart",
        pathTo: "/cart",
        icon: <ShoppingCartIcon/>,
        label: "Корзина",
        urlExternal: false
    }
];
