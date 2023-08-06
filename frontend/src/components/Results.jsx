import PropTypes from "prop-types";
import styles from "./Results.module.css"

const Results = (props) => {
  return (
    <div className={styles.resultsContainer}>
      <h1>¡Tus resultados están listos!</h1>
      <span>Hay un %{props.points * 10} de probabilidad de que sobrevivas</span>
      {props.points >= 0 && props.points < 4 ? (
        <p>
          Déjame decirte que no estás preparado/a para sobrevivir ni un solo día
          en el apocalipsis zombie, eres carnaza de zombie. Si tienes mucha
          surte y encuentras algún grupo que te ayude, igual y logras sobrevivir
          un par de días, pero la tienes muy complicada.
        </p>
      ) : props.points >= 4 && props.points < 8 ? (
        <p>
          Tienes posibilidades de sobrevivir, pero muy pocas, eres un/a casi
          superviviente. Podrías estar preparado/a para entrentarte a estos
          muertos andantes y lo sabes. Aunque tus ideas no son las mejores del
          mundo, con mucha suerte podrías sobrevivir algunas semanas.
        </p>
      ) : (
        <p>
          ¡Enhorabuena! Eres todo un experto en sobrevivir ante este
          apocalipsis, estás hecho todo un cazador de zombies. Eres el/la
          aliado/a que todo el mundo quisiera tener en su grupo. Sin embargo
          piensa que hay una pequeña posibilidad de que no sobrevivas, ya que en
          un mundo tan hostil una simple herida mal curada puede ser tu
          perdición.
        </p>
      )}
    </div>
  );
};

export default Results;

Results.propTypes = {
  points: PropTypes.number,
};
