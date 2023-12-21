import React, { useState, useEffect } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";
import { questionsPool } from "./questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [remainingQuestions, setRemainingQuestions] = useState(questionsPool);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setRemainingQuestions(questionsPool);
    selectRandomQuestion();
  }, []);

  const selectRandomQuestion = () => {
    if (remainingQuestions.length === 0) {
      setIsQuizOver(true);
      setRemainingQuestions(questionsPool);
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const newQuestion = remainingQuestions[randomIndex];
    setCurrentQuestion(newQuestion);

    setRemainingQuestions((prev) => prev.filter((q) => q !== newQuestion));
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    selectRandomQuestion();
  };

  const handleResetClick = () => {
    setScore(0);
    selectRandomQuestion();
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView
          handleResetClick={handleResetClick}
          score={score}
          questions={questionsPool}
        />
      ) : (
        currentQuestion && (
          <QuizView
            question={currentQuestion}
            handleAnswerClick={handleAnswerClick}
          />
        )
      )}
    </div>
  );
}

export default App;
