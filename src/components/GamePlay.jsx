import React from 'react'
import TotalScore from '../TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'

const GamePlay = () => {
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState()



  return (
    <MainContainer> 
    <div className='top-section'>
        <TotalScore/>
    <NumberSelector selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber} />
    </div>
    <RollDice currentDice = {currentDice} setCurrentDice = {setCurrentDice}  />
      
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
padding-top: 70px;
    .top-section{
       display: flex;
       justify-content: space-between;
       align-items: end;
    }
`