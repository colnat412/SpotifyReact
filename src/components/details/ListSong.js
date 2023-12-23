import React, { useContext, useEffect, useState } from 'react';
import { Songs } from '../../Context';

const ListSong = () => {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(1);
    const handlePlaySong = (song) => {
        setIdSong(song)
        handleSetSong(idSong)
    }
    useEffect(() =>{
        setIdSong(song.id)
    }, [song])
    return (
        
        <div className='col-span-2 overflow-y-scroll'>
            <table className='talbe-auto w-full'>
                <thead className='text-white h-12 '>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody>
                {
                    DataSongs.map((song, index) =>
                    <tr key={index} 
                        className={`bg-slate-600 h-12 text-gray-300 hover:bg-slate-400 cursor-pointer
                       ${idSong===song.id && 'bg-slate-600 text-green-400'}`}
                        onClick={() => handlePlaySong(song.id)}
                    >
                        <td className='text-center'>{index+1}</td>
                        <td className='text-left'>{song.name}</td>
                        <td className='text-center'>{song.author}</td>
                        <td className='text-center'><a href={song.url}><i className='fa fa-download'></i></a></td>
                    </tr> 
                    )
                }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ListSong;