import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { useCategories } from "./useCategories.jsx";
import { useReceiveProductsQuery } from "../../store/api.js";
import PropTypes from "prop-types";

let initialProductData = [
    {
        _id: "0001",
        img: "https://images.unsplash.com/photo-1556306510-31ca015374b0",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Brand New Day",
        brand: "Personal Brand",
        params: ["#ss23mdeluxe", "#dprogres", "#round", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 200,
        price: 8700,
        currencyCode: "RUB"
    },
    {
        _id: "0002",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Super Glasses 2022",
        brand: "Personal Brand",
        params: ["#fw23mdeluxe", "#dfmen", "#thick", "#monthly"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 850,
        price: 9990,
        currencyCode: "RUB"
    },
    {
        _id: "0003",
        img: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Collection FW2021",
        brand: "Personal Brand",
        params: ["#fw23mdeluxe", "#dmen", "#square", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 1800,
        price: 7200,
        currencyCode: "RUB"
    },
    {
        _id: "0004",
        img: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Perfect choice!",
        brand: "Personal Brand",
        params: ["#fw23mdeluxe", "#dcomp", "#thin", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 3500,
        price: 6900,
        currencyCode: "RUB"
    },
    {
        _id: "0005",
        img: "https://images.unsplash.com/photo-1602703522866-fb486308da5d",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Fantastic Tale",
        brand: "Personal Brand",
        params: ["#fw23unisex", "#dfsun", "#thin", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 670,
        price: 10500,
        currencyCode: "RUB"
    },
    {
        _id: "0006",
        img: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Women Collection SS22",
        brand: "Personal Brand",
        params: ["#fw22wdeluxe", "#dwomen", "#thin", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 8900,
        price: 9200,
        currencyCode: "RUB"
    },
    {
        _id: "0007",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Kids Choice",
        brand: "Personal Brand",
        params: ["#ss23kidsteens", "#dfkids", "#thick", "#monthly"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 11100,
        price: 11600,
        currencyCode: "RUB"
    },
    {
        _id: "0008",
        img: "https://images.unsplash.com/photo-1556306510-31ca015374b0",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Brand New Day",
        brand: "Personal Brand",
        params: ["#ss22wdeluxe", "#ddriver", "#thin", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 2000,
        price: 15100,
        currencyCode: "RUB"
    },
    {
        _id: "0009",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Super Glasses 2022",
        brand: "Personal Brand",
        params: ["#fw22mdeluxe", "#dfflat", "#classic", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 4200,
        price: 12700,
        currencyCode: "RUB"
    },
    {
        _id: "0010",
        img: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Collection SS2023",
        brand: "Personal Brand",
        params: ["#ss23kidsteens", "#dmen", "#thin", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 5500,
        price: 10400,
        currencyCode: "RUB"
    },
    {
        _id: "0011",
        img: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Perfect choice!",
        brand: "Personal Brand",
        params: ["#fw23unisex", "#dfstyle", "#round", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 20000,
        price: 9000,
        currencyCode: "RUB"
    },
    {
        _id: "0012",
        img: "https://images.unsplash.com/photo-1602703522866-fb486308da5d",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Fantastic Tale",
        brand: "Personal Brand",
        params: ["#fw22mdeluxe", "#dphotochr", "#square", "#monthly"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 8000,
        price: 13500,
        currencyCode: "RUB"
    },
    {
        _id: "0013",
        img: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Women Collection SS22",
        brand: "Personal Brand",
        params: ["#ss22wdeluxe", "#dwomen", "#semi", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 290,
        price: 14900,
        currencyCode: "RUB"
    },
    {
        _id: "0014",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Kids Choice",
        brand: "Personal Brand",
        params: ["#ss23kidsteens", "#dkids", "#thick", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 260,
        price: 8100,
        currencyCode: "RUB"
    },
    {
        _id: "0015",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgAddit: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        title: "Kids Choice",
        brand: "Personal Brand",
        params: ["#fw22kidsteens", "#dfkids", "#thin", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        quantity: 3300,
        price: 7990,
        currencyCode: "RUB"
    }
];

const ProductsContext = React.createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({});
    const { collection, glassTypes, frameTypes, lenseTypes } = useCategories();

    const { isLoading, isSuccess, data } = useReceiveProductsQuery({
        refetchOnFocus: true
    });

    useEffect(() => {
        if (!isLoading && isSuccess) {
            setProducts(data.data);
        }
    });

    const filterSearchedProducts = useCallback(data => {
        const searchedProducts = products.filter(productUnit => productUnit.title.toLowerCase().includes(data.toLowerCase()));
        setProducts(searchedProducts);
    }, []);

    const filterCatalogedProducts = useCallback((criteria, category, type, subtype) => {
        const filteredProducts = products.filter(productUnit => {
            switch (criteria) {
                case "collection": {
                    for (const cat of Object.keys(collection[category])) {
                        if (cat === type) {
                            for (const item of collection[category][cat]) {
                                if (productUnit.params.includes(!subtype ? item.id : subtype)) return productUnit;
                            }
                        }
                    }
                    break;
                }
                case "glassTypes": {
                    for (const item of glassTypes[category]) {
                        if (productUnit.params.includes(!type ? item.id : type)) return productUnit;
                    }
                    break;
                }
                case "frameTypes": {
                    for (const item of frameTypes[category]) {
                        if (productUnit.params.includes(!type ? item.id : type)) return productUnit;
                    }
                    break;
                }
                case "lenseTypes": {
                    for (const item of lenseTypes[category]) {
                        if (productUnit.params.includes(!type ? item.id : type)) return productUnit;
                    }
                    break;
                }
                default: return productUnit;
            }
            return false;
        });
        setProducts(filteredProducts);
    }, [collection, glassTypes, frameTypes, lenseTypes]);

    const sortCatalogedProducts = useCallback((criteria, type) => {
        const sortedProducts = [...products].sort((a, b) => {
            switch (type) {
                case "desc": {
                    if (criteria === "price") {
                        return b.price - a.price;
                    } else return b.title.toLowerCase() === a.title.toLowerCase() ? 0 : b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
                }
                case "asc": {
                    if (criteria === "price") {
                        return a.price - b.price;
                    } else return a.title.toLowerCase() === b.title.toLowerCase() ? 0 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
                }
                default: {
                    return false;
                }
            }
        });
        setProducts(sortedProducts);
    }, [products]);

    const deleteProductUnit = id => {
        initialProductData = initialProductData.filter(item => item._id !== id);
        setProducts(initialProductData);
    };

    const findProductUnitById = id => setCurrentProduct(products.find(item => item._id === id));

    const createProduct = payload => {
        initialProductData.push(payload);
    };

    const updateProduct = (id, payload) => {
        const productUnitToUpdateIndex = initialProductData.findIndex(item => item._id === id);
        if (productUnitToUpdateIndex !== -1) {
            initialProductData[productUnitToUpdateIndex] = { ...initialProductData[productUnitToUpdateIndex], ...payload };
            setCurrentProduct(initialProductData[productUnitToUpdateIndex]);
        }
    };

    return <ProductsContext.Provider value={useMemo(() => ({
        products,
        isLoading,
        isSuccess,
        filterSearchedProducts,
        filterCatalogedProducts,
        sortCatalogedProducts,
        currentProduct,
        deleteProductUnit,
        findProductUnitById,
        updateProduct,
        createProduct
    }), [
        products,
        isLoading,
        isSuccess,
        filterSearchedProducts,
        filterCatalogedProducts,
        sortCatalogedProducts,
        currentProduct,
        deleteProductUnit,
        findProductUnitById,
        updateProduct,
        createProduct
    ])}
    >
        {children}
    </ProductsContext.Provider>;
};

ProductsProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
