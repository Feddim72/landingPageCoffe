import React, { useState } from "react";

import galleryItem_0 from '../assets/galleryItem_1.jpg'
import galleryItem_1 from '../assets/imgDescOne.jpg'
import galleryItem_2 from '../assets/galleryItem_3.jpg'
import galleryItem_3 from '../assets/galleryItem_4.jpg'
import galleryZoom from '../assets/itemZoom.png'
import Gallery from "./gallery";
import GalleryItem from "./galleryItem";



const GalleryContainer = (props) => {

    const [modalActive, setModalActive] = useState(false)
    const [imageModal, setImageModal] = useState()

    const showModal = (img, clickState) => {
        setModalActive(clickState)
        setImageModal(img)
        document.querySelector('body').style.paddingRight = window.innerWidth - document.getElementById('root').offsetWidth + 'px'
        document.querySelector('body').classList.toggle('-lock')
    }

    const outeShowModal = (clickState,removeImage) => {
        setModalActive(clickState)
        document.querySelector('body').classList.toggle('-lock')
        document.querySelector('body').style.paddingRight = 0
        setTimeout(setImageModal, 250, removeImage)
        
    }

    const dateGallery = [
        { id: 1, img: galleryItem_0, imgZoom: galleryZoom },
        { id: 2, img: galleryItem_1, imgZoom: galleryZoom },
        { id: 3, img: galleryItem_2, imgZoom: galleryZoom },
        { id: 4, img: galleryItem_3, imgZoom: galleryZoom }
    ]

    const galleryItems = dateGallery.map(item =>
        <GalleryItem
            id={item.id}
            key={item.id}
            img={item.img}
            imgZoom={item.imgZoom}
            showModal={showModal}
            modalActive={modalActive}
        />
    )

    return <Gallery
        galleryItems={galleryItems}
        outeShowModal={outeShowModal}
        modalActive={modalActive}
        imageModal={imageModal}
    />
}

export default GalleryContainer