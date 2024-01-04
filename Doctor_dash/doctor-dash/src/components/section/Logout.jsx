import React, {useState} from 'react'
import Modal from './Modal';



function Logout () {

  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='confirm'>
        <button 
        className='openModalBtn' 
        onClick={() => 
        {setOpenModal(true)
        }}
        >
          Lois Kirsten Alonsagay
        </button>
        {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
  )
}

export default Logout;