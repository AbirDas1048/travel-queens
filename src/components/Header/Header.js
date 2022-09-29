import React from 'react';
import './Header.css';
import logo from '../../images/travel-icon-png-4962.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">
                        <img src={logo} alt="Logo" width="30" height="30" />Travel Queens
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;