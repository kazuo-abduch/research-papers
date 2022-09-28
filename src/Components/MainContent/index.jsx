import React, { useContext, useEffect } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import Filter from '../Filter';
import DocList from '../DocList';
import PageNumbersInput from '../PageNumbersInput';
import { fetchDocuments } from '../../Services/api';
import './style.css'

function MainContent() {

  const { setDocList, setLoad, pageState } = useContext(ResearchContext);

  useEffect(() => {
    const requestDocuments = async () => {
      const requestResult = await fetchDocuments(pageState)
      setDocList(requestResult)
    }
    setLoad(false);
    requestDocuments();
  }, [setDocList, setLoad, pageState])

  return (
    <div className={ 'content' }>
      <Filter />
      <DocList />
      <PageNumbersInput />
    </div>
  )
}

export default MainContent;
