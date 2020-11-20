import React, {useContext} from 'react';
import {Context} from '../context';
import StylesComponent from "../Components/StylesComponent"

export default function Styles() {
    const {allSongs} = useContext(Context);
    const styleEl = allSongs.map(song => <StylesComponent key={song.id} style={song.style}/>);

    return (
        <div>
             {styleEl}
        </div>
    )
}
