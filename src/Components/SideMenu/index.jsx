import React from 'react';
import MenuButton from '../MenuButton';
import './style.css'

function SideMenu() {
  return (
    <nav className='menu-conteiner'>
      <MenuButton title={ 'HOME' } />
      <MenuButton title={ 'FAVORITES' } />
    </nav>
  )
}

export default SideMenu;
