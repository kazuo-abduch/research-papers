import React from 'react';
import './style.css'

function MenuButton(props) {
  const { title, className } = props
  return (
    <div className='menu-button'>
      <img className={ className } alt="" />
      <p>
        { title }
      </p>
    </div>
  )
}

export default MenuButton;
