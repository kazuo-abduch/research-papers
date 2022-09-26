import React from 'react';
import Button from '../Button';
import './style.css';

function renderLoginButtons() {
  return (
    <div className='flex-item buttons-conteiner'>
      <Button title={ 'Login' } className={ 'header-button' } />
      <Button title={ 'Cadastro' } className={ 'header-button' } />
    </div>
  )
}

function renderLogoutButton() {
  return (
    <div className='flex-item buttons-conteiner'>
      <Button title={ 'Logout' } className={ 'header-button' } />
    </div>
  )
}

function Header(props) {
  const { title, hasLogin } = props
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
      { hasLogin ? renderLogoutButton() : renderLoginButtons() }
    </header>
  )
}

export default Header;
