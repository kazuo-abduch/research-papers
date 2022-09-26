import React from 'react';
import './style.css';

function Header(props) {
  const { title } = props
  return (
    <header className='header-conteiner'>
      <div className='flex-item'>
        <div>Reaserch Project</div>
      </div>
      <div className='flex-item'>
        <p>
          { title }
        </p>
      </div>
    </header>
  )
}

export default Header;
