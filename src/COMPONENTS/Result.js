import React from 'react'
import { myBasket } from '../App'


function Result() {
    const {myScore} = React.useContext(myBasket) //{mySetPage: setPage, myScore: score , mySetScore:setScore}
  return (
    <div>
        <h2>Your score out 4 questions is {myScore}</h2>
        </div>
  )
}

export default Result