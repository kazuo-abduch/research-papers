import React from 'react';
import './style.css';

function DocCard(props) {
  
  const { _type, _source: { authors, description, title, urls } } = props.document
  
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

  return (
    <div className='doc-card'>
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
  )
}

export default DocCard;
