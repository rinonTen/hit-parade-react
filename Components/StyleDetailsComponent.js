import React, {useContext} from 'react'
import { Context } from '../context';
import { Link } from 'react-router-dom';

export default function stylesDetailComponent({ song }) {
    const { showLyrics } = useContext(Context);

    return (
        <article className="style-desc">
            <Link onClick={() => showLyrics(song.id)} to={`/song/${song.id}`}>
                <div className="span-container">
                    <span className="artist-name">{song.artist}</span>
                    <span className="artist-title">{song.title}</span>
                </div>
            </Link>
        </article>
    )
}
