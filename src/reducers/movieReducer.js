import { DELETE_MOVIE, GET_MOVIES } from '../actions/movieActions';

const initialState = {
    movies: [],
    isLoaded: false,
};

const movieReducer = (state = initialState, action) => {
    const { type, data, param } = action;
    switch (type) {
        case GET_MOVIES:
        return {
            ...state,
            movies: data,
            isLoaded: true,
        };
        case DELETE_MOVIE:
            return {
                ...state, 
                movies: state.movies.filter(movie => movie.id !== param),
            }
        default:
        return state;
    };
};

export default movieReducer;