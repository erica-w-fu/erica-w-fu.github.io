import React from 'react';
import '../../App.css';
import './Pages.css';

import Footer from '../Footer/Footer.js'

import hello from './aboutMedia/hello.png'
import doodles from './aboutMedia/doodles.png'
import profile from './aboutMedia/profile.png'

import balloonBirthdayAnimation from './aboutMedia/balloonBirthdayAnimation.gif'
import catSprout from './aboutMedia/catSprout.jpeg'
import desktopOrganizerPrototype from './aboutMedia/desktopOrganizerPrototype.jpeg'
import fatherCoffeeCake from './aboutMedia/fatherCoffeeCake.jpeg'
import monetEmbroidery from './aboutMedia/monetEmbroidery.jpeg'
import motorizedRollerskate from './aboutMedia/motorizedRollerskate.jpeg'
import plasticWaste from './aboutMedia/plasticWaste.jpeg'
import weavingGarden from './aboutMedia/weavingGarden.jpeg'
import trim from './aboutMedia/trim.jpg'


function GalleryItem(src, text) {
    return  <div className="gallery">
                <span class="hovertext" data-hover={text}>
                    <img src={src} className="about-media" alt={text}></img>
                </span>
            </div>
}

function About() {
    return (
        <>
            <div className="about-container">
                <div className="left-about">
                    <img src={hello} className="about-media-small"></img>
                    <div className="divider"></div>
                    <p>
                        Erica Fu is a UI/UX designer, webapp developer, and <a href="https://www.dfaxcmu.org/" target='_blank'>student club leader</a> at Carnegie Mellon University. 
                    </p>
                    <br></br>
                    <p>
                        Throughout her work and play, Erica loves to create. Because of this, she has made a variety of things through different mediums such as baking, painting, textiles, scrap materials, and more. She also loves to listen to music and plays the piano and guitar.
                    </p>
                    <img src={doodles} className="about-media-medium"></img>
                </div>
                <div className="right-about">
                    <img src={profile} className="about-media"></img>
                </div>
            </div>
            <div className="divider-big"></div>
            <div className="gallery-container">
                {GalleryItem(desktopOrganizerPrototype, "Prototyped a desktop organizer for a product design course")}
                {GalleryItem(catSprout, "Crocheted a sprout for my cat (she did not like it)")}
                {GalleryItem(fatherCoffeeCake, "Baked a coffee cake for my father")}
                {GalleryItem(trim, "Digitally illustrated my brother's unique eyebrows")}
                {GalleryItem(balloonBirthdayAnimation, "Created a balloon animation as a birthday gift to a friend")}
                {GalleryItem(monetEmbroidery, "Embroidered a piece inspired by Monet's paintings")}
                {GalleryItem(motorizedRollerskate, "Constructed motorized rollerskates for an engineering build-a-thon")}
                {GalleryItem(plasticWaste, "Weaved plastic bags to show the unnecessary amount of waste my roommates and I received from campus")}
                {GalleryItem(weavingGarden, "Weaved a landscape for a textiles course")}
            </div>
            <Footer />
        </>
    );
}

export default About;