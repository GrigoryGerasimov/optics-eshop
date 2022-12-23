import React, { useState, useContext, useMemo } from "react";
import { useProducts } from "./useProducts";
import PropTypes from "prop-types";

const initialState = {
    collectionSubCatalog: false,
    glassSubCatalog: false,
    frameSubCatalog: false,
    lenseSubCatalog: false
};

const CatalogsContext = React.createContext();

export const useCatalogs = () => useContext(CatalogsContext);

export const CatalogsProvider = ({ children }) => {
    const [showSubCatalogs, setShowSubCatalogs] = useState(initialState);
    const [active, setActive] = useState(null);
    const { filterCatalogedProducts } = useProducts();

    const handleAddActiveState = id => setActive(id);
    const handleRemoveActiveState = () => setActive(null);

    const handleSubCatalogsSwitch = ({ target }) => {
        setShowSubCatalogs(prevState => ({
            ...prevState,
            [target.id]: !setShowSubCatalogs[target.id]
        }));
        handleAddActiveState(target.id);
    };

    const handleSubCatalogsReset = () => {
        setShowSubCatalogs(initialState);
        filterCatalogedProducts("_");
        handleRemoveActiveState();
    };

    return (
        <CatalogsContext.Provider value={useMemo(() => ({
            showSubCatalogs, active, handleAddActiveState, handleRemoveActiveState, handleSubCatalogsSwitch, handleSubCatalogsReset
        }), [
            showSubCatalogs, active, handleAddActiveState, handleRemoveActiveState, handleSubCatalogsSwitch, handleSubCatalogsReset
        ])}>
            {children}
        </CatalogsContext.Provider>
    );
};

CatalogsProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
