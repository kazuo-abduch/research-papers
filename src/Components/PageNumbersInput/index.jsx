import React, { useContext } from 'react';
import ResearchContext from '../../Context/ResearchContext';

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
      <input type="button" value="<" onClick={ subPage }/>
      <input type="number" value={ pageState }/>
      <input type="button" value=">" onClick={ addPage } />
    </div>
  )
}

export default PageNumbersInput;
