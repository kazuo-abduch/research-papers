import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function MenuButton(props) {
  const { title } = props
  const linkObj = {
    HOME: '/',
    FAVORITES: '/favorites',
  }

  return (
    <div className='menu-button' id={ title }>
      <Link to={ linkObj[title] }>
          <p>
            { title }
          </p>
      </Link>
    </div>
  )
}

export default MenuButton;
