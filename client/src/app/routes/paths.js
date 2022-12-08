const paths = {
    BASE: "",
    REST: "*",
    PRODUCTS: "products",
    PRODUCT_ID: ":productId",
    EDIT: "edit",
    AUTH: "auth",
    LOGIN: "login",
    REGISTER: "register",
    AUTH_LOGIN() {
        return `${this.AUTH}/${this.LOGIN}`;
    }
};

export default paths;
