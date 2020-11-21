import React, {useContext} from 'react';
import {Context} from '../context';
import LyricsComponent from '../Components/LyricsComponent';

export default function Lyrics() {
    const {songLyrics} = useContext(Context)

    return (
        <div>
             <LyricsComponent song={songLyrics}/>
        </div>
    )
}
