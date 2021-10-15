import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Swal from 'sweetalert2';

import Button from "../Button";

import { deleteMovie } from "../../actions/movieActions";

import styleDeleteMovie from "../../styles/DeleteMovie.module.css"


const DeleteMovie = ({ movie, deleteMovie }) => {
    const handleDeleteMovie = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1B0B33',
            cancelButtonColor: '#ff5047',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMovie(id)
                Swal.fire(
                    'Deleted!',
                    'Movie deleted successfully.',
                    'success'
                );
            }
        });
    };

    return (
        <div>
            <Button
                className={styleDeleteMovie.delButton}
                index={movie.id}
                text="Delete"
                onClick={() => handleDeleteMovie(movie.id)}
            />
        </div>
    );
};

const mapDispatch = (dispatch) => bindActionCreators({
    deleteMovie
}, dispatch);

export default connect(this, mapDispatch)(DeleteMovie); 

