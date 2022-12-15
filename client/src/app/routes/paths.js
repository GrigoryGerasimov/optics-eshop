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
    EDIT: "edit",
    AUTH: "auth",
    LOGIN: "login",
    REGISTER: "register",
    AUTH_LOGIN() {
        return `${this.AUTH}/${this.LOGIN}`;
    }
};

export default paths;