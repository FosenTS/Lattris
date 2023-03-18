import React, { useEffect, useState } from 'react'
import WebRouter from './component/UI/WebRouter'
import './component/styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [Data, setData] = useState([{}])
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])


  return (
    <div>
      <WebRouter/>
    </div>
    
    
    )
}

export default App