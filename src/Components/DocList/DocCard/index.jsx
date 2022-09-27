import React from 'react';

function DocCard(props) {
  
  const { authors, downloadUrl, documentType, title, abstract } = props.document
  
  const renderNames = () => {
    return authors.map((author, index) => {
      return (
        <span key={ index }>
          {author.name}
        </span>
      )
    })
  }

  return (
    <div className='doc-card'>
      <div> { documentType } </div>
      <div> { title } </div>
      <div> { abstract } </div>
      <div> { renderNames() } </div>
      <div> { downloadUrl } </div>
    </div>
  )
}

export default DocCard;
