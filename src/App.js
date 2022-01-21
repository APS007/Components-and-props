import React, { useState } from 'react'
import './App.css';
import Detail from './Detail';

function App() {
  const [name, setName] = useState()
  const [toggle,setToggle]=useState({toggle:false})

  const handleClick= () =>{
    setToggle(!toggle)
  }
  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit= () => {
    alert('Hello ' + name);
  }
  return (
    <div className="App" >
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} value={name}/>
        </label>
        <input type="submit" value="Submit" />
       </form>
      <Detail name={name} />
      <button onClick={() => { setName("Singh") }}  onSubmit={()=> {alert("Hello")}}>Update Name</button>
      <div className="toggle">
      <button onClick={handleClick}>{toggle ? "ON" : "OFF"}</button>
      </div>
    </div>
  );
}

export default App;