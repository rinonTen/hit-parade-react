import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Context} from '../context';
import favoriteIconBorder from '../images/favorite_border.svg';
import favoriteIconFill from '../images/favorite_fill.svg';
import arrowUpward from '../images/arrow_upward.svg';
import arrowDownward from '../images/arrow_downward.svg';
import cart from '../images/cart.svg';


export default function SongsComponent({song}) {
    const { toggleFavorite, incrementVotes, decrementVotes, addToCart } = useContext(Context); 
     
    const favoritedIcon = song.isFavorited ? favoriteIconFill : favoriteIconBorder;

    return (
        <article className="songs--container">
            <img onClick={() => toggleFavorite(song.id)} src={favoritedIcon} alt="heart-icon"/>
            <div className="songs-description">
                <p className="artist-name">{song.title}</p>
                <p className="artist-name">{song.artist}</p>
            </div>
            <div className="upvotes-container">
                <span>{song.upvotes}</span>
                <img onClick={() => incrementVotes(song.id)} src={arrowUpward} alt="image of up arrow"/>
            </div>
            <div className="downvotes-container">
                <span>{song.downvotes}</span>
                <img onClick={() => decrementVotes(song.id)} src={arrowDownward} alt="image of down arrow"/>
            </div>
            <div className="add-cart">
                <Link to="/cart">
                <img onClick={() => addToCart(song)} src={cart} alt="image of a cart"/>
                </Link>
            </div>
            <div className="song-lyrics">
                <Link to="/lyrics">
                    Lyrics
                </Link>
            </div>
        </article>
    )
}
