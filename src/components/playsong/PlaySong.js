import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../../Context';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export const PlaySong = () => {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
    return(
        <div>
            <AudioPlayer
                className='play-music'
                layout='stacked-reverse'
                src={song.url}
                // other props here
                showSkipControls={true} 
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
            />
        </div>
    );
}