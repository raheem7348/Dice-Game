import React from 'react'
import styled from 'styled-components'
import {useState} from "react"

const RollDice = ({currentDice,setCurrentDice}) => {



     const RandomGenerator = (min, max)=>{
        return (Math.floor(Math.random() * (max-min) + min)); 
     }

     const rollDice= ()=>{
        const random = RandomGenerator(1, 7);
        setCurrentDice((prev)=>random);
     }

  return (
    <DiceContainer>
     <div className='dice'>
        <img onClick={rollDice}
         src={`images/dice_${currentDice}.png`} alt="dice 1" />
     </div>
     <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice 


const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`