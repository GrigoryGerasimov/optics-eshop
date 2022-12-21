import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { useCategories } from "./useCategories.jsx";
import { useReceiveProductsQuery } from "../../store/backendApi.js";
import PropTypes from "prop-types";

const ProductsContext = React.createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isProductsLoading, setProductsLoading] = useState(true);
    const [currentProduct, setCurrentProduct] = useState({});
    const { collection, glassTypes, frameTypes, lenseTypes, findCategoryTitleById } = useCategories();

    const { isLoading: isProductsDataLoading, isSuccess: isProductsDataLoadSuccessul, data: productsData } = useReceiveProductsQuery({ refetchOnFocus: true });

    useEffect(() => {
        if (!isProductsDataLoading && isProductsDataLoadSuccessul) {
            setProducts(productsData.data);
            setProductsLoading(false);
        }
    }, [productsData]);

    const filterSearchedProducts = useCallback(data => {
        if (!isProductsLoading) {
            const searchedProducts = products.filter(productUnit => productUnit.title.toLowerCase().includes(data.toLowerCase()));
            setProducts(searchedProducts);
        }
    }, [isProductsLoading]);

    const filterCatalogedProducts = useCallback((criteria, category, type, subtype) => {
        if (!isProductsLoading) {
            const filteredProducts = products.filter(productUnit => {
                switch (criteria) {
                    case "collection": {
                        for (const cat of Object.keys(collection[category])) {
                            if (cat === type) {
                                for (const item of collection[category][cat]) {
                                    if (productUnit.params.map((param, i) => findCategoryTitleById(param)[i]()).includes(!subtype ? item.code : subtype)) return productUnit;
                                }
                            }
                        }
                        break;
                    }
                    case "glassTypes": {
                        for (const item of glassTypes[category]) {
                            if (productUnit.params.map((param, i) => findCategoryTitleById(param)[i]()).includes(!type ? item.code : type)) return productUnit;
                        }
                        break;
                    }
                    case "frameTypes": {
                        for (const item of frameTypes[category]) {
                            if (productUnit.params.map((param, i) => findCategoryTitleById(param)[i]()).includes(!type ? item.code : type)) return productUnit;
                        }
                        break;
                    }
                    case "lenseTypes": {
                        for (const item of lenseTypes[category]) {
                            if (productUnit.params.map((param, i) => findCategoryTitleById(param)[i]()).includes(!type ? item.code : type)) return productUnit;
                        }
                        break;
                    }
                    default: return productUnit;
                }
                return false;
            });
            setProducts(filteredProducts);
        }
    }, [isProductsLoading, collection, glassTypes, frameTypes, lenseTypes]);

    const sortCatalogedProducts = useCallback((criteria, type) => {
        if (!isProductsLoading) {
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
        }
    }, [isProductsLoading, products]);

    const findProductUnitById = id => setCurrentProduct(products.find(item => item._id === id));

    return <ProductsContext.Provider value={useMemo(() => ({
        products,
        isProductsLoading,
        filterSearchedProducts,
        filterCatalogedProducts,
        sortCatalogedProducts,
        currentProduct,
        findProductUnitById
    }), [
        products,
        isProductsLoading,
        filterSearchedProducts,
        filterCatalogedProducts,
        sortCatalogedProducts,
        currentProduct,
        findProductUnitById
    ])}
    >
        {children}
    </ProductsContext.Provider>;
};

ProductsProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
