import React from 'react'
import styled from 'styled-components'
import StartPage from './components/StartPage';
import GamePlay from './components/GamePlay';
import { useState } from 'react';


const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay  = ()=>{
    setIsGameStarted((prev)=>!prev)
  }
  return (
    <>
      {
        isGameStarted? <GamePlay/> : <StartPage toggle ={toggleGamePlay}/>
      }
    </>
  )
}

export default App
