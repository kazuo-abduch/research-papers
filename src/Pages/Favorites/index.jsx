import React from 'react';
import Header from '../../Components/Header'
import SideMenu from '../../Components/SideMenu';
import FavContent from '../../Components/FavContent';

function Favorites() {

  return (
    <div className='body-conteiner'>
      <Header title="FAVORITES"/>
      <div className='main'>
        <FavContent />
        <SideMenu />
      </div>
    </div>
  )
}

export default Favorites;
