import React, { useEffect, useState } from 'react'
import './component/styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Applications from './pages/Applications';
import axios from 'axios'
import PostService from './API/PostService';

function App() {
  const [DataBase, setDataBase] = useState([{}])
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1) 

  async function fetchApplication() {
    const responce = await axios.getAll("http:127.0.0.1:5000")
    console.log(responce)
  }




  return (
    <div>
    <button onClick={fetchApplication}>BUTTON</button>
      <Applications/>
    </div>
    
    
    )
}

export default App