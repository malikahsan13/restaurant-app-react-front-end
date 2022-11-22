import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import Grid from './Components/Grid';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8000/getProducts",{mode:'cors'});
      setData(result.data);
    })();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <Heading />
      <Grid data={data}/>
    </div>
  );
}

export default App;
