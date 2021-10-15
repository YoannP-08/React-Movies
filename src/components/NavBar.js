import styleNavBar from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={ styleNavBar.navbar }>
            <h1>The Particeep Movies</h1>
        </nav>
    );
};

export default NavBar;