import React, { useContext } from 'react';
import ResearchContext from '../../Context/ResearchContext';
import DocCard from './DocCard';
import './style.css';

function DocList(props) {

  const { documentList } = props
  
  const {
    loading,
  } = useContext(ResearchContext)

  const renderDocList = () => {
    if (!loading) {
      return (
        documentList.map((doc, index) => {
          return (
            <DocCard key={ index } document={ doc }/>
          )
        })
      )
    }
  }

  return (
    <div className='content-conteiner' >
      { renderDocList() }
    </div>
  )
}

export default DocList;
