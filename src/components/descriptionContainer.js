import React from "react";
import Description from "./description";
import imgDescOne from '../assets/imgDescOne.jpg'
import imgDescTwo from '../assets/imgDescTwo.jpg'
import imgDescThree from '../assets/imgDescThree.jpg'
import DescriptionItem from "./descriptionItem";

const dataDescription = [
    { id: '1', text: 'Wyśmienite kawy', img: imgDescOne },
    { id: '2', text: 'Ziarna na wynos', img: imgDescTwo },
    { id: '3', text: 'Ciasta jak domowe', img: imgDescThree }
]

const descriptionItems = dataDescription.map(item => <DescriptionItem key={item.id} text={item.text} img={item.img} />)

const DescriptionContainer = () => {
    return (
        <>
            <Description descriptionItems={descriptionItems} />
        </>
    )
}

export default DescriptionContainer