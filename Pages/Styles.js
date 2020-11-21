import React, { useContext } from 'react'; 
import { Context } from '../context';
import StylesComponent from "../Components/StylesComponent"

export default function Styles() {
    const { allSongs } = useContext(Context);
    
      const stylesArr = allSongs.map(song => song.style);
      const removeDuplicatedStyles = stylesArr.filter((data,index)=>{
        return stylesArr.indexOf(data) === index;
      })

      const styleEl = removeDuplicatedStyles.map(song => <StylesComponent key={song} style={song} />);

    return (
        <div> 
            {styleEl}
        </div>
    )
}
