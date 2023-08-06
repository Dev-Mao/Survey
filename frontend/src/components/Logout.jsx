import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "../pages/Wall.module.css";
// Función para cerrar sesión
const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remover el token y el role del usuario
    localStorage.removeItem("token");
    // Redirigir al inicio de sesión
    navigate("/");
  };

  return (
    <button className = {styles.btnLogout} onClick={logout}>
      <RiLogoutBoxRLine className="navBar-icon" />
      Logout
    </button>
  );
};

export default Logout;
