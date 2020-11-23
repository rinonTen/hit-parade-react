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
 
    // increment votes
    function incrementUpVotes(idToIncrement) {
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

    function incrementDownVotes(idToIncrement) {
        const newSongsArray = allSongs.map(song => {
            if (song.id === idToIncrement) {
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
    // function showLyrics(song) {
    //     setSongLyrics(song);
    // }

    function showLyrics(songId) {
        const songToShowInLyricsPage = allSongs.find(song => song.id === songId)
        setSongLyrics(songToShowInLyricsPage);
    }

    // Delete a song
    function removeSong(songId) { 
        setCartItems(prevItems => prevItems.filter(item => item.id !== songId))
   }

   // Add a song 
   function handleForm(e) {
    e.preventDefault();
    const form = e.target; 
    const {title, artist, price, styles, lyrics} = form;
    const newSongObj = {
        id: Date.now(),
        title: title.value,
        artist: artist.value,
        price: price.value,
        upvotes: 0,
        downvotes: 0,
        isFavorited: false,
        style: styles.value,
        lyrics: lyrics.value,
    }
      allSongs.push(newSongObj);
      setAllSongs([...allSongs])
      form.reset();
}

// Sort the songs
allSongs.sort((songA, songB) =>{
   const song1= songA.upvotes - songB.upvotes;
   const song2= songA.downvotes - songB.downvotes;
   return song2 - song1;
})
  
    return <Context.Provider value={{ allSongs, toggleFavorite, incrementUpVotes, incrementDownVotes, addToCart, cartItems, setCartItems, removeSong, showLyrics, songLyrics, toggleCart, handleForm}}>
        {props.children}
    </Context.Provider>
}

export { UseContextProvider, Context }
