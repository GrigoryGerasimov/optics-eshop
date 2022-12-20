import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { useReceiveLenseTypesQuery, useReceiveFrameTypesQuery, useReceiveGlassTypesQuery } from "../../store/backendApi.js";
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

export const CategoriesProvider = ({ children }) => {
    const [collection] = useState(collectionInitState);
    const [glassTypes, setGlassTypes] = useState({});
    const [frameTypes, setFrameTypes] = useState({});
    const [lenseTypes, setLenseTypes] = useState({});

    const { isLoading: isLenseTypesDataLoading, isSuccess: isLenseTypesDataLoadSuccessul, data: lenseTypesData } = useReceiveLenseTypesQuery({ refetchOnFocus: true });
    const { isLoading: isFrameTypesDataLoading, isSuccess: isFrameTypesDataLoadSuccessul, data: frameTypesData } = useReceiveFrameTypesQuery({ refetchOnFocus: true });
    const { isLoading: isGlassTypesDataLoading, isSuccess: isGlassTypesDataLoadSuccessul, data: glassTypesData } = useReceiveGlassTypesQuery({ refetchOnFocus: true });

    const dataInit = useCallback(() => {
        if (!isLenseTypesDataLoading && isLenseTypesDataLoadSuccessul) {
            const receivedLenseTypes = {};
            lenseTypesData.data.forEach(dataItem => {
                for (const key in dataItem) {
                    if (key === "type") receivedLenseTypes[key] = dataItem[key];
                }
            });
            setLenseTypes(receivedLenseTypes);
        }
        if (!isFrameTypesDataLoading && isFrameTypesDataLoadSuccessul) {
            const receivedFrameTypes = {};
            frameTypesData.data.forEach(dataItem => {
                for (const key in dataItem) {
                    if (key === "type") receivedFrameTypes[key] = dataItem[key];
                }
            });
            setFrameTypes(receivedFrameTypes);
        }
        if (!isGlassTypesDataLoading && isGlassTypesDataLoadSuccessul) {
            const receivedGlassTypes = {};
            for (const dataItem of glassTypesData.data) {
                for (const key in dataItem) {
                    if (key === "diopters" || key === "dioptersFree") receivedGlassTypes[key] = dataItem[key];
                }
            }
            setGlassTypes(receivedGlassTypes);
        }
    }, [
        isLenseTypesDataLoading,
        isLenseTypesDataLoadSuccessul,
        lenseTypesData,
        isFrameTypesDataLoading,
        isFrameTypesDataLoadSuccessul,
        frameTypesData,
        isGlassTypesDataLoading,
        isGlassTypesDataLoadSuccessul,
        glassTypesData
    ]);

    useEffect(() => {
        dataInit();
    }, [dataInit]);

    const findCategoryTitleById = useCallback(id => [
        () => {
            return "not-ready-yet";
        },
        () => {
            for (const key in glassTypes) {
                if (Array.isArray(glassTypes[key])) {
                    const categoryItemFound = glassTypes[key].find(item => item._id === id);
                    if (categoryItemFound) return categoryItemFound.code;
                }
            }
        },
        () => {
            for (const key in frameTypes) {
                if (Array.isArray(frameTypes[key])) {
                    const categoryItemFound = frameTypes[key].find(item => item._id === id);
                    if (categoryItemFound) return categoryItemFound.code;
                }
            }
        },
        () => {
            for (const key in lenseTypes) {
                if (Array.isArray(lenseTypes[key])) {
                    const categoryItemFound = lenseTypes[key].find(item => item._id === id);
                    if (categoryItemFound) return categoryItemFound.code;
                }
            }
        }
    ], [lenseTypes, frameTypes]);

    return (
        <CategoriesContext.Provider value={useMemo(() => ({
            collection, glassTypes, frameTypes, lenseTypes, findCategoryTitleById
        }), [
            collection, glassTypes, frameTypes, lenseTypes, findCategoryTitleById
        ])}>
            {children}
        </CategoriesContext.Provider>
    );
};

CategoriesProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
