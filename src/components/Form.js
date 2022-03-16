import React from 'react'





function Form(props) {
    function handleNameChange(e){
        props.setName(e.target.value)
    }
    

    function compare(a,b){
        if(a.token < b.token){
            return -1;
        }
        if(a.token > b.token){
            return 1;
        }
        return 0
    }

    props.arr.sort(compare)
   
  return (
    <div className='Form'>
        <form onSubmit={props.onSubmit}>
            <input onChange={handleNameChange} value={props.name} type='text' placeholder="Name"></input>

                <div className='num-wrapper'>
                    {   
                        props.arr.map((i, idx)=>{
                        return(
                            <div className={(props.selectedIdx === i.token ? "num selected" : "num")} key={idx} value={i.token} onClick={(e)=>{
                                if(props.selectedIdx === i.token){
                                    e.target.classList.remove("selected");
                                    props.setSelectedIdx(-1);
                                    props.setNumId(-1);
                                }
                                 else{props.setSelectedIdx(i.token); props.setNumId(i._id)}
                            }} >{i.token}</div>
                        )
                    })}
                </div>
            <input  type="submit" value="Submit"></input>
    </form>
    </div>
  )

  
}

export default Form