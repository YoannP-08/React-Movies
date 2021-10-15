import { useState, useEffect } from "react";

import Dropdown from "./Dropdown";
import Button from "./Button";

import stylePagination from '../styles/Pagination.module.css';

const Pagination = ({ items, itemsToPaginate }) => {
    // Keep track of total number of pages
    const pageNumbers = [];
    const [nbrOfMoviesPerPage, setNbrOfMoviesPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    // Get current movies
    const indexOfLastMovie = currentPage * nbrOfMoviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - nbrOfMoviesPerPage;
    
    useEffect(() => {
        itemsToPaginate(items.slice(indexOfFirstMovie, indexOfLastMovie));
    }, [items, indexOfFirstMovie, indexOfLastMovie, itemsToPaginate]);

    for (let i = 1; i <= Math.ceil(items.length / nbrOfMoviesPerPage); i++) {
        pageNumbers.push(i);
    };

    const handleChangePage = pageNumber => setCurrentPage(pageNumber);

    const handleChangeToPreviousPage =()=>{
        if(currentPage === 1) {
            return
        }
        setCurrentPage(currentPage - 1)
    };

    const handleChangeToNextPage =()=>{
        setCurrentPage(currentPage + 1)
    };

    const handleChangeItemsPerPage = (number) => {
        setNbrOfMoviesPerPage(number);
        console.log(number)
    };

    return (
        <ul className={stylePagination.pagination}>
            <Dropdown
                name="pagination"
                onChange={handleChangeItemsPerPage}
                items={[4, 8, 12]}
                className={stylePagination.moviesPerPage}
            />
            {
                currentPage !== 1 &&
                <Button className={stylePagination.navigation} text="Prev" onClick={handleChangeToPreviousPage}/>
            }
            {pageNumbers.map(number => (
                <li key={number} className={stylePagination.pageItem}>
                    <p onClick={() => handleChangePage(number)} href='!#' className={stylePagination.pageLink}>
                        {number}
                    </p>
                </li>
            ))}
            <Button className={stylePagination.navigation} text="Next" onClick={handleChangeToNextPage}/>
        </ul>
    );
};

export default Pagination;