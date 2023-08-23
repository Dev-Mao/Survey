import PropTypes from "prop-types";
import styles from "./Results.module.css";
import { useState, useEffect } from "react";

const Results = (props) => {
  const [results, setResults] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function queryTakeShape() {
      const query = `
        query {
          getResultsList {
            items {
              Points
              ResultText
              imageUrl
            }
          }
        }
      `;
    
      try {
        const response = await fetch(
          'https://api.takeshape.io/project/989c29f4-2bcd-4a00-bcc5-be2dd04e4e23/v3/graphql',
          {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
              Authorization: 'Bearer 51e989b0af5c46d0b6335703e9fbea78',
              'Content-Type': 'application/json',
            },
          }
        );

        const data = await response.json();
        setResults(data.data.getResultsList);
        setIsLoading(false); // Marcamos la carga como completa
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false); // En caso de error, también marcamos la carga como completa
      }
    }

    queryTakeShape();
  }, []);

  if (isLoading) {
    return <p>Cargando resultados...</p>;
  }

  const matchingResult = results.items.find(result => result.Points.includes(props.points));
     
  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.titleResults}>¡Tus resultados están listos!</h1>
      <span>Hay un %{props.points * 10} de probabilidad de que sobrevivas</span>

        
          <img
            className={styles.imgResult}
            src={matchingResult.imageUrl}
            alt="resultado"
          />
          <p>
           {matchingResult.ResultText}
          </p>
        
    </div>
  );
};

export default Results;

Results.propTypes = {
  points: PropTypes.number,
};
