import { useParams, Link } from "react-router-dom";

import "./countryInfo.css";

export default function CountryInfo({ countries }) {
  const { countryName } = useParams();

  const country = countries.find(
    (country) => country.name.toLowerCase() === countryName
  );

  return (
    <div className="country-info__container">
      <Link to="/" className="btn-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        Go back
      </Link>
      <div className="country-info">
        <img
          src={country?.flag}
          alt={country?.name}
          className="country-info__img"
        />
        <div className="country-info__description">
          <h1>{country?.name}</h1>
          <p>
            <b>Capital:</b> {country?.capital}
          </p>
          <p>
            <b>Subregion:</b> {country?.subregion}
          </p>
          <p>
            <b>Native name:</b> {country?.nativeName}
          </p>
          <ul className="country-info__list">
            <b>Languages:</b>
            {country?.languages?.map((lang, index) => (
              <li key={index}>{lang.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
