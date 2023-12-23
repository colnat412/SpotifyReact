import './App.css';
import Navbar from './components/navbar/Navbar';
import DetailsSong from './components/details/DetailsSong';
import ListSong from './components/details/ListSong';
import DataSongs from './data/songs.json'
import { PlaySong } from './components/playsong/PlaySong';
import { useState } from 'react';
import { Songs } from './Context';

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) setSong(DataSongs[0])
    else  setSong(song);
  }
  return (
    <div className='App'>
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar></Navbar>
        <div className='grid grid-cols-3 bg-slate-500 h-screen-navbar-player '>
          <DetailsSong></DetailsSong>
          <ListSong></ListSong>
        </div>
        <PlaySong></PlaySong>
      </Songs.Provider>
    </div>
  );
}

export default App;
