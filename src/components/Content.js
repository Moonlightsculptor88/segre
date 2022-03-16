import React from 'react'
import Form from '../components/Form.js'
import List from '../components/List'

export default function Content(props) {

  function renderContent(){
    if(props.page === 'add'){
      return(
        <Form 
          arr = {props.arr}
          setArr = {props.setArr}
          usedArr = {props.usedArr}
          setUsedArr = {props.setUsedArr}
          selectedIdx = {props.selectedIdx}
          setSelectedIdx = {props.setSelectedIdx}
          name = {props.name}
          setName = {props.setName}
          onSubmit = {props.onSubmit}
          numId = {props.numId}
          setNumId = {props.setNumId}
        />
      )
    }
    else if(props.page === 'list'){
      return (
        <List 
          custList = {props.custList}
          delete= {props.delete}
          users = {props.users}
        />
      )
    }
  }


  return (
    <div>
    {
      renderContent()
    }
    </div>
  )
}
