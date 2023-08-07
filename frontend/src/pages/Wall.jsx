import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Results from "../components/Results";
import Logout from "../components/Logout";
import styles from "./Wall.module.css";
import Next from "../assets/images/zombieNext.png"
import Previous from "../assets/images/zombiPrevious.png"
import {GiRaiseZombie} from 'react-icons/gi'
const Wall = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleGoBack = () => {
    setShowResults(false);
    setCurrentIndex(0);
    setCurrentIndexQuestion(0);
    setPoints(0);
  };

  const handleNextQuestion = () => {
    setCurrentIndexQuestion((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Solicitud a la API para traer las preguntas
    fetch("http://localhost:3000/api/questions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  const user = localStorage.getItem("user").split("@");

  return (
    <div className={styles.background}>
      <Logout />
      {showResults ? (
        <>
          <Results points={points} />
          <button className={styles.btnGoBack} onClick={handleGoBack}>
            Volver al inicio
          </button>
        </>
      ) : (
        <>
          {currentIndex === 0 && (
            <div className={styles.container}>
              <p>
                <span>
                  ¡Hola <strong>{user[0]}</strong>, qué alegría tenerte por acá!
                  Déjame darte un poco de contexto.
                </span>
                <br /> <br />
                Nuestro planeta ha enfrentado muchos problemas, desde la
                contaminación y el calentamiento global hasta la sobrepoblación.
                Recientemente, también hemos tenido que lidiar con una pandemia
                de Covid-19. Justo cuando pensábamos que no podía empeorar,
                aparecen los <strong className={styles.strongGreen}>ZOMBIES</strong>
              </p>
              <button className={styles.buttons} onClick={handleNext}>
                <img className = {styles.imageBtn} src={Next} alt="" />
                Siguiente
              </button>
            </div>
          )}
          {currentIndex === 1 && (
            <div className={styles.container}>
              <button className={styles.buttonsPrevious} onClick={handlePrevious}>
              <img className = {styles.imageBtn} src={Previous} alt="" />
                Anterior
              </button>
              <p>
                Imagina que estás tranquilo/a en casa, disfrutando de un tazón de
                cereales con leche para el desayuno, cuando de repente, las
                alarmas de la televisión se activan:
                <br />
                <strong>
                &quot;HAY UN VIRUS INCONTROLABLE QUE TRANSFORMA A LOS INFECTADOS EN
                  ZOMBIES&quot;
                </strong>
              </p>              
              <button className={styles.buttons} onClick={handleNext}>
                <img className = {styles.imageBtn} src={Next} alt="" />
                Siguiente
              </button>
            </div>
          )}
          {currentIndex === 2 && (
            <div className={styles.container}>
              <button className={styles.buttonsPrevious} onClick={handlePrevious}>
              <img className = {styles.imageBtn} src={Previous} alt="" />
                Anterior
              </button>
              <p>
                Y piensas:{" "}
                <strong>&quot;¡Por fin! El momento que tanto he esperado&quot;.</strong>{" "}
                Rápidamente, te asomas a la calle y ves el caos, personas
                corriendo desesperadas y, detrás de ellas, los{" "}
                <strong className={styles.strongGreen}>infectados.</strong>
              </p>
              <button className={styles.buttons} onClick={handleNext}>
                <img className = {styles.imageBtn} src={Next} alt="" />
                Siguiente
              </button>
            </div>
          )}
          {currentIndex === 3 && (
            <div className={styles.containerFinal}>
              <p>
                En ese momento, tienes poco tiempo para reaccionar. ¿Crees que
                lograrías sobrevivir?
              </p>
              <button className={styles.btnGo} onClick={handleNext}>
                <GiRaiseZombie className={styles.icon}/>
                  Averigüémoslo
                <GiRaiseZombie className={styles.icon}/>
              </button>
            </div>
          )}
          {currentIndex >= 4 && currentIndexQuestion < questions.length && (
            <div className={styles.containerCards}>
              <QuestionCard
                key={questions[currentIndexQuestion]._id}
                question={questions[currentIndexQuestion]}
                handleNextQuestion={handleNextQuestion}
                currentIndexQuestion={currentIndexQuestion}
                questions={questions}
                setPoints={setPoints}
                setShowResults={setShowResults}
                points={points}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Wall;
