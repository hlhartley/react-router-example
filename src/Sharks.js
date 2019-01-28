import React from 'react';
import './image-display.css';
import sharkData from './data/shark-data';

const Sharks = () => {

    const displaySharks = sharkData.map((shark, i) => <img src={shark.image} className='app-img' key={shark.id}/>)

    return (
        <div className='image-display'>
        <h1>Sharks!</h1>
        {displaySharks}
        </div>
    )
}

export default Sharks;