import LoginForm from "../components/LoginForm";
import styles from "./Login-Signup.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.background}>
        <section className={styles.containerLogin}>
          <h1 className={styles.title}> ¡Bienvenido/a de nuevo!</h1>
          <LoginForm />
        </section>
      </div>
    </>
  );
};

export default Login;
