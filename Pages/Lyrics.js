import React, {useContext} from 'react';
import { Context} from '../context';
import { useParams } from 'react-router-dom';
import LyricsComponent from '../Components/LyricsComponent';

export default function Lyrics() {
    const {songId} = useParams();
    const {allSongs} = useContext(Context)
  
    const songLyrics = allSongs.find(song => song.id == songId);
     
    return (
        <div>
            {
                songLyrics && <LyricsComponent song={songLyrics}/>
            }
        </div>
    )
}
