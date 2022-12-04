import React, { useEffect, useState } from "react";
import HomePage from "./homePage";



const HomePageContainer = (props) => {

    const mediaMatch = window.matchMedia('(max-width: 768px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    const showMenu = (clickState) => {
        if (clickState) {
            setNavActive(clickState)
            document.querySelector('body').style.paddingRight = window.innerWidth - document.getElementById('root').offsetWidth + 'px'
            document.querySelector('body').classList.toggle('-lock')
        }
        else {
            setNavActive(clickState)
            document.querySelector('body').style.paddingRight = 0
            document.querySelector('body').classList.toggle('-lock')
        }

    }

    const skrollToCurrent = (currentId) => {

        if (matches) {
            window.scrollTo({
                top: document.getElementById(currentId).getBoundingClientRect().top + window.pageYOffset - document.getElementById('menuID').offsetHeight,
                behavior: 'smooth'
            })
            showMenu()
        }

        else {
            window.scrollTo({
                top: document.getElementById(currentId).getBoundingClientRect().top,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <HomePage
                showMenu={showMenu}
                skrollToCurrent={skrollToCurrent}
                navActive={navActive}
            />
        </>
    )
}

export default HomePageContainer