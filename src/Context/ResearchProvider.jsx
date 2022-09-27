import React, { useState } from 'react';
import ResearchContext from './ResearchContext';

function PostListProvider({ children }) {
  const [favoriteList, setFavList] = useState();

  return (
    <ResearchContext.Provider
      value={ {
        favoriteList,
        setFavList,
      } }
    >
      { children }
    </ResearchContext.Provider>
  )
};

export default PostListProvider;