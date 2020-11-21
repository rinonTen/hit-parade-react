import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { Context } from '../context';
import headset from '../images/headset.svg';
import StyleDetailComponent from '../Components/StyleDetailsComponent';

export default function StylesDetail() {
    const { styleName } = useParams();
    const { allSongs } = useContext(Context); 
    const styles = allSongs.filter(song => song.style == styleName);
    
const styleDetailEl = styles.map(song => {
    return <StyleDetailComponent key={song.id} song={song}/>
})
    return (
        <div>
             <div className="style--container">
                <img src={headset} alt="headphone image" />
                <p>{styleName}</p>
            </div>
             {styleDetailEl}
        </div>
    )
}
