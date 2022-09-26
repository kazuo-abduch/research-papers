import React from 'react';
import Filter from '../Filter';
import TableList from '../TableList';
import './style.css'

function MainContent() {
  return (
    <div className={ 'content' }>
      <Filter />
      <TableList />
    </div>
  )
}

export default MainContent;
