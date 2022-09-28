import React, { useState } from 'react';
import ResearchContext from './ResearchContext';

function PostListProvider({ children }) {
  const [docList, setDocList] = useState();
  const [favoriteList, setFavList] = useState([]);
  const [loading, setLoad] = useState(true);
  const [pageState, setPage] = useState(1);

  return (
    <ResearchContext.Provider
      value={ {
        docList,
        setDocList,
        favoriteList,
        setFavList,
        loading,
        setLoad,
        pageState,
        setPage,
      } }
    >
      { children }
    </ResearchContext.Provider>
  )
};

export default PostListProvider;