import React, { useState } from 'react';
import ResearchContext from './ResearchContext';

function PostListProvider({ children }) {
  const [docList, setDocList] = useState();
  const [favoriteList, setFavList] = useState();
  const [loading, setLoad] = useState(true);

  return (
    <ResearchContext.Provider
      value={ {
        docList,
        setDocList,
        favoriteList,
        setFavList,
        loading,
        setLoad,
      } }
    >
      { children }
    </ResearchContext.Provider>
  )
};

export default PostListProvider;