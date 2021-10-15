import { movies$ } from "../data/movies";

// Define types
export const GET_MOVIES = 'GET_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function getMovies() {
    return async function (dispatch) {
        movies$.then((data) => {
            return dispatch({
                type: GET_MOVIES,
                data: data
            });
        });
    };
};

export const deleteMovie = (id) => async (dispatch) => {
    return dispatch({
        type: DELETE_MOVIE,
        param: id
    });
};
