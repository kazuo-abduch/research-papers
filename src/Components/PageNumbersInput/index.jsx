import React from 'react';
import './style.css';

function PageNumbersInput(props) {

  const { addPage, subPage, pageState } = props;

  return (
    <div className='page-input'>
      <input type="button" className="page-button" value="<" onClick={ subPage }/>
      <input type="number" className="page-number" value={ pageState } readOnly />
      <input type="button" className="page-button" value=">" onClick={ addPage } />
    </div>
  )
}

export default PageNumbersInput;
