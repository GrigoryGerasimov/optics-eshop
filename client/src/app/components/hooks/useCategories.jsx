import React, { useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const CategoriesContext = React.createContext();

export const useCategories = () => useContext(CategoriesContext);

const collectionInitState = {
    season: {
        ss22: [
            { id: "#ss22mdeluxe", code: "mdeluxe", title: "Men's Collection Deluxe Spring-Summer 2022" },
            { id: "#ss22wdeluxe", code: "wdeluxe", title: "Women's Collection Deluxe Spring-Summer 2022" },
            { id: "#ss22kidsteens", code: "kidsteens", title: "Kids' & Teens' Collection Deluxe Spring-Summer 2022" },
            { id: "#ss22unisex", code: "unisex", title: "Unisex Collection Deluxe Spring-Summer 2022" }
        ],
        fw22: [
            { id: "#fw22mdeluxe", code: "mdeluxe", title: "Men's Collection Deluxe Fall-Winter 2022" },
            { id: "#fw22wdeluxe", code: "wdeluxe", title: "Women's Collection Deluxe Fall-Winter 2022" },
            { id: "#fw22kidsteens", code: "kidsteens", title: "Kids' & Teens' Collection Deluxe Fall-Winter 2022" },
            { id: "#fw22unisex", code: "unisex", title: "Unisex Collection Deluxe Fall-Winter 2022" }
        ],
        ss23: [
            { id: "#ss23mdeluxe", code: "mdeluxe", title: "Men's Collection Deluxe Spring-Summer 2023" },
            { id: "#ss23wdeluxe", code: "wdeluxe", title: "Women's Collection Deluxe Spring-Summer 2023" },
            { id: "#ss23kidsteens", code: "kidsteens", title: "Kids' & Teens' Collection Deluxe Spring-Summer 2023" },
            { id: "#ss23unisex", code: "unisex", title: "Unisex Collection Deluxe Spring-Summer 2023" }
        ],
        fw23: [
            { id: "#fw23mdeluxe", code: "mdeluxe", title: "Men's Collection Deluxe Fall-Winter 2023" },
            { id: "#fw23wdeluxe", code: "wdeluxe", title: "Women's Collection Deluxe Fall-Winter 2023" },
            { id: "#fw23kidsteens", code: "kidsteens", title: "Kids' & Teens' Collection Deluxe Fall-Winter 2023" },
            { id: "#fw23unisex", code: "unisex", title: "Unisex Collection Deluxe Fall-Winter 2023" }
        ]
    }
};

const glassTypesInitState = {
    diopters: [
        { id: "#dmen", code: "men", title: "Glasses with diopters for men" },
        { id: "#dwomen", code: "women", title: "Glasses with diopters for women" },
        { id: "#dkids", code: "kids", title: "Glasses with diopters for kids and teens" },
        { id: "#dsports", code: "sports", title: "Sports glasses with diopters for active outdoor training" },
        { id: "#dphotochr", code: "photochromic", title: "Elegant photochromic glasses with diopters" },
        { id: "#dprogres", code: "progressive", title: "Progressive glasses with diopters" },
        { id: "#ddriver", code: "driver", title: "Glasses with diopters for driving" },
        { id: "#dcomp", code: "computer", title: "Glasses with diopters for working on computers and other tech gadgets" },
        { id: "#dread", code: "reading", title: "Glasses with diopters for long reading" }
    ],
    dioptersFree: [
        { id: "#dfmen", code: "men", title: "Diopter-free glasses for men" },
        { id: "#dfwomen", code: "women", title: "Diopter-free glasses for women" },
        { id: "#dfkids", code: "kids", title: "Diopter-free glasses for kids and teens" },
        { id: "#dfstyle", code: "style", title: "Stylish diopter-free glasses for everyone" },
        { id: "#dfflat", code: "flat", title: "Flat diopter-free glasses" },
        { id: "#dfsun", code: "sun", title: "Diopter-free sun glasses" },
        { id: "#dfswimming", code: "swimming", title: "Diopter-free glasses for active swimming" }
    ]
};

const frameTypesInitState = {
    type: [
        { id: "#classic", code: "classic", title: "Classic glass frame" },
        { id: "#square", code: "square", title: "Square glass frame" },
        { id: "#round", code: "round", title: "Round glass frame" },
        { id: "#thick", code: "thick", title: "Thick glass frame" },
        { id: "#thin", code: "thin", title: "Thin glass frame" },
        { id: "#semi", code: "semi", title: "Semi-frame" }
    ]
};

const lenseTypesInitState = {
    type: [
        { id: "#daily", code: "daily", title: "Lenses for daily use purpose" },
        { id: "#everyday", code: "everyday", title: "Lenses for everyday use" },
        { id: "#monthly", code: "monthly", title: "Lenses for monthly use only (ca. 1-3 months)" },
        { id: "#hygiene", code: "hygiene", title: "Tools for keeping your lenses clean and bacteria-free" }
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
