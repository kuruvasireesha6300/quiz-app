import React from 'react'
import HomePage from './COMPONENTS/HomePage'
import Question from './COMPONENTS/Question'
import Result from './COMPONENTS/Result'

export const myBasket = React.createContext()

function App() 
{
  const [page, setPage] = React.useState("homepage")

  const [score, setScore] = React.useState(0)

  //page = "homepage"
  return (
    <div>

      <myBasket.Provider value={{mySetPage: setPage, myScore: score , mySetScore:setScore}}>
         {page == "homepage" && <HomePage/>}
         {page == "question" && <Question/>}
         {page == "result" && <Result/>}
      </myBasket.Provider>
      
      
      
    </div>
  )
}

export default App