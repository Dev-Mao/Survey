import SignupForm from "../components/SignupForm";
import styles from "./Login-Signup.module.css";

const Singup = () => {
  return (
    <>
      <div className={styles.background}>
        <section className={styles.containerLogin}>
          <h1 className={styles.title}> ¿Primera vez por aquí? ¡Regístrate!</h1>
          <SignupForm />
        </section>
      </div>
    </>
  );
};

export default Singup;
