import React from 'react';


function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>Confirm Request</h1>
        </div>
        <div className='body'>
          <p>Cancel anytime</p>
        </div>
        <div className='footer'>
          <button id="cancelBtn">Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
