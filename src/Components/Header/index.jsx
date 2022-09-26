import React from 'react';
import Button from '../Button';
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
      <Button className='burger-menu' />
    </header>
  )
}

export default Header;
