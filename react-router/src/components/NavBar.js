import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    )
}

export default NavBar;