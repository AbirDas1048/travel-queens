import React from 'react';
import './Header.css';
import logo from '../../images/travel-icon-png-4962.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="../../../public/index.html">Travel Queens</a> */}
                    <a className="navbar-brand" href="../../../public/index.html">
                        <img src={logo} alt="Logo" width="30" height="30" />Travel Queens
                    </a>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="../../../public/index.html">Home</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    );
};

export default Header;