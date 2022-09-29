import React, { useEffect, useContext } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import DocList from '../DocList';
import './style.css'

function MainContent() {

  const { favoriteList, setFavList, loading, setLoad } = useContext(ResearchContext)

  useEffect(() => {
    setLoad(true);
    let favoriteDocuments = JSON.parse(localStorage.getItem('favorite-documents'))
    if (!favoriteDocuments) {
      favoriteDocuments = [];
    }
    setFavList(favoriteDocuments);
    setLoad(false);
  }, [setFavList, setLoad])

  return (
    <div className={ 'content' }>
      { loading ? <div>Loading</div> : <DocList documentList={ favoriteList }/> }
    </div>
  )
}

export default MainContent;
