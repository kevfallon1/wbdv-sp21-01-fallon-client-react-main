import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}, {setQuestions}) => {
  return(
      <div>
        {
          question.type === "TRUE_FALSE" &&
          <TrueFalseQuestion
              question={question}
              setQuestions={setQuestions}/>
        }
        {
          question.type === "MULTIPLE_CHOICE" &&
          <MultipleChoiceQuestion
              question={question}/>
        }
      </div>
  )
}

export default Question;
