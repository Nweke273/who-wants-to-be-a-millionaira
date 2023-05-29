import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import wrong from "../assets/wrong.mp3";
import correct from "../assets/correct.mp3";
import wait from "../assets/wait.mp3";
const Trivia = ({ questions, questionNumber, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [introSound] = useSound(play);
  const [answerCorrect] = useSound(correct);
  const [answerWrong] = useSound(wrong);

  useEffect(() => {
    introSound();
  }, [introSound]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (selectedAns) => {
    setSelectedAnswer(selectedAns);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(selectedAns.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      if (selectedAns.correct) {
        answerCorrect();

        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        answerWrong();
        delay(3000, () => {
          setStop(true);
        });
      }
    });
  };

  useEffect(() => {
    // Effect function
    setQuestion(questions[questionNumber - 1]);

    // Cleanup function
    // return () => {
    //   console.log("Component unmounted");
    // };
  }, [questions, questionNumber]); // Empty dependency array

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answerObject, index) => (
          <div
            key={index}
            className={selectedAnswer === answerObject ? className : "answer"}
            onClick={() => handleClick(answerObject)}
          >
            {answerObject.answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
