import './App.css'
import React from 'react'
import Chanel from './components/channel/Chanel'

function App () {
  return (
    <div className="app-container">
<div className="channel-rows-container">
  <div className="channel-row">
    <Chanel gameName="smash-bros.png"></Chanel>
    <Chanel></Chanel>
    <Chanel></Chanel>
  </div>
  <div className="channel-row">
    <Chanel></Chanel>
    <Chanel></Chanel>
    <Chanel></Chanel>
  </div>
  <div className="channel-row">
    <Chanel></Chanel>
    <Chanel></Chanel>
    <Chanel></Chanel>
  </div>
</div>
    </div>
  )
}

export default App
