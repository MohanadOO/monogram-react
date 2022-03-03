import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Header from './Component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className='m-0 p-0 font-[Prompt]'>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/support' element={<Header />} />
      </Routes>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
)
