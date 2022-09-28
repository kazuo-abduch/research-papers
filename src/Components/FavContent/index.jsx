import React, { useEffect, useContext } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import DocList from '../DocList';
import PageNumbersInput from '../PageNumbersInput';
import './style.css'

function MainContent() {

  const { favoriteList } = useContext(ResearchContext)

  useEffect(() => {
    let favoriteDocuments = JSON.parse(localStorage.getItem('favorite-documents'))
    if (!favoriteDocuments) {
      favoriteDocuments = [];
    }
  }, [])

  return (
    <div className={ 'content' }>
      <PageNumbersInput />
      <DocList documentList={ favoriteList }/>
      <PageNumbersInput />
    </div>
  )
}

export default MainContent;
