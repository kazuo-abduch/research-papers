import React from 'react';
import Header from '../../Components/Header'
import SideMenu from '../../Components/SideMenu';
import MainContent from '../../Components/MainContent';
import './style.css';

function Home() {
  return (
    <div className='body-conteiner'>
      <Header title="HOME"/>
      <div className='main'>
        <MainContent />
        <SideMenu />
      </div>
    </div>
  )
}

export default Home;
