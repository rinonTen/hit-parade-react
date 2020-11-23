import React from 'react' 
import { Link } from 'react-router-dom';

export default function stylesDetailComponent({ song }) {
 
    return (
        <article className="style-desc">
            <Link to={`/song/${song.id}`}>
                <div className="span-container">
                    <span className="artist-name">{song.artist}</span>
                    <span className="artist-title">{song.title}</span>
                </div>
            </Link>
        </article>
    )
}
