import React from "react";


const Description = (props) => {
    return (
        <div className='description' id='description'>
           <div className='description__title'>
                <h3>
                    Oferta
                </h3>
           </div>
           <div className='description__items'>
                {props.descriptionItems}
           </div>
        </div>
    )
}

export default Description