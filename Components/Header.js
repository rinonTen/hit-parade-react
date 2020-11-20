import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';

function Header() {

    return (
        <header>
            <h1 className="page_title">
                Hit Parade
            </h1>
            <nav className="header-nav">
                <li className="songs-menu">
                    <Link to="/">
                        🔥 Popular songs
                    </Link>
                </li>
                <li className="songs-menu">
                    <Link to="/styles">
                        💗 Styles
                    </Link>
                </li>
                <li className="songs-menu">
                    <Link to="/add">
                        🌚 Add
                    </Link>
                </li>
                <li className="songs-menu">
                    <Link to="/cart">
                        🛒 Cart
                    </Link>
                </li>
            </nav>
        </header>
    );
}

export default Header;
