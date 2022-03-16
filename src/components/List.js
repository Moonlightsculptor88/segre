import React, {useState} from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const styles = {
  opacity : 0.9,
  pointerEvent: "all"
}

function List(props) {
  
  const submit = (id, token) => {

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => props.delete(id, token)
        },
        {
          label: 'No',
        }
      ]
    });
  }
  
  return (
    <div>
    

    <div className='table'>
    { props.users && props.users.map((cust)=>{
      
      return (
        
          <div className='row' key={cust.token}>
            <div className='number'>{cust.token}</div>
            <div className='name'>{cust.userName}</div>
            
            <div className='del'><button onClick={()=>{
              submit(cust._id, cust.token)
              
            }}>X</button></div>
          </div>
      
      )
    })}
    </div>
      
    </div>
  )
}

export default List
