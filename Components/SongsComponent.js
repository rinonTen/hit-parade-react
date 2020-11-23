import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import favoriteIconBorder from '../images/favorite_border.svg';
import favoriteIconFill from '../images/favorite_fill.svg';
import arrowUpward from '../images/arrow_upward.svg';
import arrowDownward from '../images/arrow_downward.svg';
import cart from '../images/cart.svg';
import cartFilled from '../images/cart_filled.svg';

export default function SongsComponent({ song }) {
    const { toggleFavorite, toggleCart, incrementUpVotes, incrementDownVotes, addToCart } = useContext(Context);

    const handleCart = (obj, id) => {
        toggleCart(id)
        if (!song.alreadyBought) {
            addToCart(obj);
        }
    }

    const favoritedIcon = song.isFavorited ? favoriteIconFill : favoriteIconBorder;
    const cartIconSource = song.alreadyBought ? cartFilled : cart;

    return (
        <article className="songs--container">
            <img className="heartIcon" className="heartIcon" onClick={() => toggleFavorite(song.id)} src={favoritedIcon} alt="heart-icon" />
            <div className="songs-description">
                <p className="artist-name">{song.title}</p>
                <p className="artist-name">{song.artist}</p>
            </div>
            <div className="upvotes-container">
                <img className="arrow-up" onClick={() => incrementUpVotes(song.id)} src={arrowUpward} alt="image of up arrow" />
                <span>{song.upvotes}</span>
            </div>
            <div className="downvotes-container">
                <img className="arrow-down"  onClick={() => incrementDownVotes(song.id)} src={arrowDownward} alt="image of down arrow" />
                <span>{song.downvotes}</span>
            </div>
            <div className="add-cart">
                <img onClick={() => handleCart(song, song.id)} src={cartIconSource} alt="image of a cart" />
            </div>
            <div className="song-lyrics">
                <Link to={`/song/${song.id}`}>
                   {`. . .`}
                </Link>
            </div>
        </article>
    )
}
