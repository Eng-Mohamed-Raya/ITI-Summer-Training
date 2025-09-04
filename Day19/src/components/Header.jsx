import { NavLink } from "react-router";

function Header() {
    return (   <header className='d-flex justify-content-between align-items-center p-4 bg-light'>
        <h1>Mohamed Raya</h1>
        <nav >
        <NavLink to="/" className='mx-4'>Home</NavLink>
        <NavLink to="/about" className='mx-4'>About</NavLink>
        <NavLink to="/contact" className='mx-4'>Contact</NavLink>
        <NavLink to="/posts" className='mx-4'>Posts</NavLink>
    </nav>
    </header> );
}

export default Header;