import React from "react";
import { Input } from "./SearchBarElements";

const SearchBar = ({ onChange }) => {

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        onChange(searchTerm);
    }

    return (
        <div>
            <Input type="text" placeholder="Search products" onChange={handleInputChange} />
        </div>
    );
};

export default SearchBar;
