import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
 max-width:1180px ;
 height: 100vh;
 display: flex;
 margin: 0 auto;
 align-items: center;

 .content{
    h1{
        font-size: 56px;
        white-space: nowrap;
    }
 }
`
const Button = styled.button`
 padding: 10px 18px;
 background: #000000;
 color: white;
 border-radius: 5px;
 font-size: 16px;
 cursor: pointer;
transition: 0.3s background ease-in;

 &:hover{
    background-color: #383838;
    transition: 0.3s background ease-in;
 }
`

const StartPage = ({toggle}) => {
  return (  
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>

      <div className='content'>
        <h1>DICE GAME</h1>
         <Button onClick={toggle}>Play Now</Button>
      </div>
      
    </Container>
  )
}

export default StartPage
