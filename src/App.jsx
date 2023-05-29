import { useEffect, useMemo, useState } from "react";
import styles from "./styles.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const moneyList = useMemo(
    () => [
      { id: 14, amount: "$ 1000000" },
      { id: 13, amount: "$ 500000" },
      { id: 12, amount: "$ 250000" },
      { id: 11, amount: "$ 125000" },
      { id: 10, amount: "$ 64000" },
      { id: 9, amount: "$ 32000" },
      { id: 8, amount: "$ 8000" },
      { id: 7, amount: "$ 4000" },
      { id: 6, amount: "$ 2000" },
      { id: 5, amount: "$ 1000" },
      { id: 4, amount: "$ 500" },
      { id: 3, amount: "$ 300" },
      { id: 2, amount: "$ 200" },
      { id: 1, amount: "$ 100" },
    ],
    []
  );

  const questions = [
    {
      id: 1,
      question: "Who is the founder of Laravel",
      answers: [
        {
          answer: "Nweke Godswill",
          correct: false,
        },
        {
          answer: "Mark zukerberg",
          correct: false,
        },
        {
          answer: "Taylor Outwell",
          correct: true,
        },
        {
          answer: "Elon Musk",
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: "What is the command to create a new Laravel project?",
      answers: [
        {
          answer: "laravel new project-name",
          correct: true,
        },
        {
          answer: "create laravel project-name",
          correct: false,
        },
        {
          answer: "make:laravel project-name",
          correct: false,
        },
        {
          answer: "new laravel project-name",
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: "Which directory contains the application's configuration files in Laravel?",
      answers: [
        {
          answer: "app",
          correct: false,
        },
        {
          answer: "config",
          correct: true,
        },
        {
          answer: "resources",
          correct: false,
        },
        {
          answer: "public",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "How can you define a route parameter in Laravel?",
      answers: [
        {
          answer: "{param}",
          correct: true,
        },
        {
          answer: ":param",
          correct: true,
        },
        {
          answer: "(param)",
          correct: false,
        },
        {
          answer: "<param>",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following is NOT a valid method for sending data using an HTTP request in Laravel?",
      answers: [
        {
          answer: "POST",
          correct: false,
        },
        {
          answer: "PUT",
          correct: false,
        },
        {
          answer: "DELETE",
          correct: false,
        },
        {
          answer: "FETCH",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "What is the purpose of Laravel migrations?",
      answers: [
        {
          answer: "To create database tables",
          correct: false,
        },
        {
          answer: "To seed the database with initial data",
          correct: false,
        },
        {
          answer: "To manage database schema changes",
          correct: true,
        },
        {
          answer: " To define relationships between tables",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "In Laravel, which artisan command is used to generate a new controller?",
      answers: [
        {
          answer: "make:controller",
          correct: true,
        },
        {
          answer: "create:controller",
          correct: false,
        },
        {
          answer: "generate:controller",
          correct: false,
        },
        {
          answer: "new:controller",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the correct syntax to retrieve a single record from the database using ",
      answers: [
        {
          answer: "Model::get()",
          correct: false,
        },
        {
          answer: "Model::find($id)",
          correct: true,
        },
        {
          answer: "Model::first()",
          correct: false,
        },
        {
          answer: "Model::where($condition)->first()",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "How do you define a global variable in PHP?",
      answers: [
        {
          answer: "$GLOBALS['variable_name'] = value;",
          correct: true,
        },
        {
          answer: "define('variable_name', value);",
          correct: false,
        },
        {
          answer: "var variable_name = value;",
          correct: false,
        },
        {
          answer: "global variable_name = value;",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "How can you check if a session variable is set in PHP?",
      answers: [
        {
          answer: "isset($variable)",
          correct: false,
        },
        {
          answer: "empty($variable)",
          correct: false,
        },
        {
          answer: "isset($_SESSION['variable'])",
          correct: true,
        },
        {
          answer: "empty($_SESSION['variable'])",
          correct: false,
        },
      ],
    },
  ];

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyList.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyList, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
         <div className="main">
        {stop ? (
          <h1 className="endText">You Earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <Trivia
              questions={questions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setStop={setStop}
            />
          </>
        )}
      </div>
      <div className="moneyBar">
        <ul className="moneyList">
          {moneyList.map((money, index) => {
            return (
              <li
                key={index}
                className={
                  questionNumber === money.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{money.id}</span>
                <span className="MoneyListItemAmount">{money.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername}/> }
     
    </div>
  );
}

export default App;
