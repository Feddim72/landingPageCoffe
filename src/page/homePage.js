import React from "react";
import Nav from "../components/nav";
import Content from "../components/content";
import Contact from "../components/contact";
import DescriptionContainer from "../components/descriptionContainer";
import GalleryContainer from "../components/galleryContainer";



const HomePage = (props) => {
    return (
        <>
            <Nav
                skrollToCurrent={props.skrollToCurrent}
                showMenu={props.showMenu}
                navActive={props.navActive}
            /> 
            <Content />
            <DescriptionContainer />
            <GalleryContainer />
            <Contact />
        </>
    )
}

export default HomePage