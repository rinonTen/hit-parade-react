import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Context} from '../context';
import favoriteIconBorder from '../images/favorite_border.svg';
import favoriteIconFill from '../images/favorite_fill.svg';
import arrowUpward from '../images/arrow_upward.svg';
import arrowDownward from '../images/arrow_downward.svg';
import cart from '../images/cart.svg';
import cartFilled from '../images/cart_filled.svg';

export default function SongsComponent({song}) {
    const { toggleFavorite, toggleCart, incrementVotes, decrementVotes, addToCart, showLyrics} = useContext(Context); 
 
    const handleCart = (obj, id) => {
        addToCart(obj);
        toggleCart(id)
    }
    const favoritedIcon = song.isFavorited ? favoriteIconFill : favoriteIconBorder;
    const cartIconSource = song.alreadyBought ? cartFilled : cart ;
 
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
                <img onClick={() =>handleCart(song, song.id)} src={cartIconSource} alt="image of a cart"/>
            </div>
            <div className="song-lyrics">
                <Link onClick={() => showLyrics(song)} to="/lyrics">
                    Lyrics
                </Link>
            </div>
        </article>
    )
}
