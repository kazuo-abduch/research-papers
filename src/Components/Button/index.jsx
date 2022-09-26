import React from 'react';
import './style.css'

function Button(props) {
  const { title, className } = props;
  return (
    <button className={ className }>
      { title }
    </button>
  )
}

export default Button;
