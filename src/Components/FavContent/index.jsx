import React, { useEffect, useContext, useState } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import PageNumbersInput from '../PageNumbersInput';
import DocList from '../DocList';
import './style.css'

function MainContent() {

  const { favoriteList, setFavList, loading, setLoad } = useContext(ResearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const DOCS_PER_PAGE = 5;
  const favListChunks = [];
  if (favoriteList.length >= 1) {
    for (let index = 0; index < favoriteList.length; index += DOCS_PER_PAGE) {
      favListChunks.push(favoriteList.slice(index, index + DOCS_PER_PAGE));
    }
  }

  useEffect(() => {
    setLoad(true);
    let favoriteDocuments = JSON.parse(localStorage.getItem('favorite-documents'))
    if (!favoriteDocuments) {
      favoriteDocuments = [];
    }
    setFavList(favoriteDocuments);
    setLoad(false);
  }, [setFavList, setLoad])

  const subPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  
  const addPage = () => {
    if (currentPage < favListChunks.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const checkIfLoading = () => loading ? <div>Loading</div> : <DocList documentList={ favListChunks[currentPage - 1] }/>

  return (
    <div className={ 'content' }>
      <PageNumbersInput
        subPage={ subPage }
        addPage={ addPage }
        pageState={ currentPage }
      />
      { favoriteList.length >= 1 ? checkIfLoading() : <div>Lista Vazia</div> }
      <PageNumbersInput
        subPage={ subPage }
        addPage={ addPage }
        pageState={ currentPage }
      />
    </div>
  )
}

export default MainContent;
