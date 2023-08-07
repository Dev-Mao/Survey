# ¿Sobrevivirás?
![¿Sobrevivirás?](https://i.pinimg.com/736x/65/0d/68/650d68a2e42b63feb188702dbc63d550.jpg)

## Table of Contents

* [1. Introducción](#1-introducción)
* [2. Características](#2-características)
* [3. Tecnologías usadas](#3-tecnologías-usadas)
* [4. ¿Cómo usarla?](#4-cómo-usarla)
* [5. Mejoras futuras](#6-mejoras-futuras)

***
## 1. Introducción
**¿Sobrevivirás?** es una página web interactiva que te permite descubrir si podrías sobrevivir a un apocalipsis zombi. Como usuario tienes la opción de iniciar sesión o registrarte para acceder al contenido completo y participar en el cuestionario. Si no se ha iniciado sesión, se limita el acceso a la pantalla principal.

## 2. Características
* Registro e inicio de sesión de usuarios.
* Navegación fluida entre las secciones de la página.
* Cuestionario interactivo sobre la supervivencia en un apocalipsis zombi.
* Visualización de resultados al finalizar las preguntas.
* Cierre de sesión.
* Diseño responsivo

## 3. Tecnologías usadas
**¿Sobrevivirás?** fue contruida con las siguientes tecnologías:

#### Frontend:
* **HTML**: El lenguaje de marcado estándar para crear la estructura básica de la página web.
* **CSS**: Para el diseño y la presentación visual de la página, aplicando estilos y diseños a los elementos HTML.
* **JavaScript**: Para agregar interactividad y funcionalidad a la página, como la validación de formularios, la navegación y la manipulación de elementos del DOM.
* **React**: Para crear interfaces de usuario interactivas y componentes reutilizables.

#### Backend:
* **Node.js**: Un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.
* **Express.js**: Un framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs RESTful.
* **MongoDB**: Una base de datos NoSQL orientada a documentos que fue útil para almacenar datos de usuarios y preguntas del cuestionario.
* **Mongoose**: Una biblioteca de Node.js para interactuar con bases de datos MongoDB y definir modelos de datos.

## 4. ¿Cómo usarla?
* Clona este repositorio en tu máquina local:
```sh 
git clone https://github.com/Dev-Mao/Survey.git
```
* Entra a la carpeta de tu proyecto:
```sh 
cd tu_proyecto
```
* Entra a la carpeta "backend":
```sh 
cd .\backend\ 
o
cd backend/
```
* Pon a correr la API:
```sh 
npm start
```
* Deja corriendo la API, abre otra terminal y entra ahora a la carpeta "frontend":
```sh 
cd .\frontend\ 
o
cd frontend/
```
* Pon a correr la página:
```sh 
npm run dev
```
***Nota**: Debes tener libres tus puertos 3000 y  5173*

Ahora puedes disfrutar de **¿Sobrevivirás?** registrándote con tus datos, o si prefieres no crear una cuenta, puedes iniciar sesión con esta información: 

|Correo      |Contraseña                   |
|-------------------------|-------------------------|
|invitado@gmail.com  |123456 |

## 5. Mejoras futuras

* **Historial de Intentos**:
Implementar un historial de intentos para cada usuario, ya que les permitirá realizar un seguimiento de sus resultados anteriores y ver cómo han mejorado sus capacidades para sobrevivir a un apocalipsis zombi a lo largo del tiempo. Para lograr esto, podría utilizar la base de datos para almacenar los resultados de cada intento.

* **Mejora del diseño y amigabilidad**:
El diseño y la amigabilidad de una aplicación son aspectos fundamentales para brindar una experiencia de usuario atractiva. El plan es estilizar la interfaz de usuario y hacerla más atractiva visualmente. Utilizando colores, iconos y elementos visuales que complementen la temática del apocalipsis zombi. Además, asegurarme de que la navegación sea sencilla y que los usuarios puedan encontrar fácilmente lo que están buscando.

* **Refactorización del código**: 
El objetivo de la refactorización es mejorar la legibilidad, mantenibilidad y eficiencia del código, reduciendo la duplicación y aplicando buenas prácticas de programación.

* **Despliegue del proyecto**:
Desplegar el proyecto en un servidor en línea permitirá que los usuarios accedan a él desde cualquier lugar. Para ello, podría considerar opciones de alojamiento en la nube como Heroku, AWS, GCP o DigitalOcean. 

* **Pruebas y optimización**:
Realizar pruebas mi aplicación ayudará a identificar y corregir errores antes de que los usuarios los encuentren. Implementar pruebas unitarias y de integración para asegurar el correcto funcionamiento de los componentes y la interacción entre ellos.

* **Feedback de Usuarios**:
Escuchar las opiniones y comentarios de los usuarios para identificar áreas de mejora y nuevas funcionalidades que puedan agregar valor. 