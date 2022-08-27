import React from 'react'
import './App.css'
import Cursor from './cursor'
import Header from './Components/Header/Header'
import { Link } from 'react-router-dom'
const App = () => {



  return (
    <div className='main_container'>
     <Header/>
     <Cursor/>
    <div className='container'>
      <div className='title_aligment'>
          <p>01</p>
          <Link to="Work"><h1 className='h1_style'>Home</h1></Link>
      </div>
      <div className='title_aligment'>
          <h1 className='h1_style'>Work</h1>
          <p>02</p>
      </div>
      <div className='title_aligment'>
          <p>03</p>
          <h1 className='h1_style'>About me</h1>
      </div>
      <div className='title_aligment'>
          <h1 className='h1_style'>Connect</h1>
          <p>04</p>
      </div>

      <div class='cursor' id="cursor"></div>

    </div>
</div>
  )
}

export default App