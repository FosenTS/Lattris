import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Applications from '../../pages/Applications'
import FilterFinder from '../../pages/FilterFinder'
import Finder from '../../pages/Finder'
import '../styles/WebRouter.css';

const WebRouter = function() {
  return (
    <div className='APP'>
    <BrowserRouter>
      <div className = "navbar">
        <div className = "navbar__link">
          <Link id = 'router_link' to = "/application">Запросы</Link>
          <Link id = 'router_link' to = "/finder">Поиск</Link>
          <Link id = 'router_link' to = "/filterfinder">Фильтрация</Link>
        </div>
      </div>

      <Routes>
        <Route path = "/application" element = {<Applications/>}/>
        <Route path = "/finder" element = {<Finder/>}/>
        <Route path = "/filterfinder" element = {<FilterFinder/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default WebRouter