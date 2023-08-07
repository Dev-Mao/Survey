import PropTypes from "prop-types";
import styles from "./Results.module.css";

const Results = (props) => {
  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.titleResults}>¡Tus resultados están listos!</h1>
      <span>Hay un %{props.points * 10} de probabilidad de que sobrevivas</span>
      {props.points >= 0 && props.points < 4 ? (
        <>
          <img
            className={styles.imgResult}
            src="https://i.pinimg.com/1200x/3f/87/c5/3f87c5b2a2e06bfaf5d37d974f607a02.jpg"
            alt="resultado"
          />
          <p>
            Déjame decirte que no estás preparado/a para sobrevivir ni un solo
            día en el apocalipsis zombi, eres carnaza de zombi. Si tienes mucha
            surte y encuentras algún grupo que te ayude, igual y logras
            sobrevivir un par de días, pero la tienes muy complicada.
          </p>
        </>
      ) : props.points >= 4 && props.points < 8 ? (
        <>
          <img
            className={styles.imgResult}
            src="https://yt3.ggpht.com/vzjvmKClbsUqTxY8IpcO8DBPY9Pn10NJcxq1IyoQbZ0qbdccDWQXQJPWlnOcoEFIVNrJrbNVkndrzw=s640-nd-v1"
            alt="resultado"
          />
          <p>
            Tienes posibilidades de sobrevivir, pero muy pocas, eres un/a casi
            superviviente. Podrías estar preparado/a para entrentarte a estos
            muertos andantes y lo sabes. Aunque tus ideas no son las mejores del
            mundo, con mucha suerte podrías sobrevivir algunas semanas.
          </p>
        </>
      ) : (
        <>
          <img
            className={styles.imgResult}
            src="https://victoraqui.com/wp-content/uploads/2022/08/5a3a9acec78c0.jpg"
            alt="resultado"
          />
          <p>
            ¡Enhorabuena! Eres todo un experto en sobrevivir ante este
            apocalipsis, estás hecho todo un cazador de zombis. Eres el/la
            aliado/a que todo el mundo quisiera tener en su grupo. Sin embargo
            piensa que hay una pequeña posibilidad de que no sobrevivas, ya que
            en un mundo tan hostil una simple herida mal curada puede ser tu
            perdición.
          </p>
        </>
      )}
    </div>
  );
};

export default Results;

Results.propTypes = {
  points: PropTypes.number,
};
