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
    <Link to={ linkObj[title] }>
      <div className='menu-button'>
          <p>
            { title }
          </p>
      </div>
    </Link>
  )
}

export default MenuButton;
