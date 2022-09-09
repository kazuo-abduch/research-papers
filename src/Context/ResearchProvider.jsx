import React, { useState } from 'react';
import ResearchContext from './ResearchContext';

function PostListProvider({ children }) {
  const [postListState, setPostList] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setNewTitle] = useState();
  const [content, setNewContent] = useState();

  return (
    <ResearchContext.Provider
      value={ {
        postListState,
        setPostList,
        loading,
        setLoading,
        title,
        setNewTitle,
        content,
        setNewContent,
      } }
    >
      { children }
    </ResearchContext.Provider>
  )
};

export default PostListProvider;