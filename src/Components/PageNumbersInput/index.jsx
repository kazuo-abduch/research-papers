import React, { useContext } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import './style.css';

function PageNumbersInput() {

  const { pageState, setPage } = useContext(ResearchContext);

  const addPage = () => {
    setPage(pageState + 1);
  }

  const subPage = () => {
    if (pageState > 1) {
      setPage(pageState - 1);
    }
  }

  return (
    <div className='page-input'>
      <input type="button" className="page-button" value="<" onClick={ subPage }/>
      <input type="number" className="page-number" value={ pageState }/>
      <input type="button" className="page-button" value=">" onClick={ addPage } />
    </div>
  )
}

export default PageNumbersInput;
