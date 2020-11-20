import React, { useEffect, useState } from 'react';
import SongsData from './HitParadeData';

const Context = React.createContext();

function UseContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [songLyrics, setSongLyrics] = useState({});
     

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

            return { ...song };
        });
        setAllSongs(newSongsArray);
    }

    // Toggle cart icon
    function toggleCart(idToToggle) {
        const newSongsArray = allSongs.map(song => {
            if (song.id === idToToggle) {
                return {
                    ...song,
                    alreadyBought: !song.alreadyBought,
                };
            }

            return { ...song };
        });
        setAllSongs(newSongsArray);
    }

console.log(allSongs)
    // increment votes
    function incrementVotes(idToIncrement) {
        const newSongsArray = allSongs.map(song => {
            if (song.id === idToIncrement) {
                return {
                    ...song,
                    upvotes: song.upvotes + 1,
                };
            }

            return { ...song };
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

            return { ...song };
        });
        setAllSongs(newSongsArray);
    }


    // Add to cart 
    function addToCart(song) {
        setCartItems(prevItems => [...cartItems, song]);
    }

    // Showing the lyrics
    function showLyrics(song) {
        setSongLyrics(song);
    }

    // Delete a song
    function removeSong(songId) { 
        setCartItems(prevItems => prevItems.filter(item => item.id !== songId))
   }

    return <Context.Provider value={{ allSongs, toggleFavorite, incrementVotes, decrementVotes, addToCart, cartItems, removeSong, showLyrics, songLyrics, toggleCart }}>
        {props.children}
    </Context.Provider>
}

export { UseContextProvider, Context }
