import React, { useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const CategoriesContext = React.createContext();

export const useCategories = () => useContext(CategoriesContext);

const collectionInitState = {
    season: {
        ss22: [
            { _id: "#ss22mdeluxe", code: "mdeluxe" },
            { _id: "#ss22wdeluxe", code: "wdeluxe" },
            { _id: "#ss22kidsteens", title: "kidsteens" },
            { _id: "#ss22unisex", title: "unisex" }
        ],
        fw22: [
            { _id: "#fw22mdeluxe", code: "mdeluxe" },
            { _id: "#fw22wdeluxe", code: "wdeluxe" },
            { _id: "#fw22kidsteens", title: "kidsteens" },
            { _id: "#fw22unisex", title: "unisex" }
        ],
        ss23: [
            { _id: "#ss23mdeluxe", code: "mdeluxe" },
            { _id: "#ss23wdeluxe", code: "wdeluxe" },
            { _id: "#ss23kidsteens", title: "kidsteens" },
            { _id: "#ss23unisex", title: "unisex" }
        ],
        fw23: [
            { _id: "#fw23mdeluxe", code: "mdeluxe" },
            { _id: "#fw23wdeluxe", code: "wdeluxe" },
            { _id: "#fw23kidsteens", title: "kidsteens" },
            { _id: "#fw23unisex", title: "unisex" }
        ]
    }
};

const glassTypesInitState = {
    diopters: [
        { _id: "#dmen", title: "men" },
        { _id: "#dwomen", title: "women" },
        { _id: "#dkids", title: "kids" },
        { _id: "#dsports", title: "sports" },
        { _id: "#dphotochr", title: "photochromic" },
        { _id: "#dprogres", title: "progressive" },
        { _id: "#ddriver", title: "driver" },
        { _id: "#dcomp", title: "computer" },
        { _id: "#dread", title: "reading" }
    ],
    dioptersFree: [
        { _id: "#dfmen", title: "men" },
        { _id: "#dfwomen", title: "women" },
        { _id: "#dfkids", title: "kids" },
        { _id: "#dfstyle", title: "style" },
        { _id: "#dfflat", title: "flat" },
        { _id: "#dfsun", title: "sun" },
        { _id: "#dfswimming", title: "swimming" }
    ]
};

const frameTypesInitState = {
    type: [
        { _id: "#classic", title: "classic" },
        { _id: "#square", title: "square" },
        { _id: "#round", title: "round" },
        { _id: "#thick", title: "thick" },
        { _id: "#thin", title: "thin" },
        { _id: "#semi", title: "semi" }
    ]
};

const lenseTypesInitState = {
    type: [
        { _id: "#daily", title: "daily" },
        { _id: "#everyday", title: "everyday" },
        { _id: "#monthly", title: "monthly" },
        { _id: "#hygiene", title: "hygiene" }
    ]
};

export const CategoriesProvider = ({ children }) => {
    const [collection] = useState(collectionInitState);
    const [glassTypes] = useState(glassTypesInitState);
    const [frameTypes] = useState(frameTypesInitState);
    const [lenseTypes] = useState(lenseTypesInitState);

    return (
        <CategoriesContext.Provider value={useMemo(() => ({
            collection, glassTypes, frameTypes, lenseTypes
        }), [
            collection, glassTypes, frameTypes, lenseTypes
        ])}>
            {children}
        </CategoriesContext.Provider>
    );
};

CategoriesProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
