import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./QuestionCard.module.css"
const QuestionCard = (props) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  // Función para acumular los puntos
  const handleResult = (question) => {
    if (userAnswer === question.correct) {
      props.setPoints(props.points + 1);
    }
  };

  // Función para guardar la opción seleccionada por el usuario
  const handleSelectOption = (answer, index) => {
      if (userAnswer === answer) {
      setUserAnswer("");
      setSelectedOptionIndex(null);
    } else {
      setUserAnswer(answer);
      setSelectedOptionIndex(index);
    }
  };

  // Función para mostrar los resultados
  const handleShowResults = () => {
    props.setShowResults(true);
  };
  return (
    <div className={styles.cardQuestion}>
      <span className={styles.questionText}>{props.question.questionText}</span>
        {props.question.img && (
          <img
            src={props.question.img}
            alt={props.question.questionText}
            className={styles.questionImg}
          />
        )}
      <div className={styles.optionsContainer}>
        {/* Mostrar las opciones de respuesta */}
        {props.question.options.map((option, index) => (
          <div
          className={`${styles.option} ${
            userAnswer === option.letter && selectedOptionIndex === index ? styles.selected : ""
          }`}
          key={option._id}
          onClick={() => handleSelectOption(option.letter, index)}
        >
          <span  className={styles.optionsText}>{option.text}</span>
          {option.imageUrl && <img className={styles.optionsImg} src={option.imageUrl} alt={option.text} />}
        </div>
        ))}
      </div>
      {props.currentIndexQuestion === props.questions.length - 1 ? (
        <button
          disabled={!userAnswer}
          onClick={() => {
            handleResult(props.question);
            handleShowResults();
          }}
          className={styles.btnNext}
        >
          Ver resultados
        </button>
      ) : (
        <button
          disabled={!userAnswer}
          onClick={() => {
            handleResult(props.question);
            props.handleNextQuestion();
          }}
          className={styles.btnNext}
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default QuestionCard;

QuestionCard.propTypes = {
  setPoints: PropTypes.func,
  points: PropTypes.number,
  setShowResults: PropTypes.func,
  question: PropTypes.object,
  currentIndexQuestion: PropTypes.number,
  questions: PropTypes.array,
  handleNextQuestion: PropTypes.func,
};
