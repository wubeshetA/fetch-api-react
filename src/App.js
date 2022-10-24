import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [excuse, setExcuse] = useState("");
  function fetchExcuse(category) {
    const url = `https://excuser.herokuapp.com/v1/excuse/${category}`;
    Axios.get(url).then(response => {
      setExcuse(response.data[0]['excuse'])
    });

  }

  return (
    <div className="App">
      
      <h1>Generate excuse</h1>
      
        <button onClick={() => (fetchExcuse("developers"))}>Developer</button>
        <button onClick={() => fetchExcuse("family")}>Family</button>
        <button onClick={() => fetchExcuse("funny")}>Funny</button>
        <h3>{excuse}</h3>
      
    </div>
    
  );
}

export default App;
