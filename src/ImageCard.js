import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const ImageCard = ({ name, bio, image, id, type }) => {

    return (
        <Link to={`${type}/${id}`}>
            <img src={image} className='app-img' />
        </Link>
    )
}

export default ImageCard;