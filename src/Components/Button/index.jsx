import React from 'react';
import './style.css'

function Button(props) {
  const { className } = props;
  return (
    <button className={ className }>
      <input type="checkbox" />
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

export default Button;
