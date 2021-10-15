import LikesDislikes from "../LikesDislikes";
import DeleteMovie from "./DeleteMovie";

import styleMovieDetail from "../../styles/MovieDetail.module.css"


const MovieDetail = ({ movie }) => {
    const {title, category } = movie;
    return (
        <div className={styleMovieDetail.card}>
            <div className={styleMovieDetail.cardHeader}>
                <h1>{ title }</h1>
                <p>{ category }</p>
            </div>
            <div className={styleMovieDetail.cardFooter}>
                <LikesDislikes element={movie}/>
                <DeleteMovie movie={movie}/>
            </div>
        </div>
    );
};


export default MovieDetail;