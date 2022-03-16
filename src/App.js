import Content from "./components/Content";
import React, { useState , useEffect} from 'react';
import axios from 'axios';







function App() {
  const [heading, setHeading] = useState('ADD CUSTOMER')
  const [name, setName] = useState("");
  const [selectedIdx , setSelectedIdx] = useState(-1);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState('add');

  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);
  const [numId, setNumId] = useState();


  


 
  const [loading, SetIsLoading] = useState(true);


 

  useEffect(()=>{

    // async function getNumber() {
    //     const response = await axios.get("http://localhost:3001/numbers")
    //     // await response.data.find().sort({token:1});
    //     setArr(response.data)
    // }

    // getNumber();

    const fetchData = () => {
      axios.get("http://localhost:3001/read").then((response) => {
        
        if (response.data.success) {
          SetIsLoading(false);
        }
        setUsers(response.data);
        
      });
      
      };
      
      axios.get("http://localhost:3001/numbers").then(response=>{
          setArr(response.data)
          
      })
     
   
    fetchData();
    setRender(false);
 
  }, [render]);
  

  function onSubmit(e){
    e.preventDefault();
    if(selectedIdx !== -1){
    axios.post('http://localhost:3001/insert', {userName: name, token:selectedIdx})
    axios.delete(`http://localhost:3001/deleteNum/${numId}`)
    console.log(numId);
    setRender(true);
    setName("")
    setSelectedIdx(-1); 
  }}

  const deleteUser = (id, token)=>{
    axios.delete(`http://localhost:3001/delete/${id}`)
    axios.post('http://localhost:3001/insertNum', {token : token})
    setRender(true);
  }
 
  
  return (
    <div className="container">
          <div className="main-heading">
            <h1>SEGRE</h1>
          </div>
          <div className="sub-heading">
            <h3>{heading}</h3>
          </div>
          {/* <form>
            <label>Num</label>
            <input type="number" onChange={(e)=>{
              setNum(e.target.value)
            }}></input>
            <button onClick={addToList}>Submit</button>
          </form> */}
         
          <div className="content">
            <Content 
              arr={arr}
              setArr ={setArr}

              selectedIdx = {selectedIdx}
              setSelectedIdx = {setSelectedIdx}
              name = {name}
              setName = {setName}
              onSubmit = {onSubmit}
              users = {users}
              page = {page}
              delete = {deleteUser}
              num={numId}
              setNumId ={setNumId}
            />
          </div>

          <div className="footer">
            <div className="navi"><button onClick={()=>{
              setPage('add')
              setHeading('ADD CUSTOMER')
            }}>Add</button></div>
            <div className="navi"><button onClick={()=>{
              setPage('list')
              setHeading('CUSTOMER LIST')
            }}>List</button></div>
            <div className="navi">
            <button onClick={()=>{
              
            }}>Some</button>
            </div>
          </div>
    </div>
  );
}

export default App;
