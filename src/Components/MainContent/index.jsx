import React, { useState, useEffect } from 'react';
import Filter from '../Filter';
import TableList from '../TableList';
import { fetchDocuments } from '../../Services/api';
import './style.css'

function MainContent() {

  const [docList, setDocList] = useState();

  useEffect(() => {
    const requestDocuments = async () => {
      const requestResult = await fetchDocuments()
      setDocList(requestResult)
    }
    requestDocuments();
    console.log(docList)
  }, [docList])

  return (
    <div className={ 'content' }>
      <Filter />
      <TableList />
    </div>
  )
}

export default MainContent;
