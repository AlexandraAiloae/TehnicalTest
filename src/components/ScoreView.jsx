import React from "react";
import "./ScoreView.css";

const ScoreView = ({ handleResetClick, score, questions }) => {
  return (
    <div>
      <p>
        🚀 You got {score}/{questions.length} answers right!{" "}
      </p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ScoreView;
