import React from 'react'
import './Header.css'
import { MdClose } from 'react-icons/md'


const Header = () => {
  return (
    <div className='top_header'>
      <div>
        <p>
        {`<a>RESUME@<a>`}
        </p>
      </div>
      <div>
          <MdClose size={35}/>
      </div>
      <div>
        <p>CANCEL</p>
      </div>
    </div>
  )
}

export default Header