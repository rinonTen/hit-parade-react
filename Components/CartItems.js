import React from 'react'

export default function CartItems({song}) {
    return (
        <article className="songs--container">
            <img src="" alt="trash-icon"/>
            <div className="songs-description">
                <p className="artist-name">{song.title}</p>
                <p className="artist-name">{song.artist}</p>
            </div>
            <div className="upvotes-container">
                <p>{song.price}</p>
            </div>
        </article>
    )
}
