import React, { useState } from 'react';
import FavIconChecked from '../../../images/FavIconChecked.svg';
import FavIconUnchecked from '../../../images/FavIconUnchecked.svg';
import './style.css';

function DocCard(props) {
  
  const { _type, _source: { authors, description, title, urls } } = props.document

  const [isFavorite, setFavorite] = useState(false)
  
  const renderNames = () => {
    return authors.map((author, index) => {
      return (
        <span key={ index }>
          { author }
        </span>
      )
    })
  }

  const renderUrls = () => {
    return urls.map((url, index) => {
      return (
        <div key={ index }>
          <span>Url: </span>
          { url }
        </div>
      )
    })
  }

  const markAsFavorite = () => {
    const toggleFavorite = {
      true: false,
      false: true,
    }
    setFavorite(toggleFavorite[isFavorite]);
  }

  return (
    <div className='doc-card'>
      <div>
        <div>
          <span>Type: </span>
          { _type }
        </div>
        <div>
          <span>Title: </span>
          { title }
        </div>
        <div>
          <div>Description: </div>
          { description }
        </div>
        <div>
          <div>Authors: </div>
          { renderNames() }
        </div>
        { renderUrls() }
      </div>
      <input
        className='fav-button'
        type="image"
        src={ isFavorite ? FavIconChecked : FavIconUnchecked }
        alt="fav button"
        onClick={ markAsFavorite }
      />
    </div>
  )
}

export default DocCard;
