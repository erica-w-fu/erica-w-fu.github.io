import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import dumplings from './imagesFun/makingDumplings.jpg'
import tired from './imagesFun/tired.jpeg'
import peaches from './imagesFun/washingPeaches.jpg'

import breakfast from './imagesFun/eggPattern.jpg'
import seahorse from './imagesFun/escapingTheComfortZone.jpg'
import peel from './imagesFun/peelingAway.jpg'

import trim from './imagesFun/trim.jpg'
import dough from './imagesFun/myFace.jpg'
import strawberry from './imagesFun/protected.jpg'

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__wrapper">
                <div className="cards__items_1">
                    <CardItem 
                        src={dumplings}
                        text='Making Dumplings'
                        label='Ink'
                    />
                    <CardItem 
                        src={tired}
                        text='Tired'
                        label='Charcoal'
                    />
                    <CardItem 
                        src={peaches}
                        text='Washing Peaches'
                        label='Watercolor, Photoshop'
                    />
                </div>
                <div className="cards__items_2">
                    <CardItem 
                        src={breakfast}
                        text='Breakfast Pattern'
                        label='Illustrator'
                    />
                    <CardItem 
                        src={seahorse}
                        text='Escaping the Comfort Zone'
                        label='Watercolor, Photoshop'
                    />
                    <CardItem 
                        src={peel}
                        text='Peeling Away'
                        label='Watercolor, Photoshop'
                    />
                </div>
                <div className="cards__items_3">
                    <CardItem 
                        src={trim}
                        text='Trim'
                        label='Photoshop'
                    />
                    <CardItem 
                        src={dough}
                        text='My Face'
                        label='Watercolor, Photoshop'
                    />
                    <CardItem 
                        src={strawberry}
                        text='Hiding Under Layers'
                        label='Watercolor, Photoshop'
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
