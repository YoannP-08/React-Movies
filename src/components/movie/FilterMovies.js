import { useState, useEffect } from "react";

import Dropdown from "../Dropdown";

import styleFilterMovies from "../../styles/FilterMovies.module.css";

const FilterMovies = ({ movies, selectFilter }) => {
    const [filterByCategories, setFilterByCategories] = useState([]);

    useEffect(() => {
        movies.map(movie => {
            const { category } = movie;
            const isAFilter = filterByCategories.includes(category);
            if (!isAFilter) {
                setFilterByCategories([...filterByCategories, category]);
            }
            return filterByCategories;
        })
    }, [movies, filterByCategories]);

    const handleCategoryChange = (category) => {
        selectFilter(category);
    };

    return (
        <Dropdown
            className={styleFilterMovies.categoryFilter}
            name="Category" onChange={handleCategoryChange}
            items={filterByCategories.sort()} 
        />
    );
};

export default FilterMovies;