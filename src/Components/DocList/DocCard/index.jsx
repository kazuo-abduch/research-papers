import React from 'react';

function DocCard(props) {
  const { authors, downloadUrl, documentType, title, abstract } = props.document
  return (
    <div>
      <div> { authors.name } </div>
      <div> { documentType } </div>
      <div> { title } </div>
      <div> { abstract } </div>
      <div> { downloadUrl } </div>
    </div>
  )
}

export default DocCard;
