import React, { useContext, useEffect } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import Filter from '../Filter';
import DocList from '../DocList';
import { fetchDocuments } from '../../Services/api';
import './style.css'

function MainContent() {

  const { setDocList, setLoad } = useContext(ResearchContext);

  useEffect(() => {
    const requestDocuments = async () => {
      const requestResult = await fetchDocuments()
      setDocList(requestResult)
    }
    setLoad(false);
    requestDocuments();
  }, [setDocList, setLoad])

  return (
    <div className={ 'content' }>
      <Filter />
      <DocList />
    </div>
  )
}

export default MainContent;
