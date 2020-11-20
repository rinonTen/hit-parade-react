import React from 'react'

export default function LyricsComponent({song}) {
    return (
        <article className="lyrics--container">
        <div className="songs-description">
            <p className="artist-name">{song.artist}</p>
            <p className="artist-name">{song.title}</p>
        </div>
        <div>
            <h2>Lyrics</h2>
            <p>{song.lyrics}</p>
        </div>
        </article>
    )
}
