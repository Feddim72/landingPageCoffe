import React from "react";
import ModalWindow from "./modalWindow";


const Gallery = (props) => {
    return (
        <div className='gallery' id='gallery' >
            <div className='gallery_title'>
                <h4>
                    Galleria
                </h4>
            </div>

            <div className='gallery_items'>
                {props.galleryItems}
            </div>

            <ModalWindow
                modalActive={props.modalActive}
                outeShowModal={props.outeShowModal}
                imageModal={props.imageModal}
            />
        </div>
    )
}

export default Gallery