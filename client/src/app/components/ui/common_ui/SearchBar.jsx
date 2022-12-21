import React, { useState, useEffect } from "react";
import { SearchIcon } from "./icons";
import { FormControl } from "../../common/form";
import { useProducts, useCatalogs } from "../../../hooks";

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const { filterSearchedProducts } = useProducts();
    const { handleSubCatalogsReset } = useCatalogs();

    const handleChange = ({ target }) => {
        setSearchValue(target.value);
    };

    useEffect(() => {
        handleSubCatalogsReset();
        filterSearchedProducts(searchValue);
    }, [searchValue]);

    return (
        <div className="focus:bg-transparent w-full h-[10%] flex flex-row flex-wrap justify-center mt-[55px]">
            <SearchIcon/>
            <FormControl
                formFieldClass="w-[70%]"
                id="search"
                type="search"
                name="search"
                placeholder="Search..."
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
};
