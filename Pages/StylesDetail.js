import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { Context } from '../context';
import LyricsComponent from '../Components/LyricsComponent';

export default function StylesDetail() {
    const { styleName } = useParams();
    const { allSongs } = useContext(Context); 
    const styles = allSongs.filter(song => song.style == styleName);
    
const styleDetailEl = styles.map(song => {
    return <LyricsComponent key={song.id} key song={song}/>
})
    return (
        <div>
             {styleDetailEl}
        </div>
    )
}
