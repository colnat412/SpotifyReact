import React, { useContext } from 'react';
import { Songs } from '../../Context';

const DetailsSong = () => {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className="text-cyan-400 font-bold">Now Playing</h2>
            <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
            <div>
                <img className='ml-5 mt-2 h-[400px]' src={song.links.images[0].url} alt="imgMusic" />
            </div>
            <div className='flex'>
                <img className='ml-5 mt-5 rounded-lg h-[60px]' src={song.links.images[1].url} alt="" />
                <span className='ml-20 mt-6 text-3xl font-semibold'>{song.author}</span>
            </div>
        </div>
    );
};

export default DetailsSong;