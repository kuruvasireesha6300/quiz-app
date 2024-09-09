import React from 'react'
import { myBasket } from '../App'

const quizData = [
    //0
    {
       title: "What is 10 + 30?",
       A: 100,
       B: 50,
       C: 40,
       D: 60,
       Answer: "c"
    
    },
    //1
    {
       title: "What is the use of useState() in React?",
       A: "To store the data",
       B: "To create the data in a random manner",
       C: "Both A and B",
       D: "None of the Above",
       Answer: "A"
    },
    //2
    {
        title: "What does + stands for?",
        A: "Addition",
        B: "Substraction",
        C: "Multiplication",
        D: "Division",
        Answer: "A"
    },
    //3
    {
        title: "What is the use of React?",
        A: "To develop UI",
        B: "To develop UI",
        C: "Both A and B",
        D: "None of the above",
        Answer: "A"
    }
]

function Question() {

    const {mySetPage, myScore, mySetScore} = React.useContext(myBasket) //{mySetPage: setPage, myScore: Score , mySetScore:setScore}
    const [currentQuestion, setCurrentQuestion]= React.useState(0)

    // currentQuestion = 0

    const [optionChoosen, setOptionChoosen] = React.useState("")

    //optionChoosen = ""

    

    // score = 0

    function nextButton()
    {
        if(optionChoosen === quizData[currentQuestion].Answer)
        {
            mySetScore(myScore + 1)
        }
        //Logic to increase the value present in current question variable by +1
        setCurrentQuestion(currentQuestion + 1)
    }

    function submitButton()
    {
        if(optionChoosen === quizData[currentQuestion].Answer)
        {
            mySetScore(myScore + 1)
        }
        mySetPage("result")
    }
    
  return (
    <div>
        <h2>Q: {quizData[currentQuestion].title}</h2>

        A:<button style={{margin:3}}  className='btn btn-outline-dark' onClick={function()
            {
                setOptionChoosen("A")
            }}>{ quizData[currentQuestion].A }</button><br></br>

        B:<button style={{margin:3}} className='btn btn-outline-dark'onClick={function()
            {
                setOptionChoosen("B")
            }}>{ quizData[currentQuestion].B }</button><br></br>

        C:<button style={{margin:3}} className='btn btn-outline-dark'onClick={function()
            {
                setOptionChoosen("C")
            }}>{ quizData[currentQuestion].C }</button><br></br>

        D:<button style={{margin:3}} className='btn btn-outline-dark'onClick={function()
            {
                setOptionChoosen("D")
            }}>{ quizData[currentQuestion].D }</button><br></br>

            {
                currentQuestion === quizData.length - 1 ? <button className='btn btn-danger' onClick={submitButton}>Submit</button>:<button className='btn btn-primary' onClick={nextButton}>Next</button>
            }

        
        
    </div>
  )
}

export default Question