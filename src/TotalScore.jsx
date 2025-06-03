import styled from "styled-components"

const ScoreContainer = styled.div`
background-color: red;
max-width: 200px;
text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`
const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore
 