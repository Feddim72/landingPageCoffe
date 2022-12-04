import React from "react";
import IcoMailContact from '../assets/IcoMailContact.svg'
import IcoPhoneContact from '../assets/IcoPhoneContact.svg'
import IcoMapContact from '../assets/icoMap.png'

const linkMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.419215492005!2d22.016577615887197!3d50.0034973273493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa146f814c69%3A0x7f96b305a069712f!2sZimowit%2042%2C%2035-605%20Rzesz%C3%B3w!5e0!3m2!1sru!2spl!4v1645353552911!5m2!1sru!2spl"

const Contact = () => {
    return (
        <div className='contact' id='contact' >
            <div className='contact__title' >
                <h5>
                    Kontakt
                </h5>
            </div>

            <div className='contact__table' >
                <div className='contact__decription' >
                    <div className='contact__item' >
                        <img src={IcoMapContact} alt='IcoMapContact' />
                        <p> ul. Zimowit 42, <br />
                            35-605 Rzeszów </p>
                    </div>

                    <div className='contact__item' >
                        <img src={IcoPhoneContact} alt='IcoPhoneContact' />
                        <p> +48 506 900 590 </p>
                    </div>

                    <div className='contact__item' >
                        <img src={IcoMailContact} alt='IcoMailContact' />
                        <p> office@tituto.com </p>
                    </div>

                </div>

                <div className='contact__map' >
                    <iframe src={linkMap} title="myFrameMap" />
                </div>
            </div>
        </div>
    )
}

export default Contact