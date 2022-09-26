import React from 'react';
import MenuButton from '../MenuButton';
import './style.css'

function SideMenu() {
  return (
    <nav className='menu-conteiner'>
      <MenuButton title={ 'HOME' } className={ 'home' } />
      <MenuButton title={ 'FAVORITES' } className={ 'favorites' } />
    </nav>
  )
}

export default SideMenu;
