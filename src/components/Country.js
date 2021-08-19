import { Link } from "react-router-dom";
import "./country.css";

export default function Country({ name, population, region, flag, capital }) {
  return (
    <article>
      <img src={flag} alt={name} />
      <div className="country__description">
        <h3>
          <Link
            to={`/country/${name.toLowerCase()}`}
            className="country__title"
          >
            {name}
          </Link>
        </h3>
        <p className="country__text">Capital: {capital}</p>
        <p className="country__text">Region: {region}</p>
        <p className="country__text">Population: {population}</p>
      </div>
    </article>
  );
}
