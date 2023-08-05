import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

const Wall = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    const handleNextQuestion = () => {
        setCurrentIndexQuestion(prevIndex => prevIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };
    
    useEffect(() => {
        // Solicitud a la API para traer las preguntas
        fetch('http://localhost:3000/api/questions')
          .then(response => response.json())
          .then(data => {
            setQuestions(data.questions)
          })
          .catch(error => {
            console.error('API error:', error);
          });
      }, []);

    return(
        <div>
        {currentIndex === 0 && (
            <div>
          <p>
            Nuestro planeta ha enfrentado muchos problemas, desde la contaminación
            y el calentamiento global hasta la sobrepoblación. Recientemente,
            también hemos tenido que lidiar con una pandemia de Covid-19. Justo
            cuando pensábamos que no podía empeorar, aparecen los{" "}
            <strong>ZOMBIES</strong>
          </p>
          <button onClick={handleNext}>Siguiente</button>
          </div>
        )}
        {currentIndex === 1 && (
            <div>
          <p>
            Imagina que estás tranquilo en casa, disfrutando de un tazón de cereales
            con leche para el desayuno, cuando de repente, las alarmas de la
            televisión se activan:{" "}
            <strong>HAY UN VIRUS INCONTROLABLE QUE TRANSFORMA A LOS INFECTADOS EN ZOMBIES</strong>
          </p>
          <button onClick={handlePrevious}>Atrás</button>
          <button onClick={handleNext}>Siguiente</button>
          </div>
        )}
        {currentIndex === 2 && (
          <div>
            <p>
                Y piensas: <strong>¡Por fin! El momento que tanto he esperado.</strong>{" "}
                Rápidamente, te asomas a la calle y ves el caos, personas corriendo
                desesperadas y, detrás de ellas, los <strong>infectados.</strong>
            </p>
            <button onClick={handlePrevious}>Atrás</button>
            <button onClick={handleNext}>Siguiente</button>
          </div>
        )}
        {currentIndex === 3 && (
          <div>
            <p>En ese momento, tienes poco tiempo para reaccionar. ¿Crees que lograrías sobrevivir?</p>
            <button onClick={handleNext}>Averigüémoslo</button>
          </div>
        )}
        {currentIndex >= 4 && currentIndexQuestion < questions.length && (
        <div>
        <QuestionCard key={questions[currentIndexQuestion]._id} question={questions[currentIndexQuestion]} />
        {currentIndexQuestion === questions.length-1 ? (
        <button onClick={handleNextQuestion}>Ver resultados</button>
      ): (
        <button onClick={handleNextQuestion}>Siguiente</button>
      )}
        
        </div>
      )}
      </div>
    )
}
export default Wall;