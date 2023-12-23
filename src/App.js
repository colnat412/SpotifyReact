import './App.css';
import Navbar from './components/navbar/Navbar';
import DetailsSong from './components/details/DetailsSong';
import ListSong from './components/details/ListSong';
import DataSongs from './data/songs.json'
import { useState } from 'react';
import Songs from './Context';
import { PlaySong } from './components/playsong/PlaySong';

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  return (
    <div className='App'>
      <Songs.Provider value={{ DataSongs, song }}>
        <Navbar></Navbar>
        <div className='grid grid-cols-3 bg-slate-500 h-screen-navbar-player '>
          <DetailsSong></DetailsSong>
          <ListSong></ListSong>
        </div>
      </Songs.Provider>
      <PlaySong></PlaySong>
    </div>
  );
}

export default App;
