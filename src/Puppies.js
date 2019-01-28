import React from 'react';
import './image-display.css';
import puppyData from './data/puppy-data';

const Puppies = () => {

    const displayPuppies = puppyData.map((puppy, i) => <img src={puppy.image} className='app-img' key={puppy.id}/>)

    return (
        <div className='image-display'>
        <h1>Puppies!</h1>
        {displayPuppies}
        </div>
    )
}

export default Puppies;