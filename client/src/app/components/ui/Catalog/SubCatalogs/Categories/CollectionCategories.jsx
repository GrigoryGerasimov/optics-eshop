import React from "react";
import { useCategories, useProducts } from "../../../../../hooks";
import { useNavigate } from "react-router-dom";
import paths from "../../../../../routes/paths";
import Loader from "../../../../common/Loader";
import PropTypes from "prop-types";

const CollectionCategories = ({ status, season, active, onAddActiveState }) => {
    const { filterCatalogedProducts } = useProducts();
    const { collection, isCollectionLoading } = useCategories();
    const navigate = useNavigate();
    const { PRODUCTS } = paths;

    const handleCategoriesFilter = ({ target }) => {
        navigate(`/${PRODUCTS}`);
        filterCatalogedProducts("collection", "season", season, target.id);
        onAddActiveState(target.id);
    };

    if (isCollectionLoading) return (<div className="w-[inherit] flex justify-center"><Loader/></div>);

    return (
        <ul className={status ? "block leading-10 mb-[10px] text-end" : "hidden"}>
            {collection.season[season].map(collectionType => (
                <li
                    key={collectionType._id}
                    className={`${active === collectionType.code ? "font-extrabold" : ""} cursor-pointer hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none`}
                    id={collectionType.code}
                    onClick={handleCategoriesFilter}
                >
                    {collectionType.title.slice(0, collectionType.title.indexOf(" "))}
                </li>
            ))}
        </ul>
    );
};

export default CollectionCategories;

CollectionCategories.propTypes = {
    status: PropTypes.bool,
    season: PropTypes.string,
    active: PropTypes.string,
    onAddActiveState: PropTypes.func
};
