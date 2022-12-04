import React from "react";
import coffeIcon from "../assets/coffeIcon.png";


const Nav = (props) => {
    return (
        <div className='nav__wrapper'>

            <div className='nav__menu'>
                <div id='menuID' className={` ${props.navActive ? 'menu__button menu__button-active' : 'menu__button' } `} onClick={() => props.showMenu(!props.navActive)} >
                    <span> </span>
                </div>

                <div className='menu__ico' >
                    <img src={coffeIcon} alt='menu__ico' />
                </div>

                <nav className={` ${props.navActive ? 'nav__bar-active' : 'nav__bar' } `}>
                    <div className='nav__item'>
                        <span onClick={() => props.skrollToCurrent('content')} > O nas </span>
                        <span onClick={() => props.skrollToCurrent('description')} > Oferta </span>
                    </div>
                    <div className='nav__item'>
                        <span onClick={() => props.skrollToCurrent('gallery')} > Galeria </span>
                        <span onClick={() => props.skrollToCurrent('contact')} > Kontakt </span>
                    </div>
                </nav>
            </div>

            <div className='nav__label'>
                <h1> Kawiarnia u Gabrysi </h1>
            </div>
        </div>
    )
}

export default Nav