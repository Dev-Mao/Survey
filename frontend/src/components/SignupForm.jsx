import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Forms.module.css";

const SignupForm = () => {
  // Llamado a funciones para formularios
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();

  // Manejar el envío del formulario y hacer la solicitud de la api para iniciar sesión
  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json().then((data) => {
            // Guardar datos en el localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", data.user);
            console.log(data.user);
            // Redirigir al muro cuando haya usuario
            navigate("/wall");
          });
        } else {
          throw new Error("Fallo al registrarse");
        }
      })
      .catch((error) => {
        setError("password", { type: "invalid", message: error.message });
      });
  };

  const handleClickLogin = () => {
    navigate("/");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputLoginContainer}>
          <label htmlFor="email" className={styles.label}>
            Correo
          </label>
          <input
            {...register("email", {
              required: "Ingresa un correo",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo inválido",
              },
            })}
            type="text"
            className={styles.input}
            id="email"
            placeholder="ejemplo@test.com"
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.inputLoginContainer}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input
            {...register("password", { required: "Ingresa una contraseña" })}
            type="password"
            className={styles.input}
            id="password"
            placeholder="•••••••"
          />
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Registrar
        </button>
      </form>

      <span className={styles.span}>
        ¿Ya tienes una cuenta?{" "}
        <a href="" className={styles.a} onClick={handleClickLogin}>
          Inicia sesión
        </a>
      </span>
    </>
  );
};

export default SignupForm;
