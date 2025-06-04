import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button } from '../Styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState()
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

     const RandomGenerator = (min, max)=>{
        return (Math.floor(Math.random() * (max-min) + min)); 
     }


     const rollDice= ()=>{
         if(!selectedNumber) {
            setError("You have not selected any number")
            return;
         }

     const random = RandomGenerator(1, 7);
      setCurrentDice((prev)=>random);
     
     if (selectedNumber === random ) {
        setScore((prev)=> prev + random)
     }else{
        setScore((prev)=> prev - 2 )
     }
     setSelectedNumber(undefined);
    }


    const resetScore = ()=>{
        setScore(0);
    }

     const HandleRules =  ()=>{
      setShowRules(!showRules)
    };


     return (
    <MainContainer> 
    <div className='top-section'>
    <TotalScore score={score} />

    <NumberSelector
     selectedNumber = {selectedNumber}
      setSelectedNumber = {setSelectedNumber}
       error = {error}
       setError = {setError} />
    </div>
    <RollDice 
    currentDice = {currentDice} 
    rollDice = {rollDice}  />

     <div className='btns'>
       <Button onClick={resetScore}>Reset</Button>
       <Button onClick={HandleRules}>Show Rules</Button>
     </div> 
     {showRules && < Rules />}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
padding-top: 70px;
    .top-section{
       display: flex;
       justify-content: space-between;
       align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        gap: 10px;
        margin-top: 40px;
    }
`