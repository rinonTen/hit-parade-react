import React from 'react'

export default function stylesDetailComponent({song}) {
    
    return (
        <article className="style-desc">
            <div className="span-container">
                <span className="artist-name">{song.artist}</span>
                <span className="artist-title">{song.title}</span>
            </div>
        </article>
    )
}
