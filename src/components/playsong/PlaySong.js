import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Songs from '../../Context';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export const PlaySong = () => {
    const {song} = useContext(Songs);
    return(
        <div>
            <AudioPlayer
                className='play-music'
                src={song.url}
                layout='stacked-reverse'
                // other props here
                showSkipControls={true} 
                showJumpControls={false}
            />
        </div>
    );
}