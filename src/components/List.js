import React from 'react'


function List(props) {
  

  return (
    <div>
    <div className='table'>
    { props.users && props.users.map((cust)=>{
      
      return (
        
          <div className='row' key={cust.token}>
            <div className='number'>{cust.token}</div>
            <div className='name'>{cust.userName}</div>
            <div className='del'><button onClick={()=>{
              props.delete(cust._id, cust.token)
            }}>X</button></div>
          </div>
      
      )
    })}
    </div>
      
    </div>
  )
}

export default List