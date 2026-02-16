import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

import Socials from '../Socials/Socials.js'
import {IconBulletSmall} from '../TextBlocks/TextBlocks.js'


function FooterCondensed() {

    return (
        <div id="footer-condensed-container" className="flex-row bordered-section">
            <small className="subdued footer-condensed-description">Designed in Figma, built in React, debugged with an AI-powered rubber duck.</small>
            <div className="footer-condensed-socials">
                <Socials/>
            </div>
        </div>
    )
}

function FooterSection({caption, children}) {
    return (
        <div className="footer-section-container">
            <small className="footer-content caption subdued">{caption}</small>
            {children}
        </div>
    )
}

function FooterLink({text, link}) {
    
    const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'auto'});
	};

    return (
         <NavLink
            to={link}
            className='nav-bar-links footer-content'
            onClick={scrollToTop}
        >
            <small>{text}</small>
        </NavLink>
    )
}

function FooterLinkSocial({text, link, icon}) {

    return (
         <a
            className='nav-bar-links footer-content'
            target='_blank'
            href={link}
            rel='noopener noreferrer'
        >
            <IconBulletSmall 
                img={icon}
                text={text}
            />
        </a>
    )
}

function Footer() {

    return (
        <div id="footer-container" className="grid-container bordered-section">
            <div className="col-6" style={{padding:'8px 0px'}}>
                <p><strong>Erica Fu</strong></p>
                <small className="subdued">Designed in Figma, built in React, debugged an with AI-powered rubber duck.</small>
            </div>
            <div className="col-6 flex-row" style={{transform:'translateX(-8px)'}}>
                <FooterSection caption="Me">
                    <FooterLink
                        text="Home"
                        link='/'
                    />
                    <FooterLink
                        text="My creative playground"
                        link='/Play'
                    />
                    <FooterLink
                        text="About me"
                        link='/About'
                    />
                    <a 
                    href="/Erica_Fu_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="nav-bar-links footer-content"
                    >
                        <small>{'Resume \u2197'}</small>
                    </a>
                </FooterSection>
                <FooterSection caption="My work">
                    <FooterLink
                        text="JPMorganChase projects"
                        link='/JPMorganChase'
                    />
                    <FooterLink
                        text="Equinix case study"
                        link='/Equinix'
                    />
                    <FooterLink
                        text="Zeno case study"
                        link='/Zeno'
                    />
                </FooterSection>
                <FooterSection caption="Connect">
                    {/* <div className="horizontal-flex" style={{transform:'translateX(-4px)'}}>
                        <Socials/>
                    </div> */}
                    <FooterLinkSocial
                        text="Email"
                        link='mailto:ericawfu@gmail.com'
                        icon={<i className="fa fa-envelope"></i>}
                    />
                    <FooterLinkSocial
                        text="LinkedIn"
                        link='https://www.linkedin.com/in/ericawfu/'
                        icon={<i className="fab fa-linkedin"></i>}
                    />
                    <FooterLinkSocial
                        text="Github"
                        link='https://github.com/erica-w-fu'
                        icon={<i className="fab fa-github"></i>}
                    />
                    <FooterLinkSocial
                        text="Creative Instagram"
                        link='https://www.instagram.com/ericacreatesss/'
                        icon={<i className="fab fa-instagram"></i>}
                    />
                </FooterSection>
            </div>
        </div>
    )
}

export { FooterCondensed, Footer }
