import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
const HeaderEl = Styled.header`
    & h1 {
        font-size: 72px;
        line-height: 88px;
        /* identical to box height */
        color: #272343;
    }
`
function Header() {

    return (
        <HeaderEl>
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
        </HeaderEl>
    );
}

export default Header;
