import React, {useContext} from 'react';
import { Context } from '../context';
import SongsComponent from '../Components/SongsComponent';

function Songs() {
    const { allSongs } = useContext(Context); 
     
    const songsElement = allSongs.map(song => {
        return <SongsComponent key={song.id} song={song} />
    })



    return (
        <div>
            {songsElement}
        </div>
    )
}

export default Songs;
