import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { useReceiveLenseTypesQuery, useReceiveFrameTypesQuery, useReceiveGlassTypesQuery, useReceiveCollectionsQuery } from "../../store/backendApi.js";
import PropTypes from "prop-types";

const CategoriesContext = React.createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
    const [collection, setCollection] = useState({});
    const [glassTypes, setGlassTypes] = useState({});
    const [frameTypes, setFrameTypes] = useState({});
    const [lenseTypes, setLenseTypes] = useState({});

    const [isCollectionLoading, setCollectionLoading] = useState(true);
    const [isGlassTypesLoading, setGlassTypesLoading] = useState(true);
    const [isFrameTypesLoading, setFrameTypesLoading] = useState(true);
    const [isLenseTypesLoading, setLenseTypesLoading] = useState(true);

    const { isLoading: isLenseTypesDataLoading, isSuccess: isLenseTypesDataLoadSuccessul, data: lenseTypesData } = useReceiveLenseTypesQuery({ refetchOnFocus: true });
    const { isLoading: isFrameTypesDataLoading, isSuccess: isFrameTypesDataLoadSuccessul, data: frameTypesData } = useReceiveFrameTypesQuery({ refetchOnFocus: true });
    const { isLoading: isGlassTypesDataLoading, isSuccess: isGlassTypesDataLoadSuccessul, data: glassTypesData } = useReceiveGlassTypesQuery({ refetchOnFocus: true });
    const { isLoading: isCollectionsDataLoading, isSuccess: isCollectionsDataLoadSuccessul, data: collectionsData } = useReceiveCollectionsQuery({ refetchOnFocus: true });

    const dataInit = useCallback(() => {
        if (!isLenseTypesDataLoading && isLenseTypesDataLoadSuccessul) {
            const receivedLenseTypes = {};
            lenseTypesData.data.forEach(dataItem => {
                for (const key in dataItem) {
                    if (key === "type") receivedLenseTypes[key] = dataItem[key];
                }
            });
            setLenseTypes(receivedLenseTypes);
            setLenseTypesLoading(false);
        }
        if (!isFrameTypesDataLoading && isFrameTypesDataLoadSuccessul) {
            const receivedFrameTypes = {};
            frameTypesData.data.forEach(dataItem => {
                for (const key in dataItem) {
                    if (key === "type") receivedFrameTypes[key] = dataItem[key];
                }
            });
            setFrameTypes(receivedFrameTypes);
            setFrameTypesLoading(false);
        }
        if (!isGlassTypesDataLoading && isGlassTypesDataLoadSuccessul) {
            const receivedGlassTypes = {};
            for (const dataItem of glassTypesData.data) {
                for (const key in dataItem) {
                    if (key === "diopters" || key === "dioptersFree") receivedGlassTypes[key] = dataItem[key];
                }
            }
            setGlassTypes(receivedGlassTypes);
            setGlassTypesLoading(false);
        }
        if (!isCollectionsDataLoading && isCollectionsDataLoadSuccessul) {
            const receivedCollections = {};
            for (const dataItem of collectionsData.data) {
                for (const key in dataItem) {
                    if (key === "season") receivedCollections[key] = dataItem[key];
                }
            }
            setCollection(receivedCollections);
            setCollectionLoading(false);
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
        glassTypesData,
        isCollectionsDataLoading,
        isCollectionsDataLoadSuccessul,
        collectionsData
    ]);

    useEffect(() => {
        dataInit();
    }, [dataInit]);

    const findCategoryTitleById = useCallback(id => [
        () => {
            for (const extKey in collection) {
                if (!Array.isArray(collection[extKey]) && typeof collection[extKey] === "object") {
                    for (const intKey in collection[extKey]) {
                        if (Array.isArray(collection[extKey][intKey])) {
                            const categoryItemFound = collection[extKey][intKey].find(item => item._id === id);
                            if (categoryItemFound) return categoryItemFound.code;
                        }
                    }
                }
            }
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
            collection, glassTypes, frameTypes, lenseTypes, findCategoryTitleById, isCollectionLoading, isGlassTypesLoading, isFrameTypesLoading, isLenseTypesLoading
        }), [
            collection, glassTypes, frameTypes, lenseTypes, findCategoryTitleById, isCollectionLoading, isGlassTypesLoading, isFrameTypesLoading, isLenseTypesLoading
        ])}>
            {children}
        </CategoriesContext.Provider>
    );
};

CategoriesProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
