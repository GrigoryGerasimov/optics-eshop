import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "./icons";
import { FormControl } from "../../common/form";
import { useProducts } from "../../hooks/useProducts.jsx";

export const SearchBar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const { filterSearchedProducts } = useProducts();

    const handleChange = ({ target }) => {
        setSearchValue(target.value);
    };

    useEffect(() => {
        navigate("/products");
        filterSearchedProducts(searchValue);
    }, [searchValue]);

    return (
        <div className="focus:bg-transparent w-full h-[10%] flex flex-row flex-wrap justify-center mt-[35px]">
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
