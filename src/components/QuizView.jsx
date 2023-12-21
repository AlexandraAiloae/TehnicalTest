import React, { useState } from "react";
import "./QuizView.css";

const QuizView = ({ question, handleAnswerClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const isCorrect = selectedOption === question.correctAnswer;
      handleAnswerClick(isCorrect);
      setSelectedOption(null);
    }
  };

  return (
    <>
      <div className="question">
        <div className="question-text">{question.question}</div>
      </div>

      <div className="answer">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionClick(option)}
            className={selectedOption === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>

      <button onClick={handleSubmit} className="submit-answer">
        Submit Answer
      </button>
    </>
  );
};

export default QuizView;
