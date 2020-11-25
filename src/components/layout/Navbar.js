import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/favorite">Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
