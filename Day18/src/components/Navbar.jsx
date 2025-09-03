import { NavLink } from "react-router";
function Navbar() {
    return (
     <nav >
        <NavLink to="/" className='mx-4'>Home</NavLink>
        <NavLink to="/about" className='mx-4'>About</NavLink>
        <NavLink to="/contact" className='mx-4'>Contact</NavLink>
    </nav> );
}

export default Navbar;