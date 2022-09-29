import React, { useContext, useEffect } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import DocList from '../DocList';
import PageNumbersInput from '../PageNumbersInput';
import { fetchDocuments } from '../../Services/api';
import './style.css'

function MainContent() {

  const { setDocList, docList, setLoad, loading, pageState, setPage } = useContext(ResearchContext);

  useEffect(() => {
    setLoad(true);
    const requestDocuments = async () => {
      const requestResult = await fetchDocuments(pageState)
      setDocList(requestResult)
    }
    requestDocuments().then(() => {
      setLoad(false);
    });
  }, [setDocList, setLoad, pageState])

  const addPage = () => {
    setLoad(true)
    setPage(pageState + 1);
  }

  const subPage = () => {
    if (pageState > 1) {
      setLoad(true)
      setPage(pageState - 1);
    }
  }

  return (
    <div className={ 'content' }>
      <PageNumbersInput
        subPage={ subPage }
        addPage={ addPage }
        pageState={ pageState }
      />
      {
        loading
        ? <div>Loading</div>
        : <DocList documentList={ docList }/>
      }
      <PageNumbersInput
        subPage={ subPage }
        addPage={ addPage }
        pageState={ pageState }
      />
    </div>
  )
}

export default MainContent;
