import React from 'react';

export default function LyricsComponent({song}) {
    
    return (
        <article className="songs-desc">
            <div>
                <span className="artist-name">{song.artist}:</span>
                <span className="artist-name">{song.title}</span>
            </div>
            <div  className="lyrics--container">
                <h2>Lyrics</h2>
                <p>{song.lyrics}</p>
            </div>
        </article>
    )
}
