import React, {useEffect, useState } from 'react'; 
import SongsData from './HitParadeData';

const Context = React.createContext();

function UseContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        setAllSongs(SongsData)
    }, [])

    function toggleFavorite(idToToggle) {
        const newSongsArray = allSongs.map(song => {
            if (song.id === idToToggle) { 
                return {
                    ...song,
                    isFavorited: !song.isFavorited,
                };
            }
 
            return {...song};
        });
        setAllSongs(newSongsArray);
    }
    
    // increment votes
    function incrementVotes(idToIncrement) {
        const newSongsArray = allSongs.map(song => {
            if (song.id === idToIncrement) { 
                return {
                    ...song,
                    upvotes: song.upvotes + 1,
                };
            }
 
            return {...song};
        });
        setAllSongs(newSongsArray);
    }

    function decrementVotes(idToDecrement) {
        const newSongsArray = allSongs.map(song => {
            if (song.id === idToDecrement) { 
                return {
                    ...song,
                    downvotes: song.downvotes + 1,
                };
            }
 
            return {...song};
        });
        setAllSongs(newSongsArray);
    }

    return <Context.Provider value={{allSongs, toggleFavorite, incrementVotes, decrementVotes}}>
        {props.children}
    </Context.Provider>
}

export { UseContextProvider, Context }
