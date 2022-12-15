import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "./icons";
import { FormControl } from "../../common/form";
import { useProducts } from "../../hooks";
import paths from "../../../routes/paths.js";

export const SearchBar = () => {
    const { PRODUCTS } = paths;
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const { filterSearchedProducts } = useProducts();

    const handleChange = ({ target }) => {
        setSearchValue(target.value);
    };

    useEffect(() => {
        navigate(PRODUCTS);
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
