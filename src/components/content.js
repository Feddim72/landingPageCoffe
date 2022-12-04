import React from "react";
import book from '../assets/book.jpg'


const Content = () => {
    return (
        <div className='content' id='content'>
            <div className='content__img'>
                <img src={book} alt='the_book' />
            </div>

            <div className='content__description'>
                <div>
                    <h2> O nas </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content