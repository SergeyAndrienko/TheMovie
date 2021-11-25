import React from 'react';



const Modal = ({holiday,isOpen,modalClose}) => {

    return (
        <div className={`modal__wrapper ${isOpen  ? 'open' : 'close'}`}>
            <div className="modal__body">
                <div className="modal__close" onClick={modalClose}>X</div>

                <ul className="wrapItemModal">
                    <li>
                       Name: {holiday.name}
                    </li>
                    <li>
                      Local name:  {holiday.localName}
                    </li>
                    <li>
                      Date:  {holiday.date}
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Modal;