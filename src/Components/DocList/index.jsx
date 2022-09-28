import React, { useContext } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import DocCard from './DocCard';
import mockDocList from '../../Mock/apiMock.json';

function DocList() {
  
  const {
    //docList,
    loading,
  } = useContext(ResearchContext)

  const renderDocList = () => {
    if (!loading) {
      return (
        mockDocList[0].data.map((doc, index) => {
          return (
            <DocCard key={ index } document={ doc }/>
          )
        })
      )
    }
  }

  return (
    <div>
      { renderDocList() }
    </div>
  )
}

export default DocList;
