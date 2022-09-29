import React, { useState, useContext, useEffect } from 'react';
import ResearchContext from '../../../Context/ResearchContext';
import FavIconChecked from '../../../images/FavIconChecked.svg';
import FavIconUnchecked from '../../../images/FavIconUnchecked.svg';
import './style.css';

function DocCard(props) {
  
  const { _type, _id, _source: { authors, description, title, urls } } = props.document
  const { favoriteList, setFavList } = useContext(ResearchContext);

  const [isFavorite, setFavorite] = useState(false)

  useEffect(() => {
    let favoriteDocuments = JSON.parse(localStorage.getItem('favorite-documents'))
    if (!favoriteDocuments) {
      favoriteDocuments = [];
    }
    const checkFavorite = favoriteDocuments.some((favDoc) =>  favDoc._id === _id);
    setFavorite(checkFavorite);
    setFavList(favoriteDocuments)
  }, [_id, setFavList, isFavorite])
  
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
          <a href={ url } target="_blank" rel="noreferrer">{ url }</a>
        </div>
      )
    })
  }

  const addToFavoriteList = (favoriteDocuments) => {
    favoriteDocuments.push(props.document);
    localStorage.setItem('favorite-documents', JSON.stringify(favoriteDocuments));
  }

  const removeFromFavoriteList = (favoriteDocuments) => {
    const docIndex = favoriteDocuments.findIndex((fav) => fav._id === _id);
    favoriteDocuments.splice(docIndex, 1);
    localStorage.setItem('favorite-documents', JSON.stringify(favoriteDocuments));
  }

  const markAsFavorite = () => {
    const favoriteDocuments = favoriteList;
    const toggleFavorite = {
      true: false,
      false: true,
    }
    setFavorite(toggleFavorite[isFavorite]);

    toggleFavorite[isFavorite]
      ? addToFavoriteList(favoriteDocuments)
      : removeFromFavoriteList(favoriteDocuments);
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
