import React from 'react';
import Header from '../../Components/Header'
import SideMenu from '../../Components/SideMenu';
import MainContent from '../../Components/MainContent';
import './style.css';

function Home() {
  return (
    <>
      <Header title="HOME" hasLogin={ true }/>
      <div className='main'>
        <SideMenu />
        <MainContent />
      </div>
    </>
  )
}

export default Home;
