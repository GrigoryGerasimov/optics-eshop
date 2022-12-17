import React from "react";
import {
    ShoppingCartIcon,
    UserIcon,
    EmailIcon,
    PhoneIcon,
    WhatsappIcon
} from "../../common_ui/icons";

export const metaLayerLinks = [
    {
        id: "wa",
        pathTo: "",
        icon: <WhatsappIcon/>,
        label: "+7-000-000-00-00",
        urlExternal: true
    },
    {
        id: "tel",
        pathTo: "",
        icon: <PhoneIcon/>,
        label: "+7-777-777-77-77",
        urlExternal: true
    },
    {
        id: "mail",
        pathTo: "",
        icon: <EmailIcon/>,
        label: "test@test.com",
        urlExternal: true
    },
    {
        id: "auth",
        pathTo: "/auth",
        icon: <UserIcon/>,
        label: "Войти",
        urlExternal: false
    },
    {
        id: "admin",
        pathTo: "/admin",
        icon: "",
        label: "Кабинет",
        urlExternal: false
    },
    {
        id: "cart",
        pathTo: "/cart",
        icon: <ShoppingCartIcon/>,
        label: "Корзина",
        urlExternal: false
    }
];
