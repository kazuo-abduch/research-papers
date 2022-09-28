import React from 'react';

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
        <span key={ index }>
          { url }
        </span>
      )
    })
  }

  return (
    <div className='doc-card'>
      <div> { _type } </div>
      <div> { title } </div>
      <div> { description } </div>
      <div> { renderNames() } </div>
      <div> { renderUrls() } </div>
    </div>
  )
}

export default DocCard;
