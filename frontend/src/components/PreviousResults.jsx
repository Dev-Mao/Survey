import { useState, useEffect } from "react";
import styles from "./PreviousResults.module.css";
import PropTypes from "prop-types";
const PreviousResults = (props) => {
  const [previousResults, setPreviousResults] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    // Solicitud a la API para traer os resultados previos del usuario
    fetch(`http://localhost:3000/api/users/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPreviousResults(data.user.results);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);
  const handleHidePreviousResults = () => {
    props.setShowPreviousResults(false);
    props.handleGoBack();
  };
  return (
    <>
      {previousResults.length === 0 ? (
        <p className={styles.textEmptyResults}>Aún no tienes intentos.</p>
      ) : (
        <div className={styles.containerTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tableRow}>Intento</th>
                <th className={styles.tableRow}>Probabilidad de sobrevivir</th>
              </tr>
            </thead>
            <tbody>
              {previousResults.map((result, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>%{result * 10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        className={styles.btnCloseHistory}
        onClick={handleHidePreviousResults}
      >
  
        Volver al inicio
      </button>
    </>
  );
};

export default PreviousResults;

PreviousResults.propTypes = {
  handleGoBack: PropTypes.func,
  setShowPreviousResults: PropTypes.func,
};
