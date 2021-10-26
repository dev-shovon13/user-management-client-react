import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom border-2 shadow-sm">
            <div className="container">
                <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/users" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="" height="40px" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/users" className="nav-link" aria-current="page" >Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/addUser" className="nav-link" aria-current="page" >Add User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/updateUser" className="nav-link" aria-current="page" >Update User</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;