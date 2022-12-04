import React from 'react'

const ModalWindow = ({ modalActive, outeShowModal, imageModal }) => {
    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => outeShowModal(!modalActive, null)} >
            <div className={modalActive ? 'modal__content active' : 'modal__content'}
                onClick={e => e.stopPropagation()} >
                <img className='item__img' src={imageModal} alt='itemImage' />
            </div>
        </div>
    )
}

export default ModalWindow
