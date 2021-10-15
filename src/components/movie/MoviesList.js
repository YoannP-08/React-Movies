import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterMovies from './FilterMovies';
import MovieDetail from './MovieDetail';
import Pagination from '../Pagination';

import { getMovies } from '../../actions/movieActions';

import styleMoviesList from '../../styles/MoviesList.module.css';

const MovieList = ({ getMovies, movies, isLoaded }) => {
    const [selectedFilter, setSelectedFilter] = useState('default');
    const [moviesPerPage, setMoviesPerPage] = useState();

    useEffect(() => {
        if (!isLoaded) {
            getMovies();
        }
    }, [isLoaded, getMovies, movies]);

    const moviesToDisplay = moviesPerPage ? moviesPerPage : movies;

    return (
        <div>
            {isLoaded ?
                <FilterMovies movies={movies} selectFilter={setSelectedFilter} /> : 
                (<h1>Loading</h1>)
            }
            {
                isLoaded ? (
                    <div className={styleMoviesList.container}>
                    {
                        moviesToDisplay.filter(movie => {
                            if (selectedFilter === 'default') {
                                return movie;
                            }
                            return movie.category === selectedFilter;
                        }).map((movie, index) => (
                            <MovieDetail movie={movie} key={index} />
                        ))
                    }
                    </div>
                ) : (
                    <h1>Loading</h1>
                )
            }
            <Pagination items={movies} itemsToPaginate={setMoviesPerPage} />
        </div>
    );
};

const mapStateToProp = (state) => ({
    movies: state.movieReducer.movies,
    isLoaded: state.movieReducer.isLoaded,
});

const mapDispatch = (dispatch) => bindActionCreators({
    getMovies
}, dispatch);

export default connect(mapStateToProp,mapDispatch)(MovieList);