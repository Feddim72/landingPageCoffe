import React from "react";


const DescriptionItem = (props) => {
    return (
        <div className='description__item' >
           <div className='description__img'>
                <img src={props.img} alt='descriptionItemImg' />
           </div>
           <div className='description__title'>
                <p> {props.text} </p>
           </div>
        </div>
    )
}

export default DescriptionItem