import React from 'react';
import trashIcon from '../images/trash_icon.svg';

export default function CartItems({song, removeSong}) {

    return (
        <article className="songs--container cart-items--container">
            <img onClick={removeSong} src={trashIcon} alt="trash-icon"/>
            <div className="songs-description">
                <p className="artist-name">{song.title}</p>
                <p className="artist-name">{song.artist}</p>
            </div>
            <div className="upvotes-container">
                <p>Ar {song.price}</p>
            </div>
        </article>
    )
}
