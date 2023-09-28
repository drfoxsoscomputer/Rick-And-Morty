import style from "./About.module.css";
import yo from "../../utils/img/yo.png";

const About = () => {
  return (
    <div className={style.about}>
      <img
        src={yo}
        alt=""
      />
      <div>
        <h1>About</h1>
        <h3>
               Hola!, Soy Denis "DrFox" Piña y soy estudiante Full Stack Developer en Henry, chohorte PT14b. Además de programar, me gusta leer, ver series y jugar videojuegos.
          <br />
        </h3>
        <h3>
               Mi proyecto consiste en una aplicación web (SPA) que muestra información sobre los personajes de Rick y Morty, usando la API pública de la serie. Para desarrollarlo, usé JS, React
          Native, Css, React Router (Frontend), Express, Sequelize, Postgres (Backend)Paginate. Algunos de los desafíos que tuve que superar fueron implementar filtrado y búsqueda. Aprendí mucho sobre
          cómo usar React Hooks, Axios, componentes funcionales y enrutamiento dinámico.
        </h3>
      </div>
    </div>
  );
};

export default About;
