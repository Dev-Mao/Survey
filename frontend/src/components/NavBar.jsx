import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "../pages/Wall.module.css";
import PropTypes from "prop-types";

// Función para cerrar sesión
const NavBar = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    // Remover el token y el role del usuario
    localStorage.removeItem("token");
    // Redirigir al inicio de sesión
    navigate("/");
  };

  const handleShowPreviousResults = () => {
    props.setShowPreviousResults(true);
  };

  return (
    <div className={styles.navBar}>
      {!props.showPreviousResults && (
        <button
          className={styles.btnPreviousResults}
          onClick={handleShowPreviousResults}
        >
          Historial de resultados
        </button>
      )}
      <button className={styles.btnLogout} onClick={logout}>
        <RiLogoutBoxRLine className="navBar-icon" />
        Logout
      </button>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  showPreviousResults: PropTypes.bool,
  setShowPreviousResults: PropTypes.func,
};
