import styleHome from '../styles/Home.module.css';
import MovieList from './movie/MoviesList';

const Home = () => {
    return ( 
        <div className={ styleHome.content }>
            <MovieList />
        </div>
    );
};

export default Home;