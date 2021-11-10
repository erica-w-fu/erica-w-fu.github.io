import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className='cards__item'> 
                <img src={props.src} alt={props.text} className='cards__item__img'/>
            </li>
        </>
    );
}

export default CardItem;
