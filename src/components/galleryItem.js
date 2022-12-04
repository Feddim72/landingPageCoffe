import React from "react";

const GalleryItem = (props) => {
    return (
        <div className='gallery__item'>
            <img className='item__img' src={props.img} alt={`itemImage ${props.img}`} />
            <img className='item__zoom'
                src={props.imgZoom}
                alt={`imgZoom ${props.imgZoom}`}
                onClick={() => props.showModal(props.img, !props.modalActive)}
            />
        </div>
    )
}

export default GalleryItem