const paths = {
    BASE: "",
    REST: "*",
    PRODUCTS: "products",
    PRODUCT: {
        COLLECTION: ":collection",
        GLASS_TYPE: ":glasstype",
        FRAME_TYPE: ":frametype",
        LENSE_TYPE: ":lensetype",
        ID: ":productId"
    },
    AUTH: "auth",
    LOGIN: "login",
    REGISTER: "register",
    LOGOUT: "logout",
    AUTH_LOGIN: "/auth/login",
    AUTH_LOGOUT: "/auth/logout",
    CART: "cart",
    ADMIN: "admin"
};

export default paths;
