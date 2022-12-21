import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { useCategories } from "./useCategories.jsx";
import { useReceiveProductsQuery } from "../../store/backendApi.js";
import PropTypes from "prop-types";

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

    const findProductUnitById = id => setCurrentProduct(products.find(item => item._id === id));

    return <ProductsContext.Provider value={useMemo(() => ({
        products,
        isLoading,
        isSuccess,
        filterSearchedProducts,
        filterCatalogedProducts,
        sortCatalogedProducts,
        currentProduct,
        findProductUnitById
    }), [
        products,
        isLoading,
        isSuccess,
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
