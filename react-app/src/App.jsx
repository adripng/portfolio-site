import { useState } from 'react'
import background from './assets/homebg.png'
import dots from './assets/homedots.png'
import './App.css'

function App() {

  return (
  <>
    <img src={dots} className="radial"/>
    <div id="leftcontent">
      <h1>Hello! My name's Adrianna.</h1>
      <p>hello what</p>
    </div>
    <div id="rightcontent">
      <p>bro wtf does this work</p>
    </div>
  </>
  )
}

export default App
